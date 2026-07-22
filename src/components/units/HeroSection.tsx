import { useRef, useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

const STACK = [
  {
    name: "React",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=760&h=760&fit=crop&auto=format",
    alt: "React development UI components",
  },
  {
    name: "TypeScript",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85eb85f9?w=760&h=760&fit=crop&auto=format",
    alt: "TypeScript code in a code editor",
  },
  {
    name: "Node.js",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=760&h=760&fit=crop&auto=format",
    alt: "Node.js backend development",
  },
  {
    name: "PostgreSQL",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=760&h=760&fit=crop&auto=format",
    alt: "PostgreSQL database management",
  },
  {
    name: "AWS",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=760&h=760&fit=crop&auto=format",
    alt: "AWS cloud infrastructure",
  },
];

const CARD_W = 320;
const CARD_H = 320;
const BASE_ROTATION = -12;
const CARD_OFFSET_CLOSED = 24;
const CARD_OFFSET_OPEN = 10;
const CENTER_INDEX = 2;
const DEFAULT_LABEL = "A Website, Sliced\u00A0\u00A0→";
const ANIM_DURATION = "0.28s";
const ARROW = "\u00A0\u00A0→";

const generateCardRandoms = () => {
  const randoms: Record<number, number> = {};
  for (let i = 0; i < STACK.length; i++) {
    randoms[i] = Math.random() * 2 - 1;
  }
  return randoms;
};

const labelTextStyle: React.CSSProperties = {
  fontFamily: "'Open Sans', sans-serif",
  fontSize: "1.35rem",
  fontWeight: 500,
  color: "#444444",
  letterSpacing: "-0.01em",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  textAlign: "center",
  whiteSpace: "nowrap",
  animationFillMode: "forwards",
  animationTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  animationDuration: ANIM_DURATION,
};

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [cardRandoms] = useState(generateCardRandoms());
  const [hoveredRandom] = useState(1);

  // Animated label state
  const [displayText, setDisplayText] = useState(DEFAULT_LABEL);
  const [exitText, setExitText] = useState<string | null>(null);
  const [animDirection, setAnimDirection] = useState<"up" | "down">("down");
  const [animKey, setAnimKey] = useState(0);
  // Ref to track previous hovered index synchronously (avoids stale state in handlers)
  const prevHoveredIndexRef = useRef<number | null>(null);

  const offset = isHovering ? CARD_OFFSET_OPEN : CARD_OFFSET_CLOSED;
  const containerH = CARD_H + (STACK.length - 1) * offset + 80;

  const getCardOffset = (index: number) => {
    const distanceFromCenter = index - CENTER_INDEX;
    if (!isHovering) return 0;
    return distanceFromCenter * 48;
  };

  const getCardRotation = (index: number): number => {
    if (hoveredCardIndex === null) {
      return BASE_ROTATION;
    }

    if (index === hoveredCardIndex) {
      return hoveredRandom;
    }

    const distanceFromHovered = index - hoveredCardIndex;
    const cardRandom = cardRandoms[index];
    const absDistance = Math.abs(distanceFromHovered);

    const perStepRotation = 2 + Math.random() * 1;
    const totalRotation = perStepRotation * absDistance;

    if (distanceFromHovered < 0) {
      return -totalRotation + cardRandom;
    } else {
      return totalRotation + cardRandom;
    }
  };

  const getCardOpacity = (index: number): number => {
    if (hoveredCardIndex === null) {
      return 1;
    }

    const distanceFromHovered = index - hoveredCardIndex;

    if (distanceFromHovered < 0) {
      const distanceAbove = Math.abs(distanceFromHovered);
      return Math.min(0.6, 0.4 - distanceAbove * 0.1);
    }

    return 1;
  };

  const handleCardEnter = (i: number) => {
    const prev = prevHoveredIndexRef.current;
    const dir: "up" | "down" = prev !== null && i < prev ? "up" : "down";

    setExitText(displayText);
    setDisplayText(`${STACK[i].name}${ARROW}`);
    setAnimDirection(dir);
    setAnimKey((k) => k + 1);

    prevHoveredIndexRef.current = i;
    setHoveredCardIndex(i);
  };

  const handleCardLeave = () => {
    // Only reset the visual card rotation — text reset happens on outer container leave
    setHoveredCardIndex(null);
  };

  const handleStackLeave = () => {
    // Only animate if the text actually changed (e.g. skip if no card was hovered)
    if (displayText !== DEFAULT_LABEL) {
      setExitText(displayText);
      setDisplayText(DEFAULT_LABEL);
      setAnimDirection("down");
      setAnimKey((k) => k + 1);
    }

    prevHoveredIndexRef.current = null;
    setIsHovering(false);
    setHoveredCardIndex(null);
  };

  // Derive animation names from direction
  const exitAnimName =
    animDirection === "down" ? "hero-label-exit-up" : "hero-label-exit-down";
  const enterAnimName =
    animDirection === "down" ? "hero-label-enter-below" : "hero-label-enter-above";

  return (
    <section
      className="relative grid items-start overflow-hidden"
      style={{
        gridTemplateColumns: "1fr 1fr",
        minHeight: "100vh",
        paddingTop: "14vh",
        fontFamily: "'Open Sans', sans-serif",
        backgroundColor: "#fafafa",
        color: "#111111",
      }}
    >
      {/* Left column — intro */}
      <div className="flex flex-col gap-8 px-10 pb-16" style={{ maxWidth: "34rem" }}>
        {/* Eyebrow label */}
        <span
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontWeight: 400,
            color: "#888888",
          }}
        >
          fullstack engineer
        </span>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "clamp(3rem, 5vw, 5.25rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#0a0a0a",
          }}
        >
          I Build
          <br />
          Things{" "}
          <br />
          <span
            style={{
              fontFamily: "'Bungee', cursive",
              fontWeight: 400,
              color: "#0a0a0a",
            }}
          >
            end‑to‑end.
          </span>
        </h1>

        {/* Body copy */}
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.9rem",
            lineHeight: 1.75,
            maxWidth: "27rem",
            color: "#666666",
            fontWeight: 400,
          }}
        >
           Crafting exceptional digital experiences with modern web technologies
           and creative problem-solving. Half a decade across frontend, backend, and
           everything between.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-6 pt-1">
          <Link
            to="/portfolio"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
              background: "#111111",
              color: "#ffffff",
              padding: "12px 28px",
              borderRadius: "9999px",
              display: "inline-block",
              transition: "background 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#333333";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#111111";
            }}
          >
            View Work →
          </Link>
          <Link
            to="/contact"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "#888888",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#888888";
            }}
          >
            Get In Touch
          </Link>
        </div>

        {/* Animated stack label */}
        <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "20px" }}>
          <div
            style={{
              position: "relative",
              height: "2.1rem",
              overflow: "hidden",
            }}
          >
            {/* Exiting text */}
            {exitText !== null && animKey > 0 && (
              <span
                key={`exit-${animKey}`}
                style={{
                  ...labelTextStyle,
                  animationName: exitAnimName,
                }}
              >
                {exitText}
              </span>
            )}
            {/* Entering text */}
            <span
              key={`enter-${animKey}`}
              style={{
                ...labelTextStyle,
                animationName: animKey > 0 ? enterAnimName : undefined,
              }}
            >
              {displayText}
            </span>
          </div>
        </div>
      </div>

      {/* Right column — image stack */}
      <div
        className="flex justify-center items-center pb-16 flex-1 mt-16"
        style={{ paddingRight: "4rem" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleStackLeave}
      >
        <div
          style={{
            filter:
              "drop-shadow(0px 28px 56px rgba(0,0,0,0.18)) drop-shadow(0px 8px 16px rgba(0,0,0,0.10))",
          }}
        >
          <div
            style={{
              position: "relative",
              width: CARD_W,
              height: containerH,
              flexShrink: 0,
            }}
          >
            {STACK.map((layer, i) => {
              const cardYOffset = getCardOffset(i);
              const cardRotation = getCardRotation(i);
              const cardOpacity = getCardOpacity(i);
              return (
                <div
                  key={layer.name}
                  style={{
                    position: "absolute",
                    top: i * offset + cardYOffset,
                    left: 0,
                    width: CARD_W,
                    height: CARD_H,
                    zIndex: STACK.length - i,
                    transform: `rotate(${cardRotation}deg)`,
                    transformOrigin: "50% 50%",
                    transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    borderRadius: 14,
                    overflow: "hidden",
                    cursor: "pointer",
                    opacity: cardOpacity,
                  }}
                  onMouseEnter={() => handleCardEnter(i)}
                  onMouseLeave={handleCardLeave}
                >
                  <ImageWithFallback
                    src={layer.img}
                    alt={layer.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
