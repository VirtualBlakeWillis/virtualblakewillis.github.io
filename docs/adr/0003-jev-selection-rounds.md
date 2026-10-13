# Jev Selection Rounds instead of Tag-overlap scoring

Bullets carry Tags, so ranking them by overlap with the Job Analysis's Tags would work without any model. We instead pick Bullets with TypeSafe AI's Jev classifier (`typesafe-jev-1.13.0` via DigitalOcean Serverless Inference) in three Selection Rounds per Role: all remaining Bullets are the options, the winner is removed, and the order of wins is the ranking. Jev reads Bullet text, not just Tags, so it can use Tags outside the Tag Vocabulary that the Job Analysis surfaces and judge relevance that Tags alone miss.

## Considered Options

- **Tag-overlap scoring**: free, instant, deterministic; rejected as too literal and blind to off-vocabulary Tags.
- **Single Jev call ranked by probability**: one call already returns probabilities for every option, but repeated rounds were preferred so each pick is made fresh against the remaining options.
- **Per-Bullet yes/no relevance gate**: dropped; every Role always shows its top 3 (or all, if fewer), so no absolute relevance threshold is needed.
