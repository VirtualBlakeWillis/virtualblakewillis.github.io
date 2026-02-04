import { motion } from "motion/react";
import {
  Code2,
  Database,
  Globe,
  Layers,
  Terminal,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import BlakePortfolioPic from "../assets/Blake-Portfolio-Pic.jpeg";
import { Link } from "react-router";

export function AboutPage() {
  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      items: ["React", "TypeScript", "Vite", "Tailwind CSS", "SCSS", "TanStack"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend",
      icon: Terminal,
      items: ["Node.js", "Express", "Rest APIs", "Zod", "Auth0"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Database",
      icon: Database,
      items: ["PostgreSQL", "MongoDB", "QuickBase", "MySQL", "Firebase"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Tools & More",
      icon: Workflow,
      items: ["Git", "CI/CD", "Testing", "Sentry", "Netlify",],
      color: "from-orange-500 to-red-500",
    },
  ];

  const timeline = [
   
    {
      year: "2025",
      title: "Full Stack Web Developer",
      company: "LearnCraft Spanish",
      description: "With a split focus on delivering features for customers and optomizing internal processes, I've been able to contribute to the growth of LearnCraft Spanish",
    },
    {
      year: "2024",
      title: "Junior Javascript Engineer",
      company: "LearnCraft Spanish",
      description: "Started my professional journey as a Javascript Engineer, Learning the ropes and building LearnCraft Spanish into a sustainable tech product",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={BlakePortfolioPic}
                  alt="Professional portrait"
                  className="w-full h-[500px] object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20" /> */}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About Me
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                  Hey, I'm Blake. I'm a full stack developer based in Tulsa, OK.
                  I've had the oppertunity to work on a diverse range of projects,
                  from startup enviroments to local non-profits. I'm a quick learner
                   and a high impact contributor.
              </motion.p>
              <motion.p
                className="text-xl text-muted-foreground mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                I specialize translating your business needs into elegant, functional, and user-friendly web applications. If you can dream it, I can build it.
              </motion.p>
              <motion.div
                className="flex gap-4 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.div
                  className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Code2 size={32} className="text-white" />
                </motion.div>
                <motion.div
                  className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Layers size={32} className="text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Technologies I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-2xl p-6 shadow-lg"
              >
                <motion.div
                  className={`inline-block p-4 bg-gradient-to-br ${skill.color} rounded-xl mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + itemIndex * 0.05 }}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <motion.span
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: itemIndex * 0.2,
                        }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Experience</h2>
            <p className="text-xl text-muted-foreground">My professional journey</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-cyan-600"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-20"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-6 top-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 border-4 border-background"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    whileHover={{ scale: 1.5 }}
                  />

                  <motion.div
                    className="bg-card rounded-2xl p-6 shadow-lg"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                    <p className="text-purple-600 mb-3">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
{/* 
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "100%", label: "Dedication" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-6xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          
            <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl mb-8 opacity-90">
              Have a project in mind? I'd love to hear about it and discuss how we
              can bring your ideas to life.
            </p>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Start a Conversation
              <ArrowRight size={20} />
            </Link>
        </div>
      </section>
    </div>
  );
}
