import { Link } from "react-router";
import { motion } from "motion/react";
import { Scissors, Sparkles, Gem, Package, ArrowRight, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const serviceCategories = [
    {
      icon: Scissors,
      category: "Haircuts & Styling",
      image: "https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBoYWlyY3V0JTIwc2VydmljZXxlbnwxfHx8fDE3NzM3Mzc4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        { name: "Women's Haircut", price: "35 KM", duration: "45 min", description: "Personalized cut and finish for your hair texture and style" },
        { name: "Men's Haircut", price: "25 KM", duration: "30 min", description: "Clean, precise haircut with styling", popular: true },
        { name: "Wash & Blow Dry", price: "20 KM", duration: "30 min", description: "Fresh wash and smooth salon finish" },
        { name: "Event Styling", price: "45 KM", duration: "60 min", description: "Soft waves, polished volume, or occasion styling" },
      ],
    },
    {
      icon: Sparkles,
      category: "Color Services",
      image: "https://images.unsplash.com/photo-1603899968034-1a56ca48d172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMHRyaW0lMjBncm9vbWluZ3xlbnwxfHx8fDE3NzM3MDY5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        { name: "Root Touch-Up", price: "45 KM", duration: "90 min", description: "Color refresh for a clean, even result" },
        { name: "Hair Coloring", price: "60 KM", duration: "120 min", description: "Full color service with consultation", popular: true },
        { name: "Balayage & Highlights", price: "90 KM", duration: "150 min", description: "Dimension, brightness, and custom placement" },
      ],
    },
    {
      icon: Gem,
      category: "Care & Treatments",
      image: "https://images.unsplash.com/photo-1590540179446-a27de47f393e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwaGFpciUyMHN0eWxpbmd8ZW58MXx8fHwxNzczNzM3ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        { name: "Hair Treatment", price: "25 KM", duration: "25 min", description: "Revitalizing care for shine and softness" },
        { name: "Scalp Care", price: "30 KM", duration: "30 min", description: "Deep cleansing and balance for scalp health" },
        { name: "Relax Massage", price: "20 KM", duration: "20 min", description: "Short unwind session during your appointment" },
      ],
    },
    {
      icon: Package,
      category: "Salon Packages",
      image: "https://images.unsplash.com/photo-1737061467396-39aac10feb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjB0b3dlbCUyMHNoYXZlJTIwbHV4dXJ5fGVufDF8fHx8MTc3MzczNzg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        { name: "Beauty Package", price: "75 KM", duration: "100 min", description: "Cut, treatment, and styling combined", popular: true },
        { name: "Color & Finish", price: "110 KM", duration: "160 min", description: "Color service plus final styling" },
        { name: "Quick Refresh", price: "42 KM", duration: "50 min", description: "Wash, trim, and polished finish" },
      ],
    },
  ];

  return (
    <div className="pt-20 pb-20 md:pb-0">
      {/* Header with Split Design */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2 mb-6">
              <Scissors className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary">Image Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              Hair & Beauty
              <span className="block bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the core Image salon menu, from cuts and color to treatments and beauty-focused finishing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services with Alternating Layout */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {serviceCategories.map((category, catIndex) => {
              const Icon = category.icon;
              const isEven = catIndex % 2 === 0;
              
              return (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Category Image */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className={`${!isEven ? 'lg:col-start-2' : ''}`}
                    >
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                        <div className="relative overflow-hidden border-2 border-primary/30">
                          <ImageWithFallback
                            src={category.image}
                            alt={category.category}
                            className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center gap-3">
                              <div className="w-14 h-14 bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center">
                                <Icon className="w-7 h-7 text-primary-foreground" />
                              </div>
                              <h2 className="text-3xl">{category.category}</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Services List */}
                    <div className="space-y-4">
                      {category.services.map((service, serviceIndex) => (
                        <motion.div
                          key={serviceIndex}
                          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all group relative overflow-hidden">
                            {service.popular && (
                              <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground px-4 py-1 text-xs">
                                MOST POPULAR
                              </div>
                            )}
                            
                            <div className="flex justify-between items-start gap-4">
                              <div className="flex-1">
                                <h3 className="text-xl mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                  <Check className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                  {service.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span>⏱️ {service.duration}</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-3xl text-primary mb-2">{service.price}</div>
                                <Button
                                  asChild
                                  size="sm"
                                  className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20"
                                >
                                  <Link to="/booking">Select</Link>
                                </Button>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA with Bold Design */}
      <section className="py-20 bg-gradient-to-r from-card via-background to-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-4 border-primary rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-primary rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl mb-4">Unsure What to Choose?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The Image team can guide you toward the right service based on your hair goals, maintenance level, and timing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30">
                <Link to="/booking">
                  Book Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary">
                <Link to="/barbers">Meet Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
