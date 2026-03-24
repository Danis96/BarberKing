import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Clock, MapPin, Phone, Scissors, Shield, Sparkles, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { shopInfo } from "../data/shop-info";

export function Home() {
  const features = [
    {
      icon: Scissors,
      title: "Precision Cuts",
      description: "Modern fades, classic cuts, and clean shaping with attention to detail.",
    },
    {
      icon: Shield,
      title: "Beard Discipline",
      description: "Defined lines, balanced proportions, and grooming that keeps its shape.",
    },
    {
      icon: Sparkles,
      title: "Room Ritual",
      description: "A relaxed neighborhood room that feels polished without turning formal.",
    },
    {
      icon: Star,
      title: "Consistent Results",
      description: "Built for regulars who want reliable cuts and a barber who remembers the details.",
    },
  ];

  const services = [
    { name: "Signature Haircut", price: "25 KM", duration: "35 min", popular: true },
    { name: "Skin Fade", price: "30 KM", duration: "40 min", popular: true },
    { name: "Haircut + Beard Combo", price: "35 KM", duration: "50 min", popular: true },
    { name: "Hot Towel Shave", price: "22 KM", duration: "30 min", popular: false },
  ];

  return (
    <div className="pb-20 md:pb-0">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,154,88,0.32),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(109,76,65,0.28),transparent_28%),linear-gradient(135deg,#181411_0%,#241c17_45%,#4d362a_100%)]" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0,transparent_49%,rgba(200,154,88,0.12)_50%,transparent_51%,transparent_100%),linear-gradient(0deg,transparent_0,transparent_49%,rgba(200,154,88,0.08)_50%,transparent_51%,transparent_100%)] bg-[length:120px_120px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 pb-18 pt-32 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <Badge className="border-0 bg-primary px-5 py-2 text-primary-foreground">
                  {shopInfo.city} Barbershop
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="display-font text-6xl leading-[0.92] text-white md:text-7xl lg:text-8xl"
              >
                Barbershop
                <span className="block text-primary">{shopInfo.name}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="mt-6 max-w-xl text-lg text-white/72 md:text-xl"
              >
                {shopInfo.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Button asChild size="lg" className="h-13 bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                  <Link to="/booking">
                    Book a Chair
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-13 border-white/20 bg-white/6 px-8 text-white hover:bg-white/12 hover:text-white"
                >
                  <Link to="/services">View the Menu</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="mt-10 grid gap-4 sm:grid-cols-3"
              >
                <div className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                  <Clock className="mb-3 h-5 w-5 text-primary" />
                  <div className="text-sm uppercase tracking-[0.2em] text-white/50">Hours</div>
                  <div className="mt-2 text-lg text-white">Check today's hours</div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                  <MapPin className="mb-3 h-5 w-5 text-primary" />
                  <div className="text-sm uppercase tracking-[0.2em] text-white/50">Location</div>
                  <div className="mt-2 text-lg text-white">{shopInfo.addressLine1}</div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                  <Phone className="mb-3 h-5 w-5 text-primary" />
                  <div className="text-sm uppercase tracking-[0.2em] text-white/50">Call</div>
                  <div className="mt-2 text-lg text-white">{shopInfo.phone}</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -left-6 top-8 h-24 w-24 rounded-full border border-primary/35" />
              <div className="absolute -bottom-8 right-0 h-40 w-40 rounded-full bg-primary/14 blur-3xl" />
              <div className="overflow-hidden rounded-[2rem] border border-primary/25 bg-black/20 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={`${shopInfo.name} interior inspiration`}
                  className="h-[620px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-black/45 p-5 backdrop-blur-md">
                  <div className="text-sm uppercase tracking-[0.24em] text-white/55">Address</div>
                  <div className="mt-2 text-2xl text-white">{shopInfo.addressLine1}</div>
                  <div className="mt-2 text-white/68">{shopInfo.neighborhood}, {shopInfo.city}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,rgba(253,249,243,1),rgba(243,237,228,1))] py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <div className="text-sm uppercase tracking-[0.28em] text-primary">Why {shopInfo.shortName}</div>
            <h2 className="display-font mt-4 text-5xl">Neighborhood Cuts With Strong Standards</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Mehmet Goksen barber shop stands out for dependable barbering, friendly service, and a central location that keeps regulars coming back.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full rounded-[2rem] border-border/80 bg-card p-7 shadow-[0_14px_40px_rgba(31,23,17,0.05)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-2xl">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-primary">Popular Picks</div>
              <h2 className="display-font mt-4 text-5xl">Core Services</h2>
              <p className="mt-3 text-lg text-muted-foreground">The treatments clients are most likely to book first.</p>
            </div>
            <Button asChild variant="outline" className="border-primary/25 hover:bg-primary/10">
              <Link to="/services">Full Price List</Link>
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-[2rem] border-border/80 bg-card p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {service.popular && (
                        <Badge className="mb-3 border-0 bg-primary text-primary-foreground">Popular</Badge>
                      )}
                      <h3 className="text-3xl">{service.name}</h3>
                      <div className="mt-3 text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                    <div className="display-font text-4xl text-primary">{service.price}</div>
                  </div>
                  <Button asChild className="mt-6 w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link to="/booking">Book This Service</Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
