import { motion, useMotionValue, animate } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { useMemo } from "react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = useMemo(() => [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },

    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    // { name: "Learncraft Spanish", path: "/learncraftspanish" },
  ], []);

  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const underlineX = useMotionValue(0);
  const underlineWidth = useMotionValue(0);
  const underlineY = useMotionValue(0);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.path === location.pathname);
    if (activeIndex !== -1 && itemRefs.current[activeIndex]) {
      const element = itemRefs.current[activeIndex];
      const parent = element?.parentElement;
      
      if (element && parent) {
        const parentRect = parent.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const x = elementRect.left - parentRect.left;
        const width = elementRect.width;
        const y = elementRect.bottom - parentRect.top;

        if (!hasInitialized) {
          // Set immediately on first render
          underlineX.set(x);
          underlineWidth.set(width);
          underlineY.set(y);
          setHasInitialized(true);
        } else {
          // Animate on subsequent changes
          animate(underlineX, x, { type: "spring", stiffness: 380, damping: 30 });
          animate(underlineWidth, width, { type: "spring", stiffness: 380, damping: 30 });
          animate(underlineY, y, { type: "spring", stiffness: 380, damping: 30 });
        }
      }
    }
  }, [location.pathname, navItems, hasInitialized, underlineX, underlineWidth, underlineY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/"
            className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Blake Willis
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                ref={(el: HTMLAnchorElement | null) => {
                  if (el) {
                    itemRefs.current[index] = el;
                  }
                }}
                to={item.path}
                className={`relative px-4 py-2 transition-colors inline-block ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Underline indicator */}
            <motion.div
              className="absolute top-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 pointer-events-none"
              style={{
                x: underlineX,
                y: underlineY,
                width: underlineWidth,
              }}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 transition-colors ${
                  location.pathname === item.path || (item.path === "/learncraftspanish" && location.pathname.startsWith("/learncraftspanish"))
                    ? "text-primary bg-accent/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
