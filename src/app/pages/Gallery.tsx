import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const categories = [
    { id: "all", label: "All" },
    { id: "cuts", label: "Cuts" },
    { id: "beards", label: "Beards" },
    { id: "shop", label: "Shop" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const images = [
    {
      src: "https://images.unsplash.com/photo-1622629217819-892db897f01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      category: "cuts",
      title: "Fresh Crop",
    },
    {
      src: "https://images.unsplash.com/photo-1693591936914-14645081663a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      category: "cuts",
      title: "Fade Detail",
    },
    {
      src: "https://images.unsplash.com/photo-1704124205210-34fd56da2707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      category: "beards",
      title: "Beard Lineup",
    },
    {
      src: "https://images.unsplash.com/photo-1759675905700-a1b5efedc05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      category: "cuts",
      title: "Textured Styling",
    },
    {
      src: "https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      category: "shop",
      title: "The Room",
    },
    {
      src: "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      category: "shop",
      title: "Barber at Work",
    },
    {
      src: "https://images.unsplash.com/photo-1647616944664-3d301c2b4638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      category: "shop",
      title: "Tools & Steel",
    },
    {
      src: "https://images.unsplash.com/photo-1603899968034-1a56ca48d172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      category: "beards",
      title: "Hot Towel Ritual",
    },
  ];

  const filteredImages = activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <div className="pb-20 pt-20 md:pb-0">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1a1411_0%,#2d221c_100%)]" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-primary-foreground">
              <Sparkles className="h-4 w-4" />
              Our Work
            </div>
            <h1 className="display-font mt-6 text-6xl text-white md:text-7xl">Style Gallery</h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-white/70">
              The imagery now supports the same identity as the copy: masculine, precise, and grounded in barbershop culture.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-20 z-40 border-b border-border bg-background/95 py-6 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={activeCategory === category.id ? "bg-primary text-primary-foreground" : "border-primary/20 hover:bg-primary/10"}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35 }}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-[1.75rem]"
                  onClick={() => setSelectedImage(index)}
                >
                  <ImageWithFallback src={image.src} alt={image.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-sm uppercase tracking-[0.2em] text-primary">The Men's Room</div>
                    <h3 className="mt-2 text-3xl text-white">{image.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.84, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.84, opacity: 0 }}
              transition={{ type: "spring", damping: 24 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-[2rem] border border-primary/25">
                <ImageWithFallback
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-3xl text-white">{filteredImages[selectedImage].title}</h3>
                <p className="mt-2 text-white/60">Barbershop The Men's Room visual direction</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
