import { motion } from "motion/react";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Link } from "react-router";
import { learncraftProjects } from "../data/articles";
import { slugify } from "../utils/slugify";

export function HomePage() {
  const skills = [
    { icon: Code2, name: "React", color: "from-blue-500 to-cyan-500" },
    { icon: Zap, name: "Node.js", color: "from-green-500 to-emerald-500" },
    { icon: Sparkles, name: "TypeScript", color: "from-purple-500 to-pink-500" },
  ];

  // Get the first 2 featured projects
  const featuredProjects = learncraftProjects
    .filter(project => project.featured)
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-foreground via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Full Stack
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-foreground bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Crafting exceptional digital experiences with modern web technologies
            and creative problem-solving
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link 
              to="/portfolio"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg flex items-center gap-2 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
            >
              View My Work
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </Link>

            <Link 
              to="/contact"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95 transition-all block"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Floating Skill Icons */}
          <div className="mt-20 flex justify-center gap-8 flex-wrap">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                className={`p-6 bg-gradient-to-br ${skill.color} rounded-2xl shadow-lg cursor-pointer`}
              >
                <skill.icon size={32} className="text-white" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-2 bg-muted-foreground rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-32 px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              A glimpse into my recent work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Link 
                key={project.title} 
                to={`/portfolio/${slugify(project.title)}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl bg-card shadow-lg cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.categories.map((category) => (
                        <span
                          key={category}
                          className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/portfolio"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick About Preview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-6">About Me</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate full-stack developer with expertise in building
                scalable web applications. I love turning complex problems into
                elegant solutions through clean, efficient code.
              </p>
              <Link 
                to="/about"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
              >
                Learn More About Me
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY4MjM4NzIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Developer workspace"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl mb-8 opacity-90">
              Have a project in mind? I'd love to hear about it and discuss how we
              can bring your ideas to life.
            </p>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              Start a Conversation
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
