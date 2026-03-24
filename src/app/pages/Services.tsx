import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Package, Scissors, Shield, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const serviceCategories = [
    {
      icon: Scissors,
      category: "Cuts",
      image: "https://images.unsplash.com/photo-1654097801176-cb1795fd0c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      services: [
        { name: "Signature Haircut", price: "25 KM", duration: "35 min", description: "Clean tailored cut with consultation and finish", popular: true },
        { name: "Skin Fade", price: "30 KM", duration: "40 min", description: "Low, mid, or high fade with sharp graduation" },
        { name: "Buzz Cut", price: "18 KM", duration: "20 min", description: "Uniform clipper cut with edge cleanup" },
      ],
    },
    {
      icon: Shield,
      category: "Beard & Shave",
      image: "https://images.unsplash.com/photo-1603899968034-1a56ca48d172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      services: [
        { name: "Beard Trim & Lineup", price: "15 KM", duration: "20 min", description: "Trim, contour, and define for a clean beard profile", popular: true },
        { name: "Hot Towel Shave", price: "22 KM", duration: "30 min", description: "Classic razor shave with hot towel preparation" },
        { name: "Head Shave", price: "20 KM", duration: "25 min", description: "Smooth head shave with close-finish detailing" },
      ],
    },
    {
      icon: Sparkles,
      category: "Finishing",
      image: "https://images.unsplash.com/photo-1759675905700-a1b5efedc05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      services: [
        { name: "Wash & Style", price: "12 KM", duration: "15 min", description: "Quick refresh before a meeting, event, or night out" },
        { name: "Texture Restyle", price: "18 KM", duration: "20 min", description: "Product-led styling with shape correction" },
        { name: "Grey Blend", price: "20 KM", duration: "25 min", description: "Subtle tone balancing for a fresher appearance" },
      ],
    },
    {
      icon: Package,
      category: "Packages",
      image: "https://images.unsplash.com/photo-1737061467396-39aac10feb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      services: [
        { name: "Haircut + Beard Combo", price: "35 KM", duration: "50 min", description: "The standard full grooming appointment", popular: true },
        { name: "Men's Room Refresh", price: "45 KM", duration: "60 min", description: "Haircut, beard work, hot towel ritual, and style" },
        { name: "Father & Son", price: "40 KM", duration: "55 min", description: "Two-chair booking for a shared visit" },
      ],
    },
  ];

  return (
    <div className="pb-20 pt-20 md:pb-0">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,154,88,0.16),transparent_24%),linear-gradient(180deg,#181411_0%,#2b211b_100%)]" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge className="border-0 bg-primary px-5 py-2 text-primary-foreground">Service Menu</Badge>
            <h1 className="display-font mt-6 text-6xl text-white md:text-7xl">Cuts, Beards, and Rituals</h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-white/70">
              The menu is now built around men's grooming: direct pricing, disciplined categories, and no salon filler.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {serviceCategories.map((category, catIndex) => {
              const Icon = category.icon;
              const isEven = catIndex % 2 === 0;

              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55 }}
                  viewport={{ once: true }}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${!isEven ? "lg:grid-flow-dense" : ""}`}
                >
                  <div className={!isEven ? "lg:col-start-2" : ""}>
                    <div className="overflow-hidden rounded-[2rem] border border-primary/20">
                      <ImageWithFallback
                        src={category.image}
                        alt={category.category}
                        className="h-[420px] w-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="display-font text-5xl">{category.category}</h2>
                    </div>

                    <div className="mt-8 space-y-4">
                      {category.services.map((service) => (
                        <Card key={service.name} className="rounded-[1.75rem] border-border/80 p-6">
                          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                            <div>
                              <div className="flex items-center gap-3">
                                <h3 className="text-2xl">{service.name}</h3>
                                {service.popular && (
                                  <Badge className="border-0 bg-primary text-primary-foreground">Popular</Badge>
                                )}
                              </div>
                              <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                              <div className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">{service.duration}</div>
                            </div>
                            <div className="md:text-right">
                              <div className="display-font text-4xl text-primary">{service.price}</div>
                              <Button asChild size="sm" className="mt-4 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                                <Link to="/booking">Select</Link>
                              </Button>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="rounded-[2rem] border-primary/20 bg-[linear-gradient(135deg,rgba(200,154,88,0.12),rgba(109,76,65,0.08))] p-10 text-center">
            <h2 className="display-font text-5xl">Not Sure What Fits You?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Start with the haircut and beard combo if you want the most complete first visit.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/booking">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
