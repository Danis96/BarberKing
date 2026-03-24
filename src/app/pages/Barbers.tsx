import { Link } from "react-router";
import { motion } from "motion/react";
import { Calendar, Medal, Scissors, Star, Trophy } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Barbers() {
  const barbers = [
    {
      name: "Amin",
      role: "Fade & Texture Specialist",
      experience: "8+ years",
      specialty: "Low fades, crops, and sharp texture control",
      rating: 5.0,
      reviews: 90,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      featured: true,
      award: "Most Requested",
    },
    {
      name: "Harun",
      role: "Classic Cuts & Beard Care",
      experience: "10+ years",
      specialty: "Classic gentleman cuts and beard maintenance",
      rating: 4.9,
      reviews: 84,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      featured: true,
      award: "Regulars' Pick",
    },
    {
      name: "Kerim",
      role: "Detailing & Razor Finish",
      experience: "7+ years",
      specialty: "Lineups, razor passes, and finishing precision",
      rating: 4.9,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Adel",
      role: "Modern Crop & Styling",
      experience: "6+ years",
      specialty: "Current trends shaped to suit everyday wear",
      rating: 4.8,
      reviews: 71,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ];

  return (
    <div className="pb-20 pt-20 md:pb-0">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1a1411_0%,#241c17_100%)]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(200,154,88,0.18)_1px,transparent_1px),linear-gradient(rgba(200,154,88,0.18)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge className="border-0 bg-primary px-5 py-2 text-primary-foreground">The Team</Badge>
            <h1 className="display-font mt-6 text-6xl text-white md:text-7xl">Meet the Barbers</h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-white/70">
              A tighter roster, clearer specialties, and a team page that reads like a barbershop instead of a generic salon.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {barbers.map((barber, index) => (
              <motion.div
                key={barber.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden rounded-[2rem] border-border/80">
                  <div className="relative h-96 overflow-hidden">
                    <ImageWithFallback
                      src={barber.image}
                      alt={barber.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {barber.featured && barber.award && (
                      <div className="absolute left-6 top-6">
                        <Badge className="border-0 bg-primary text-primary-foreground">
                          <Trophy className="mr-2 h-4 w-4" />
                          {barber.award}
                        </Badge>
                      </div>
                    )}

                    <div className="absolute right-6 top-6 rounded-2xl border border-white/12 bg-black/45 px-4 py-2 text-white backdrop-blur-md">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span>{barber.rating}</span>
                      </div>
                      <div className="mt-1 text-xs text-white/60">{barber.reviews} reviews</div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <h3 className="text-4xl text-white">{barber.name}</h3>
                      <p className="mt-1 text-primary">{barber.role}</p>
                    </div>
                  </div>

                  <div className="space-y-4 p-6">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {barber.experience}
                      </Badge>
                      <Badge variant="secondary" className="bg-muted text-foreground">
                        {barber.specialty}
                      </Badge>
                    </div>

                    <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                      <Link to="/booking">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book with {barber.name}
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { label: "Barbers", value: "4", icon: Scissors },
              { label: "Years Combined", value: "31+", icon: Medal },
              { label: "Review Signals", value: "80+", icon: Star },
              { label: "Return Rate Feel", value: "High", icon: Trophy },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="rounded-[1.75rem] border-border/80 p-7 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="display-font mt-5 text-5xl text-primary">{stat.value}</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
