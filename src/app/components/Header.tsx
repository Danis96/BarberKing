import { Link, useLocation } from "react-router";
import { ArrowUpRight, Menu, Scissors, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

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
    { to: "/barbers", label: "Team" },
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
              ? "border-black/6 bg-card/88 shadow-[0_18px_40px_rgba(78,62,44,0.12)] backdrop-blur-xl dark:border-primary/15 dark:bg-background/86 dark:shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
              : "border-black/5 bg-card/72 shadow-[0_8px_24px_rgba(78,62,44,0.08)] backdrop-blur-lg dark:border-white/8 dark:bg-background/58 dark:shadow-none"
          }`}
        >
          <div className="flex min-h-22 items-center justify-between gap-4 px-4 py-3 lg:px-6">
            <div className="flex items-center gap-3">
              <Link to="/" className="group flex items-center gap-3">
                <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-primary/25 bg-[linear-gradient(135deg,rgba(229,185,140,0.34),rgba(217,230,223,0.78))] dark:bg-[linear-gradient(135deg,rgba(239,199,159,0.22),rgba(145,170,160,0.18))]">
                  <div className="absolute inset-1 rounded-[14px] border border-black/5 dark:border-white/8" />
                  <Scissors className="h-6 w-6 -rotate-12 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="display-font text-2xl leading-none text-foreground">The Men's Room</span>
                  </div>
                  <div className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
                    Barbershop Sarajevo
                  </div>
                </div>
              </Link>

              <div className="hidden xl:flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-3 py-2 text-xs uppercase tracking-[0.24em] text-muted-foreground shadow-[0_4px_14px_rgba(78,62,44,0.06)] dark:bg-background/45 dark:shadow-none">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Sarajevo
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />

              <nav className="flex items-center gap-2 rounded-full border border-border/70 bg-card/82 p-1.5 shadow-[0_4px_14px_rgba(78,62,44,0.06)] dark:bg-background/45 dark:shadow-none">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.to;

                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`relative rounded-full px-4 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "text-primary-foreground"
                          : "text-foreground hover:bg-accent/90 hover:text-accent-foreground dark:hover:bg-accent/70"
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
                className="h-12 rounded-full border border-[#d8ac7f] bg-[#e5b98c] px-5 text-[#3f3127] shadow-[0_8px_20px_rgba(229,185,140,0.28)] hover:bg-[#ddb082] hover:text-[#35291f] hover:shadow-[0_10px_26px_rgba(229,185,140,0.34)] dark:border-primary/10 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 dark:hover:text-primary-foreground dark:shadow-none"
              >
                <Link to="/booking">
                  Book now
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-card/80 text-foreground shadow-[0_4px_14px_rgba(78,62,44,0.06)] dark:bg-background/50 dark:shadow-none"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
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
              <div className="mt-3 overflow-hidden rounded-[28px] border border-black/6 bg-card/96 p-4 shadow-[0_18px_44px_rgba(78,62,44,0.14)] backdrop-blur-xl dark:border-primary/15 dark:bg-background/94 dark:shadow-[0_22px_70px_rgba(0,0,0,0.32)]">
                <div className="mb-4 rounded-2xl border border-border/70 bg-background/65 p-4 dark:bg-card/70">
                  <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    Barbershop The Men's Room
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Sharp cuts, beard care, and a proper men's grooming room.
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
                              : "border-border/70 bg-background/70 text-foreground hover:bg-accent/70 hover:text-accent-foreground dark:bg-card/60"
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
                  <Link to="/booking">Book a Chair</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
