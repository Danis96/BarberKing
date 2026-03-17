import { Link, useLocation } from "react-router";
import { ArrowUpRight, Crown, Menu, Scissors, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/barbers", label: "Barbers" },
    { to: "/gallery", label: "Gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`rounded-[28px] border transition-all duration-300 ${
            isScrolled
              ? "border-primary/15 bg-background/86 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              : "border-white/8 bg-background/58 backdrop-blur-lg"
          }`}
        >
          <div className="flex min-h-22 items-center justify-between gap-4 px-4 py-3 lg:px-6">
            <div className="flex items-center gap-3">
              <Link to="/" className="group flex items-center gap-3">
                <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-primary/25 bg-[linear-gradient(135deg,rgba(251,191,36,0.22),rgba(59,130,246,0.18))]">
                  <div className="absolute inset-1 rounded-[14px] border border-white/8" />
                  <Scissors className="h-6 w-6 -rotate-12 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg tracking-[0.08em] text-foreground">King Barber</span>
                    <Crown className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
                    Lounge Sarajevo
                  </div>
                </div>
              </Link>

              <div className="hidden xl:flex items-center gap-2 rounded-full border border-border/70 bg-background/45 px-3 py-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Open daily
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <nav className="flex items-center gap-2 rounded-full border border-border/70 bg-background/45 p-1.5">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.to;

                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`relative rounded-full px-4 py-2.5 text-sm transition-colors ${
                        isActive ? "text-primary-foreground" : "text-foreground hover:text-primary"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeDesktopPill"
                          className="absolute inset-0 rounded-full bg-primary"
                          transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <Button
                asChild
                className="h-12 rounded-full border border-primary/10 bg-primary px-5 text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/booking">
                  Book now
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-background/50 text-foreground lg:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="lg:hidden"
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mt-3 overflow-hidden rounded-[28px] border border-primary/15 bg-background/94 p-4 shadow-[0_22px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl">
                <div className="mb-4 rounded-2xl border border-border/70 bg-card/70 p-4">
                  <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    King Barber Lounge
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Premium appointments, sharp cuts, and a booking-first experience.
                  </p>
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.to;

                    return (
                      <motion.div
                        key={link.to}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 }}
                      >
                        <Link
                          to={link.to}
                          className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-base transition-colors ${
                            isActive
                              ? "border-primary/25 bg-primary/12 text-primary"
                              : "border-border/70 bg-card/60 text-foreground"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <Button
                  asChild
                  className="mt-4 h-12 w-full rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link to="/booking">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
