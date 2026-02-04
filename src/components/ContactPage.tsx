import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, } from "lucide-react";
import { useState } from "react";
//using emailjs to send emails
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('public key', PUBLIC_KEY);
    const promisse = emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }, {
      publicKey: PUBLIC_KEY,
    })
    toast.promise(promisse, {
      pending: 'Sending message...',
      success: 'Message sent successfully',
      error: 'Failed to send message',
    })
    await promisse;
    console.log('message sent');
   
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "virtualblakewillis@gmail.com",
      href: "mailto:virtualblakewillis@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (469) 648-8812",
      href: "tel:+14696488866",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tulsa, OK",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/VirtualBlakeWillis", label: "GitHub", color: "hover:text-purple-600" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/virtual-blake-willis/", label: "LinkedIn", color: "hover:text-blue-600" },
    // { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-600" },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-cyan-600/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's create something amazing together.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-card rounded-2xl p-8 shadow-lg overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <motion.div
                  className={`inline-flex p-4 bg-gradient-to-br ${info.color} rounded-xl mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon size={32} className="text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-2">{info.label}</h3>
                <p className="text-muted-foreground">{info.value}</p>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-2xl"
                  whileHover={{
                    borderColor: [
                      "rgba(147, 51, 234, 0)",
                      "rgba(147, 51, 234, 1)",
                      "rgba(37, 99, 235, 1)",
                      "rgba(147, 51, 234, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">Send Me a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <motion.div
                    animate={{
                      scale: focusedField === "name" ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-input-background border-2 border-transparent focus:border-purple-600 rounded-lg outline-none transition-all"
                      placeholder="Your name"
                      required
                    />
                  </motion.div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <motion.div
                    animate={{
                      scale: focusedField === "email" ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-input-background border-2 border-transparent focus:border-blue-600 rounded-lg outline-none transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </motion.div>
                </motion.div>

                {/* Subject Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label htmlFor="subject" className="block mb-2">
                    Subject
                  </label>
                  <motion.div
                    animate={{
                      scale: focusedField === "subject" ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-input-background border-2 border-transparent focus:border-cyan-600 rounded-lg outline-none transition-all"
                      placeholder="How can I help you?"
                      required
                    />
                  </motion.div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <motion.div
                    animate={{
                      scale: focusedField === "message" ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-input-background border-2 border-transparent focus:border-purple-600 rounded-lg outline-none transition-all resize-none"
                      rows={6}
                      placeholder="Tell me about your project..."
                      required
                    />
                  </motion.div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Send Message
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send size={20} />
                  </motion.span>
                </motion.button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:pl-8"
            >
              <div className="sticky top-32">
                <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, I'll try my best to get back to you!
                </p>

                {/* Availability Status */}
                <motion.div
                  className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20 rounded-2xl p-6 mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      className="w-3 h-3 bg-green-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="font-bold text-green-600">
                      Available for Work
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    Currently accepting new projects and collaborations
                  </p>
                </motion.div>

                {/* Social Links */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        className={`p-4 bg-accent rounded-xl transition-colors ${social.color}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={social.label}
                      >
                        <social.icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-xl font-bold mb-4">Response Time</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Email</span>
                      <span className="font-bold">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Phone</span>
                      <span className="font-bold">Same day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Social Media</span>
                      <span className="font-bold">1-2 days</span>
                    </div>
                  </div>
                </motion.div>

                {/* Animated decoration */}
                <motion.div
                  className="mt-8 relative h-64 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600"
                    animate={{
                      background: [
                        "linear-gradient(135deg, #9333ea 0%, #2563eb 100%)",
                        "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
                        "linear-gradient(135deg, #06b6d4 0%, #9333ea 100%)",
                        "linear-gradient(135deg, #9333ea 0%, #2563eb 100%)",
                      ],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-white text-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Mail size={64} className="mx-auto mb-4" />
                      <p className="text-2xl font-bold">Let's Talk!</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-20 px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-96 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 flex items-center justify-center">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <MapPin size={64} className="mx-auto mb-4 text-purple-600" />
                <h3 className="text-3xl font-bold mb-2">Based in Tulsa, OK</h3>
                <p className="text-xl text-muted-foreground">
                  Open to remote work and collaborations worldwide
                </p>
              </motion.div>

              {/* Animated Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-purple-600/30 rounded-full"
                  initial={{ width: 0, height: 0 }}
                  animate={{
                    width: [0, 400],
                    height: [0, 400],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
