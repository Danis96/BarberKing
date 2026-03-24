export const services = [
  {
    id: "women-haircut",
    name: "Women's Haircut",
    price: 35,
    duration: 45,
    description: "Consultation, cut, and finish tailored to your hair type",
    category: "haircuts",
  },
  {
    id: "mens-haircut",
    name: "Men's Haircut",
    price: 25,
    duration: 30,
    description: "Clean, precise cut with styling and detail work",
    category: "haircuts",
    popular: true,
  },
  {
    id: "blow-dry",
    name: "Wash & Blow Dry",
    price: 20,
    duration: 30,
    description: "Smooth finish and styling for everyday polish or events",
    category: "haircuts",
  },
  {
    id: "hair-color",
    name: "Hair Coloring",
    price: 60,
    duration: 120,
    description: "Professional color refresh, tone change, or root touch-up",
    category: "color",
  },
  {
    id: "balayage-highlights",
    name: "Balayage & Highlights",
    price: 90,
    duration: 150,
    description: "Dimensional color service with salon-finish styling",
    category: "color",
    popular: true,
  },
  {
    id: "beauty-package",
    name: "Beauty Package",
    price: 75,
    duration: 100,
    description: "Hair styling, treatment, and beauty finishing in one visit",
    category: "packages",
    popular: true,
  },
];

export const barbers = [
  {
    id: "aldijana",
    name: "Aldijana",
    role: "Color Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "azem",
    name: "Azem",
    role: "Men's Hair Specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "sarah",
    name: "Sarah",
    role: "Nails & Beauty Specialist",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "berina",
    name: "Berina",
    role: "Hair & Lash Artist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "any",
    name: "Any Available",
    role: "First Available Specialist",
    image: "",
  },
];

export const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30",
];

export const getNextAvailableSlot = () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  // Mock: return today at 14:30 if before 2:30pm, otherwise tomorrow at 8:00
  if (now.getHours() < 14 || (now.getHours() === 14 && now.getMinutes() < 30)) {
    return { date: today, time: "14:30" };
  } else {
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return { date: tomorrow, time: "08:00" };
  }
};
