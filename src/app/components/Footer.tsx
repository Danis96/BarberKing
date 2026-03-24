import { Link } from "react-router";
import { Sparkles, MapPin, Phone, Mail, Facebook, MessageCircle } from "lucide-react";
import { shopInfo } from "../data/shop-info";

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
                <div className="display-font text-2xl leading-none text-foreground">{shopInfo.name}</div>
                <div className="text-xs text-primary -mt-1 tracking-[0.28em] uppercase">Barbershop</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {shopInfo.tagline}
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
                <a
                  href={shopInfo.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {shopInfo.addressLine1}, {shopInfo.city}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`tel:${shopInfo.phone}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {shopInfo.phone}
                </a>
              </li>
              {shopInfo.email && (
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href={`mailto:${shopInfo.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {shopInfo.email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-foreground mb-4">Working Hours</h4>
            <div className="text-sm text-muted-foreground mb-4 space-y-1">
              <p>{shopInfo.hours.weekdays}</p>
              {shopInfo.hours.saturday && <p>{shopInfo.hours.saturday}</p>}
              {shopInfo.hours.sunday && <p>{shopInfo.hours.sunday}</p>}
            </div>
            {(shopInfo.facebookUrl || shopInfo.messengerUrl) && (
              <div className="flex gap-3 mt-4">
                {shopInfo.facebookUrl && (
                  <a
                    href={shopInfo.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-muted hover:bg-gradient-to-br hover:from-primary hover:to-yellow-500 transition-all flex items-center justify-center group"
                  >
                    <Facebook className="w-5 h-5 group-hover:text-primary-foreground" />
                  </a>
                )}
                {shopInfo.messengerUrl && (
                  <a
                    href={shopInfo.messengerUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-muted hover:bg-gradient-to-br hover:from-primary hover:to-yellow-500 transition-all flex items-center justify-center group"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:text-primary-foreground" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 {shopInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
