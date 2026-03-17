import { Link } from "react-router";
import { motion } from "motion/react";
import { Star, Crown, Award, Calendar, Medal, Trophy } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Barbers() {
  const barbers = [
    {
      name: "Dejan Mirković",
      role: "Master Barber & Owner",
      experience: "15+ years",
      specialty: "Royal fades & precision cuts",
      rating: 5.0,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBwb3J0cmFpdCUyMG1hbGV8ZW58MXx8fHwxNzczNzM2MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true,
      award: "Best Barber 2025",
    },
    {
      name: "Stefan Janković",
      role: "Senior Stylist",
      experience: "10+ years",
      specialty: "Modern styling & beard artistry",
      rating: 4.9,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1659355751209-2e6c7c8091fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwaGFpcnN0eWxpc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczNzM3OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true,
      award: "Style Innovator",
    },
    {
      name: "Marko Kovačević",
      role: "Expert Barber",
      experience: "8+ years",
      specialty: "Classic cuts & hot shaves",
      rating: 4.9,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzdHlsaXN0JTIwd29ya2luZ3xlbnwxfHx8fDE3NzM3Mzc5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Nikola Petrović",
      role: "Style Specialist",
      experience: "7+ years",
      specialty: "Contemporary styles & coloring",
      rating: 4.8,
      reviews: 176,
      image: "https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwcHJvZmVzc2lvbmFsJTIwdGVhbXxlbnwxfHx8fDE3NzM3Mzc5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
              <span className="text-sm text-primary">Elite Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              Meet the
              <span className="block bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
                Masters
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our award-winning barbers are craftsmen dedicated to making you look and feel like royalty.
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
                          <Crown className="w-6 h-6 text-primary-foreground" />
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
            <h2 className="text-4xl md:text-5xl mb-3">Why Choose Our Team</h2>
            <p className="text-muted-foreground text-lg">Excellence backed by numbers</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Master Barbers", value: "4", icon: Crown },
              { label: "Years Combined", value: "40+", icon: Medal },
              { label: "Happy Clients", value: "8K+", icon: Star },
              { label: "Average Rating", value: "4.9", icon: Award },
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
            <h2 className="text-4xl md:text-5xl mb-4">Ready for Royal Treatment?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your appointment with one of our master barbers today.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30">
              <Link to="/booking">
                <Crown className="w-5 h-5 mr-2" />
                Book Your Appointment
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}