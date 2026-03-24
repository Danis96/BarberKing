import { Link } from "react-router";
import { Sparkles, MapPin, Phone, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="display-font text-2xl leading-none text-foreground">The Men's Room</div>
                <div className="text-xs text-primary -mt-1 tracking-[0.28em] uppercase">Barbershop</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A Sarajevo barbershop focused on precise cuts, beard grooming, and a warm, club-like atmosphere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/barbers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Book a Chair
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Hamdije Čemerlića 5 / Fojnička 1, Sarajevo</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+387 62 253 084</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-foreground mb-4">Working Hours</h4>
            <div className="text-sm text-muted-foreground mb-4 space-y-1">
              <p>Mon - Sat: 09:00 - 20:00</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=100066733181291"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-muted hover:bg-gradient-to-br hover:from-primary hover:to-yellow-500 transition-all flex items-center justify-center group"
              >
                <Instagram className="w-5 h-5 group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100066733181291"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-muted hover:bg-gradient-to-br hover:from-primary hover:to-yellow-500 transition-all flex items-center justify-center group"
              >
                <Facebook className="w-5 h-5 group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Barbershop The Men's Room. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
