export const services = [
  {
    id: "signature-haircut",
    name: "Signature Haircut",
    price: 25,
    duration: 35,
    description: "Tailored men's cut with consultation, styling, and shape refinement",
    category: "haircuts",
    popular: true,
  },
  {
    id: "skin-fade",
    name: "Skin Fade",
    price: 30,
    duration: 40,
    description: "Sharp fade work with crisp blending and detailed finishing",
    category: "haircuts",
    popular: true,
  },
  {
    id: "beard-trim",
    name: "Beard Trim & Lineup",
    price: 15,
    duration: 20,
    description: "Defined beard contouring with clean edges and balanced shape",
    category: "beard",
  },
  {
    id: "haircut-beard",
    name: "Haircut + Beard Combo",
    price: 35,
    duration: 50,
    description: "Complete grooming session for a clean cut and finished beard",
    category: "packages",
    popular: true,
  },
  {
    id: "hot-towel-shave",
    name: "Hot Towel Shave",
    price: 22,
    duration: 30,
    description: "Traditional razor shave with hot towel prep and aftercare",
    category: "shave",
  },
  {
    id: "mens-room-refresh",
    name: "Men's Room Refresh",
    price: 45,
    duration: 60,
    description: "Haircut, beard work, hot towel ritual, and final styling",
    category: "packages",
    popular: true,
  },
];

export const barbers = [
  {
    id: "amin",
    name: "Amin",
    role: "Fade & Texture Specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "harun",
    name: "Harun",
    role: "Classic Cuts & Beard Care",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "kerim",
    name: "Kerim",
    role: "Detailing & Razor Finish",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "adel",
    name: "Adel",
    role: "Modern Crop & Styling",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "any",
    name: "Any Available Barber",
    role: "Next Open Chair",
    image: "",
  },
];

export const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30",
];

export const getNextAvailableSlot = () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (now.getHours() < 14 || (now.getHours() === 14 && now.getMinutes() < 30)) {
    return { date: today, time: "14:30" };
  }

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return { date: tomorrow, time: "09:00" };
};
