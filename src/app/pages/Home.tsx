import { Link } from "react-router";
import { motion } from "motion/react";
import { Sparkles, Clock, Trophy, ArrowRight, Star, Zap, Shield, Scissors } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Scissors,
      title: "Salon Expertise",
      description: "Hair, color, and beauty services shaped around your style goals",
    },
    {
      icon: Zap,
      title: "Express Booking",
      description: "Fast and easy online scheduling with instant confirmation",
    },
    {
      icon: Trophy,
      title: "Trusted Team",
      description: "A salon clients return to for consistent results and personal care",
    },
    {
      icon: Shield,
      title: "All-in-One Visit",
      description: "Cut, color, styling, and beauty treatments in one place",
    },
  ];

  const services = [
    { name: "Women's Haircut", price: "35 KM", duration: "45 min", popular: true },
    { name: "Men's Haircut", price: "25 KM", duration: "30 min", popular: true },
    { name: "Hair Coloring", price: "60 KM", duration: "120 min", popular: false },
    { name: "Beauty Package", price: "75 KM", duration: "100 min", popular: true },
  ];

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section - Completely New Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-background to-blue-900 opacity-70" />
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "linear-gradient(45deg, #fbbf24 0%, transparent 50%, #3b82f6 100%)",
              backgroundSize: "200% 200%",
            }}
          />
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fbbf24" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* VIP Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <Badge className="bg-primary text-primary-foreground border-0 px-6 py-2 text-sm">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  Image Salon Sarajevo
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                  <span className="block text-foreground">Hair, Beauty</span>
                  <span className="block bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
                    And Care
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
              >
                Welcome to Image, a Sarajevo salon for haircuts, color, styling, and beauty appointments in the city center.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                >
                  <Link to="/booking">
                    Book Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 flex gap-8"
              >
                <div>
                  <div className="text-3xl text-primary mb-1">87+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="border-l border-border pl-8">
                  <div className="text-3xl text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years of Loyalty</div>
                </div>
                <div className="border-l border-border pl-8">
                  <div className="text-3xl text-primary mb-1">5.0</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    Rating
                    <Star className="w-4 h-4 fill-primary text-primary" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary opacity-50" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-secondary opacity-50" />
                
                <div className="relative overflow-hidden border-2 border-primary/20 shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXJiZXIlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNjI1NDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Image salon interior"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-8 right-8 bg-card/90 backdrop-blur-sm border border-primary/30 p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">Next Available</span>
                  </div>
                  <div className="text-lg text-primary">Today 2:30 PM</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Grid Layout */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Why Choose Image</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Modern Salon Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional services for everyday maintenance, transformations, and event-ready styling
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-8 h-full bg-card border-border hover:border-primary/50 transition-all group relative overflow-hidden">
                    {/* Background Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl mb-3">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Horizontal Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl mb-3">Popular Services</h2>
              <p className="text-muted-foreground text-lg">Core appointments clients book most often at Image</p>
            </div>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary"
            >
              <Link to="/services">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all group cursor-pointer relative overflow-hidden">
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl text-primary">{service.price}</div>
                    </div>
                  </div>

                  <Button 
                    asChild 
                    className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20"
                  >
                    <Link to="/booking">Book This Service</Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold Design */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-400 to-primary opacity-10" />
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Ready for Your Next Appointment?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Book your visit at Image and let the team shape the right cut, color, or finishing service for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 text-lg px-8"
              >
                <Link to="/booking">
                  Book With Image
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary text-lg px-8"
              >
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
