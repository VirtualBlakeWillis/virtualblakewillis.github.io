import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import menuSvg from "../assets/menu.svg";

const NAV_ITEMS = [
  { name: "Home",    path: "/" },
  { name: "Work",    path: "/portfolio" },
  { name: "About",   path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/*
       * ── Desktop / Tablet: always-open centered pill ──
       * `top` is set via inline style (not Tailwind) so it is guaranteed to
       * apply and the pill always has a visible gap from the viewport top edge.
       */}
      <div
        className="hidden md:flex fixed left-0 right-0 z-50 justify-center pointer-events-none"
        style={{ top: "1.25rem" }}
      >
        <motion.nav
          aria-label="Primary navigation"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0,   opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "14px",
            boxShadow:
              "0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(0,0,0,0.08)",
            whiteSpace: "nowrap",
          }}
        >
          {/* Name / home link */}
          <Link
            to="/"
            style={{
              padding: "12px 20px",
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#030213",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              flexShrink: 0,
            }}
          >
            Blake Willis
          </Link>

          {/* Divider */}
          <div
            style={{
              width: "1px",
              alignSelf: "stretch",
              margin: "8px 0",
              backgroundColor: "rgba(0,0,0,0.10)",
              flexShrink: 0,
            }}
          />

          {/* Nav links — always visible on md+ */}
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "12px 16px",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#030213" : "#717182",
                  textDecoration: "none",
                  flexShrink: 0,
                  transition: "color 0.18s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLAnchorElement).style.color = "#030213";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLAnchorElement).style.color = "#717182";
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </motion.nav>
      </div>

      {/* ── Mobile: top bar ── */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          padding: "14px 20px",
          backgroundColor: "rgba(255,255,255,0.94)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "15px",
            fontWeight: 600,
            color: "#030213",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Blake Willis
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#030213",
            padding: "4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {mobileOpen ? (
            <X size={22} strokeWidth={2} />
          ) : (
            <img src={menuSvg} alt="" width={20} height={20} />
          )}
        </button>
      </div>

      {/* ── Mobile: dropdown drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{    opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
            style={{
              position: "fixed",
              top: "64px",
              left: "12px",
              right: "12px",
              zIndex: 49,
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              boxShadow:
                "0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.07)",
              overflow: "hidden",
            }}
          >
            {NAV_ITEMS.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "14px 20px",
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "14px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#030213" : "#717182",
                    textDecoration: "none",
                    borderBottom:
                      i < NAV_ITEMS.length - 1
                        ? "1px solid rgba(0,0,0,0.06)"
                        : "none",
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
