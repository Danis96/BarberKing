import { Link } from "react-router";
import { motion } from "motion/react";
import { Star, Sparkles, Award, Calendar, Medal, Trophy } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Barbers() {
  const barbers = [
    {
      name: "Aldijana",
      role: "Color Specialist",
      experience: "10+ years",
      specialty: "Blonde work, color refresh, and shine-focused results",
      rating: 5.0,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      featured: true,
      award: "Client Favorite",
    },
    {
      name: "Azem",
      role: "Men's Hair Specialist",
      experience: "15+ years",
      specialty: "Classic men's cuts, detail work, and consistent finishes",
      rating: 4.9,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      featured: true,
      award: "Long-Time Client Favorite",
    },
    {
      name: "Sarah",
      role: "Nails & Beauty Specialist",
      experience: "7+ years",
      specialty: "Clean beauty finishing and appointment add-ons",
      rating: 4.9,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Berina",
      role: "Hair & Lash Artist",
      experience: "6+ years",
      specialty: "Soft styling, lashes, and polished finishing details",
      rating: 4.8,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ];

  return (
    <div className="pt-20 pb-20 md:pb-0">
      {/* Header with Geometric Design */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, #fbbf24 0px, #fbbf24 1px, transparent 1px, transparent 40px),
                              repeating-linear-gradient(90deg, #fbbf24 0px, #fbbf24 1px, transparent 1px, transparent 40px)`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2 mb-6">
              <Medal className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary">Image Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              Meet the
              <span className="block bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
                Specialists
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A multi-service salon team trusted for haircuts, color, styling, and beauty care in central Sarajevo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Barbers Grid with Modern Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {barbers.map((barber, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all group relative">
                  {/* Decorative Corner */}
                  {barber.featured && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary to-yellow-500 -mr-12 -mt-12 rotate-45 z-10" />
                  )}
                  
                  <div className="relative h-96 overflow-hidden">
                    <ImageWithFallback
                      src={barber.image}
                      alt={barber.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    
                    {barber.featured && barber.award && (
                      <div className="absolute top-6 left-6 z-20">
                        <Badge className="bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground border-0 px-4 py-2">
                          <Trophy className="w-4 h-4 mr-2" />
                          {barber.award}
                        </Badge>
                      </div>
                    )}

                    {/* Rating Badge */}
                    <div className="absolute top-6 right-6 bg-card/95 backdrop-blur-md px-4 py-2 flex items-center gap-2 border border-primary/20">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                      <div>
                        <div className="text-sm">{barber.rating}</div>
                        <div className="text-xs text-muted-foreground">{barber.reviews} reviews</div>
                      </div>
                    </div>

                    {/* Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-2xl">{barber.name}</h3>
                          <p className="text-primary">{barber.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-muted/80 backdrop-blur-sm border border-primary/20">
                          {barber.experience}
                        </Badge>
                        <Badge variant="secondary" className="bg-muted/80 backdrop-blur-sm border border-primary/20">
                          {barber.specialty}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-card border-t border-border">
                    <Button
                      asChild
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      size="lg"
                    >
                      <Link to="/booking">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book with {barber.name.split(" ")[0]}
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Bold Design */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-card via-primary/5 to-card" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-3">Why Clients Return</h2>
            <p className="text-muted-foreground text-lg">Experience, loyalty, and trusted service</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Specialists", value: "4", icon: Sparkles },
              { label: "Years Combined", value: "35+", icon: Medal },
              { label: "Reviews", value: "87", icon: Star },
              { label: "Average Rating", value: "5.0", icon: Award },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-4xl md:text-5xl text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Ready to Book at Image?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose your preferred specialist or take the next available appointment.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30">
              <Link to="/booking">
                <Sparkles className="w-5 h-5 mr-2" />
                Book Your Appointment
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
