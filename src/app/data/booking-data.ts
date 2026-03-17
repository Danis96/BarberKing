export const services = [
  {
    id: "signature-cut",
    name: "Signature Cut",
    price: 30,
    duration: 40,
    description: "Premium precision cut tailored to perfection",
    category: "haircuts",
  },
  {
    id: "royal-fade",
    name: "Royal Fade",
    price: 40,
    duration: 50,
    description: "Masterful fade with expert styling",
    category: "haircuts",
    popular: true,
  },
  {
    id: "executive-trim",
    name: "Executive Trim",
    price: 25,
    duration: 30,
    description: "Professional cut for the modern gentleman",
    category: "haircuts",
  },
  {
    id: "beard-styling",
    name: "Beard Styling",
    price: 20,
    duration: 25,
    description: "Expert shaping and conditioning",
    category: "beard",
  },
  {
    id: "kings-shave",
    name: "King's Shave",
    price: 35,
    duration: 45,
    description: "Luxurious hot towel straight razor experience",
    category: "beard",
    popular: true,
  },
  {
    id: "kings-package",
    name: "King's Package",
    price: 55,
    duration: 75,
    description: "Cut + beard styling + premium finish",
    category: "packages",
    popular: true,
  },
];

export const barbers = [
  {
    id: "dejan",
    name: "Dejan Mirković",
    role: "Master Barber & Owner",
    image: "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBwb3J0cmFpdCUyMG1hbGV8ZW58MXx8fHwxNzczNzM2MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "stefan",
    name: "Stefan Janković",
    role: "Senior Stylist",
    image: "https://images.unsplash.com/photo-1659355751209-2e6c7c8091fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwaGFpcnN0eWxpc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczNzM3OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "marko",
    name: "Marko Kovačević",
    role: "Expert Barber",
    image: "https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzdHlsaXN0JTIwd29ya2luZ3xlbnwxfHx8fDE3NzM3Mzc5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "nikola",
    name: "Nikola Petrović",
    role: "Style Specialist",
    image: "https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwcHJvZmVzc2lvbmFsJTIwdGVhbXxlbnwxfHx8fDE3NzM3Mzc5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "any",
    name: "Any Available",
    role: "First Available Barber",
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