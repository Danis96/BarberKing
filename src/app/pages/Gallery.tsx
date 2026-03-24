import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All" },
    { id: "cuts", label: "Hair" },
    { id: "beards", label: "Beauty" },
    { id: "shop", label: "Salon" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const images = [
    {
      src: "https://images.unsplash.com/photo-1622629217819-892db897f01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwaGFpcmN1dCUyMHJlc3VsdHxlbnwxfHx8fDE3NzM3MzgwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "cuts",
      title: "Fresh Cut",
    },
    {
      src: "https://images.unsplash.com/photo-1693591936914-14645081663a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZmFkZSUyMGhhaXJjdXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczNzM4MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "cuts",
      title: "Styled Finish",
    },
    {
      src: "https://images.unsplash.com/photo-1704124205210-34fd56da2707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMGdyb29taW5nJTIwc3R5bGV8ZW58MXx8fHwxNzczNzM4MDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "beards",
      title: "Beauty Detail",
    },
    {
      src: "https://images.unsplash.com/photo-1654097801176-cb1795fd0c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzdHlsaW5nJTIwbWVucyUyMGhhaXJ8ZW58MXx8fHwxNzczNzIyMjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "cuts",
      title: "Hair Transformation",
    },
    {
      src: "https://images.unsplash.com/photo-1759675905700-a1b5efedc05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZW5zJTIwaGFpcmN1dCUyMHN0eWxlfGVufDF8fHx8MTc3MzcwNTA3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "cuts",
      title: "Modern Styling",
    },
    {
      src: "https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzczNjgyNzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "shop",
      title: "Image Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBwb3J0cmFpdCUyMG1hbGV8ZW58MXx8fHwxNzczNzM2MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "shop",
      title: "Team at Work",
    },
    {
      src: "https://images.unsplash.com/photo-1647616944664-3d301c2b4638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBzY2lzc29ycyUyMHRvb2xzfGVufDF8fHx8MTc3MzczNzc2MHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "shop",
      title: "Premium Tools",
    },
    {
      src: "https://images.unsplash.com/photo-1603899968034-1a56ca48d172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMHRyaW0lMjBncm9vbWluZ3xlbnwxfHx8fDE3NzM3MDY5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "beards",
      title: "Care Session",
    },
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="pt-20 pb-20 md:pb-0">
      {/* Header with Modern Design */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 border-2 border-primary/10"
          />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary">Our Work Speaks</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="block">Style</span>
              <span className="block bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the visual style of Image through hair, beauty, and salon atmosphere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sticky top-20 bg-background/95 backdrop-blur-xl border-b border-border z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="lg"
                className={
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground border-0"
                    : "border-primary/30 hover:bg-primary/10 hover:border-primary"
                }
              >
                {activeCategory === category.id && <Sparkles className="w-4 h-4 mr-2" />}
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid with Modern Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer relative overflow-hidden aspect-square"
                  onClick={() => setSelectedImage(index)}
                >
                  {/* Decorative Border */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300 z-10" />
                  
                  <ImageWithFallback
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl text-foreground">{image.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary to-yellow-500 -mr-8 -mt-8 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-primary to-yellow-500 hover:from-yellow-500 hover:to-primary transition-all flex items-center justify-center group"
            >
              <X className="w-6 h-6 text-primary-foreground" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-w-6xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
                <div className="relative border-2 border-primary/30 overflow-hidden">
                  <ImageWithFallback
                    src={filteredImages[selectedImage].src}
                    alt={filteredImages[selectedImage].title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-3xl mb-2">{filteredImages[selectedImage].title}</h3>
                <p className="text-muted-foreground">Image salon atmosphere</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
