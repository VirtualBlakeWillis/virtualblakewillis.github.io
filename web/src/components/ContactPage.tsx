import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
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
    const promise = emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      { publicKey: PUBLIC_KEY }
    );
    toast.promise(promise, {
      pending: "Sending message...",
      success: "Message sent successfully",
      error: "Failed to send message",
    });
    await promise;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "virtualblakewillis@gmail.com",
      href: "mailto:virtualblakewillis@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (469) 648-8812",
      href: "tel:+14696488812",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tulsa, OK",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/VirtualBlakeWillis",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/virtual-blake-willis/",
      label: "LinkedIn",
    },
  ];

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    padding: "12px 16px",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "0.9rem",
    color: "#0a0a0a",
    backgroundColor: "#fafafa",
    border: `1px solid ${focusedField === field ? "#111111" : "#e5e5e5"}`,
    borderRadius: "10px",
    outline: "none",
    transition: "border-color 0.18s ease",
    boxSizing: "border-box" as const,
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontWeight: 600,
    color: "#555555",
    marginBottom: "8px",
  };

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Open Sans', sans-serif", backgroundColor: "#fafafa" }}
    >
      {/* ── Intro Section ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "#fafafa" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#aaaaaa",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </p>
            <h1
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "clamp(3rem, 5vw, 5.25rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#0a0a0a",
                marginBottom: "1.5rem",
              }}
            >
              Get In{" "}
              <span style={{ fontFamily: "'Bungee', cursive", fontWeight: 400 }}>
                Touch.
              </span>
            </h1>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "#555555",
                maxWidth: "32rem",
              }}
            >
              Have a project in mind or just want to chat? I'd love to hear from
              you. Let's create something great together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section className="pb-0 pt-0 px-6" style={{ backgroundColor: "#f7f7f7", paddingTop: "0" }}>
        <div className="max-w-7xl mx-auto" style={{ paddingTop: "3rem" }}>
          <div className="grid md:grid-cols-3 gap-6" style={{ marginBottom: "3rem" }}>
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  border: "1px solid #ebebeb",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)",
                  padding: "1.25rem 1.5rem",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "10px",
                    color: "#555555",
                    flexShrink: 0,
                  }}
                >
                  <info.icon size={20} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      color: "#aaaaaa",
                      marginBottom: "2px",
                    }}
                  >
                    {info.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#0a0a0a",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Right Panel ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* ── Contact Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  border: "1px solid #ebebeb",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)",
                  padding: "2rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#aaaaaa",
                    marginBottom: "0.75rem",
                  }}
                >
                  Send a message
                </p>
                <h2
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    marginBottom: "2rem",
                  }}
                >
                  Let's{" "}
                  <span style={{ fontFamily: "'Bungee', cursive", fontWeight: 400 }}>
                    talk.
                  </span>
                </h2>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {/* Name */}
                  <div>
                    <label htmlFor="name" style={labelStyle}>Name</label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle("name")}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle("email")}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" style={labelStyle}>Subject</label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle("subject")}
                      placeholder="How can I help you?"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" style={labelStyle}>Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      style={{ ...inputStyle("message"), resize: "none" }}
                      rows={6}
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ backgroundColor: "#333333" }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      padding: "14px 28px",
                      backgroundColor: "#111111",
                      color: "#ffffff",
                      borderRadius: "9999px",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 0.2s",
                      width: "100%",
                    }}
                  >
                    Send Message
                    <Send size={14} />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* ── Right Panel ── */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-32" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

                {/* Intro text */}
                <div>
                  <h2
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                      fontWeight: 700,
                      color: "#0a0a0a",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                      marginBottom: "1rem",
                    }}
                  >
                    Let's{" "}
                    <span style={{ fontFamily: "'Bungee', cursive", fontWeight: 400 }}>
                      connect.
                    </span>
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      color: "#555555",
                    }}
                  >
                    I'm always interested in hearing about new projects and
                    opportunities. Whether you have a question or just want to
                    say hi, I'll try my best to get back to you!
                  </p>
                </div>

                {/* Availability status */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "14px",
                    border: "1px solid #ebebeb",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div style={{ paddingTop: "3px" }}>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "#22c55e",
                        borderRadius: "9999px",
                        flexShrink: 0,
                      }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: "#0a0a0a",
                        marginBottom: "2px",
                      }}
                    >
                      Available for Work
                    </p>
                    <p
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "0.875rem",
                        color: "#666666",
                        lineHeight: 1.65,
                      }}
                    >
                      Currently accepting new projects and collaborations
                    </p>
                  </div>
                </div>

                {/* Social links */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "14px",
                    border: "1px solid #ebebeb",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      color: "#aaaaaa",
                      marginBottom: "1rem",
                    }}
                  >
                    Find me on
                  </p>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "44px",
                          height: "44px",
                          backgroundColor: "#f0f0f0",
                          borderRadius: "10px",
                          color: "#555555",
                          textDecoration: "none",
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#e5e5e5";
                          (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f0f0f0";
                          (e.currentTarget as HTMLAnchorElement).style.color = "#555555";
                        }}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Response times */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "14px",
                    border: "1px solid #ebebeb",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      color: "#aaaaaa",
                      marginBottom: "1rem",
                    }}
                  >
                    Response Time
                  </p>
                  {[
                    { channel: "Email", time: "Within 24 hours" },
                    { channel: "Phone", time: "Same day" },
                    { channel: "Social Media", time: "1–2 days" },
                  ].map((row, i, arr) => (
                    <div
                      key={row.channel}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: "0.6rem",
                        paddingBottom: "0.6rem",
                        borderBottom: i < arr.length - 1 ? "1px solid #f0f0f0" : "none",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "0.875rem",
                          color: "#666666",
                        }}
                      >
                        {row.channel}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: "#0a0a0a",
                        }}
                      >
                        {row.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Location Section ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            style={{ borderBottom: "1px solid #e5e5e5", paddingBottom: "2rem" }}
          >
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#aaaaaa",
                marginBottom: "1rem",
              }}
            >
              Location
            </p>
            <h2
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                color: "#0a0a0a",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Based in{" "}
              <span style={{ fontFamily: "'Bungee', cursive", fontWeight: 400 }}>
                Tulsa, OK.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                backgroundColor: "#f0f0f0",
                borderRadius: "10px",
                color: "#555555",
                flexShrink: 0,
              }}
            >
              <MapPin size={22} />
            </div>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "#555555",
              }}
            >
              Open to remote work and collaborations worldwide.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
