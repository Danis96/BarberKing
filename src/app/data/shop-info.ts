export const shopInfo = {
  name: "Mehmet Goksen barber shop",
  shortName: "Mehmet Goksen",
  city: "Sarajevo",
  addressLine1: "Alipasina 5",
  addressLine2: "Sarajevo 71000, Bosnia & Herzegovina",
  phone: "+387 61 062 029",
  email: "",
  tagline: "Traditional barbering, clean finishes, and a straightforward shop experience in central Sarajevo.",
  neighborhood: "Centar",
  mapUrl:
    "https://www.google.com/maps/place/Mehmet+G%C3%B6k%C5%9Fen+barber+shop/@43.8584757,18.4119954,776m/data=!3m1!1e3!4m10!1m2!2m1!1sbarber!3m6!1s0x4758c956aa6347c7:0xe2ccc48951be84fe!8m2!3d43.8584406!4d18.4118695!15sCgZiYXJiZXJaCCIGYmFyYmVykgELYmFyYmVyX3Nob3CaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnRLYW1SSVdubFhWbFYzVWpKd2NHTkViRFZPYW1jd1lUQnNNR0ZIWXhBQuABAPoBBAgAECA!16s%2Fg%2F11lw8cmt03?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D",
  facebookUrl: "",
  messengerUrl: "",
  rating: 4.8,
  reviewCount: 48,
  hours: {
    weekdays: "Check Google Maps for today's hours",
    saturday: "",
    sunday: "",
  },
  features: [
    "Trusted neighborhood barbershop",
    "Precise fades and beard work",
    "Friendly, low-fuss atmosphere",
  ],
} as const;

export const goodLookBarbers = [
  {
    id: "aldin",
    name: "Aldin",
    role: "Senior Barber",
    experience: "15+ years",
    specialty: "Modern cuts, precision fades, and polished finishing",
    accent: "Most requested",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: true,
  },
  {
    id: "kenan",
    name: "Kenan",
    role: "Cut & Beard Specialist",
    experience: "10+ years",
    specialty: "Balanced beard shaping and clean everyday trims",
    accent: "Regulars' pick",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: true,
  },
  {
    id: "team-availability",
    name: "Shop Team",
    role: "Walk-ins & Quick Shapeups",
    experience: "All-day coverage",
    specialty: "Fast turnaround for trims, lineups, and flexible bookings",
    accent: "Best availability",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
] as const;
