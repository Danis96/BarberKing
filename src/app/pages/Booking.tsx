import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Scissors,
  Star,
  User,
  Zap,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { services, barbers, timeSlots, getNextAvailableSlot } from "../data/booking-data";
import { shopInfo } from "../data/shop-info";
import { toast } from "sonner";

type BookingData = {
  service: string | null;
  barber: string | null;
  date: Date | null;
  time: string | null;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const totalSteps = 4;

const bookingSteps = [
  { id: 1, label: "Service", description: "Choose your cut", icon: Scissors },
  { id: 2, label: "Barber", description: "Pick your chair", icon: User },
  { id: 3, label: "Schedule", description: "Select date and time", icon: CalendarDays },
  { id: 4, label: "Details", description: "Confirm the visit", icon: Check },
] as const;

const barberNotes: Record<string, { specialty: string; accent: string }> = {
  aldin: { specialty: "Modern cuts, precision fades, and polished finishing", accent: "Most requested" },
  kenan: { specialty: "Balanced beard shaping and clean everyday trims", accent: "Regulars' pick" },
  "team-availability": {
    specialty: "Fast turnaround for trims, lineups, and flexible bookings",
    accent: "Best availability",
  },
  any: { specialty: "Fastest route to the next open chair", accent: "Best availability" },
};

const slotPeriods = [
  { label: "Morning", start: 9, end: 12 },
  { label: "Afternoon", start: 12, end: 17 },
  { label: "Evening", start: 17, end: 20 },
];

function getDateOptions() {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    date.setHours(0, 0, 0, 0);
    return date;
  });
}

function getDateKey(date: Date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function formatLongDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function getSlotStatus(date: Date, time: string, barberId: string | null) {
  const [hoursText, minutesText] = time.split(":");
  const hours = Number(hoursText);
  const minutes = Number(minutesText);
  const barberWeight =
    barberId === "any"
      ? 1
      : (barberId ?? "")
          .split("")
          .reduce((sum, character) => sum + character.charCodeAt(0), 0) % 7;
  const dateWeight = date.getDate() + date.getMonth() + hours + minutes / 30 + barberWeight;

  if (hours === 13 || hours === 18) return "busy";
  if (dateWeight % 5 === 0) return "busy";
  if (dateWeight % 3 === 0) return "limited";
  return "open";
}

function getStepCopy(step: number) {
  switch (step) {
    case 1:
      return {
        title: "Choose your service",
        description: "Start with the cut, beard service, or package that fits your visit.",
      };
    case 2:
      return {
        title: "Select your barber",
        description: "Choose a preferred barber or pick the fastest available chair.",
      };
    case 3:
      return {
        title: "Pick a date and time",
        description: "Choose from the next available week and lock in a slot that fits your schedule.",
      };
    case 4:
      return {
        title: "Add your details",
        description: "Review the appointment and leave the contact details the shop should use.",
      };
    default:
      return {
        title: "Book your visit",
        description: "Complete the steps below to confirm your visit.",
      };
  }
}

export function Booking() {
  const [step, setStep] = useState(1);
  const [isReturningCustomer, setIsReturningCustomer] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    service: null,
    barber: null,
    date: null,
    time: null,
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const dateOptions = getDateOptions();
  const stepCopy = getStepCopy(step);
  const selectedService = services.find((service) => service.id === bookingData.service);
  const selectedBarber = barbers.find((barber) => barber.id === bookingData.barber);
  const groupedSlots = slotPeriods.map((period) => ({
    ...period,
    slots: timeSlots.filter((time) => {
      const hour = Number(time.split(":")[0]);
      return hour >= period.start && hour < period.end;
    }),
  }));

  useEffect(() => {
    const isReturning = Math.random() > 0.5;
    setIsReturningCustomer(isReturning);
  }, []);

  const setBookingField = <K extends keyof BookingData>(field: K, value: BookingData[K]) => {
    setBookingData((current) => ({ ...current, [field]: value }));
  };

  const canProceed = (targetStep = step) => {
    switch (targetStep) {
      case 1:
        return bookingData.service !== null;
      case 2:
        return bookingData.barber !== null;
      case 3:
        return bookingData.date !== null && bookingData.time !== null;
      case 4:
        return Boolean(bookingData.name && bookingData.email && bookingData.phone);
      default:
        return false;
    }
  };

  const canJumpToStep = (targetStep: number) => {
    if (targetStep <= step) return true;
    for (let currentStep = 1; currentStep < targetStep; currentStep += 1) {
      if (!canProceed(currentStep)) return false;
    }
    return true;
  };

  const handleQuickBook = () => {
    const nextSlot = getNextAvailableSlot();
    const popularService = services.find((service) => service.popular);

    setBookingData((current) => ({
      ...current,
      service: popularService?.id || services[0].id,
      barber: "any",
      date: nextSlot.date,
      time: nextSlot.time,
    }));
    setStep(4);
    toast.success("Quick booking selected. Add your details to confirm.");
  };

  const handleNext = () => {
    if (canProceed() && step < totalSteps) {
      setStep((current) => current + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((current) => current - 1);
    }
  };

  const handleSubmit = () => {
    toast.success(`Booking request sent to ${shopInfo.name}. Check your email for details.`);
    console.log("Booking submitted:", bookingData);
  };

  const summaryPrice = selectedService?.price ?? 0;
  const discountedPrice = isReturningCustomer ? Math.round(summaryPrice * 0.9) : summaryPrice;

  return (
    <div className="pt-20 pb-20 md:pb-8">
      <section className="relative overflow-hidden border-b border-border/60 bg-[radial-gradient(circle_at_top_left,_rgba(229,185,140,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(217,230,223,0.42),_transparent_34%),linear-gradient(180deg,#f7f1ea_0%,#efe6da_100%)] py-10 dark:bg-[radial-gradient(circle_at_top_left,_rgba(239,199,159,0.14),_transparent_28%),linear-gradient(180deg,rgba(21,37,64,0.98),rgba(10,22,40,1))]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
              <div>
                {isReturningCustomer && (
                  <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-5"
                  >
                    <Badge className="border border-primary/20 bg-primary/10 px-4 py-2 text-primary">
                      <Star className="mr-2 h-4 w-4" />
                      Returning guest pricing unlocked: 10% off this visit
                    </Badge>
                  </motion.div>
                )}

                <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h1 className="display-font text-5xl md:text-6xl">Book a Chair</h1>
                    <p className="mt-2 max-w-2xl text-base text-muted-foreground md:text-lg">
                      {stepCopy.description}
                    </p>
                  </div>
                  <div className="rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm text-primary">
                    Step {step} of {totalSteps}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-4">
                  {bookingSteps.map((item, index) => {
                    const Icon = item.icon;
                    const isComplete = step > item.id;
                    const isActive = step === item.id;
                    const isAccessible = canJumpToStep(item.id);

                    return (
                      <button
                        key={item.id}
                        type="button"
                        disabled={!isAccessible}
                        onClick={() => isAccessible && setStep(item.id)}
                        className={`group relative rounded-2xl border p-4 text-left transition-all ${
                          isActive
                            ? "border-primary bg-primary/12 shadow-[0_0_0_1px_rgba(229,185,140,0.22)]"
                            : isComplete
                              ? "border-primary/20 bg-card/88 hover:border-primary/35"
                              : "border-border/70 bg-card/74 hover:border-primary/20"
                        } ${!isAccessible ? "cursor-not-allowed opacity-60" : ""}`}
                      >
                        {index < bookingSteps.length - 1 && (
                          <div className="pointer-events-none absolute -right-2 top-8 hidden h-px w-4 bg-border/70 md:block" />
                        )}

                        <div className="mb-3 flex items-center justify-between">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                              isActive || isComplete
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border bg-background text-muted-foreground"
                            }`}
                          >
                            {isComplete ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                          </div>
                          <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                            0{item.id}
                          </span>
                        </div>
                        <div className="text-lg">{item.label}</div>
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <Card className="border-primary/15 bg-card/80 p-5 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Quick book</div>
                    <h2 className="mt-2 text-2xl">Need the fastest route?</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We’ll preselect a popular service, the earliest available barber, and the next bookable slot.
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Zap className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 grid gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between rounded-xl border border-border/70 bg-background/50 px-4 py-3">
                    <span>Service</span>
                    <span className="text-foreground">Popular pick</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-border/70 bg-background/50 px-4 py-3">
                    <span>Specialist</span>
                    <span className="text-foreground">Any available barber</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-border/70 bg-background/50 px-4 py-3">
                    <span>Start time</span>
                    <span className="text-foreground">Next open slot</span>
                  </div>
                </div>

                <Button
                  onClick={handleQuickBook}
                  className="mt-5 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Quick Book
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 xl:grid-cols-[1.55fr_0.75fr]">
              <div>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.28 }}
                    >
                      <div className="mb-6 flex flex-col gap-2">
                        <div className="text-sm uppercase tracking-[0.24em] text-primary">Step 01</div>
                        <h2 className="text-3xl md:text-4xl">{stepCopy.title}</h2>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        {services.map((service) => {
                          const isSelected = bookingData.service === service.id;

                          return (
                            <motion.button
                              key={service.id}
                              type="button"
                              whileHover={{ y: -4 }}
                              onClick={() => setBookingField("service", service.id)}
                              className={`relative overflow-hidden rounded-3xl border p-6 text-left transition-all ${
                                isSelected
                                  ? "border-primary bg-[linear-gradient(180deg,rgba(251,191,36,0.14),rgba(21,37,64,0.98))] shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
                                  : "border-border/70 bg-card hover:border-primary/30"
                              }`}
                            >
                              <div className="mb-8 flex items-start justify-between gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                                  <Scissors className="h-5 w-5" />
                                </div>
                                <div className="flex items-center gap-2">
                                  {service.popular && (
                                    <Badge className="border-0 bg-primary text-primary-foreground">Popular</Badge>
                                  )}
                                  {isSelected && (
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                      <Check className="h-4 w-4" />
                                    </div>
                                  )}
                                </div>
                              </div>

                              <h3 className="text-2xl">{service.name}</h3>
                              <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                                {service.description}
                              </p>

                              <div className="mt-8 flex flex-wrap items-end justify-between gap-3">
                                <div>
                                  <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                                    Starting at
                                  </div>
                                  <div className="mt-2 text-4xl text-primary">{service.price} KM</div>
                                </div>
                                <div className="rounded-full border border-border/70 bg-background/60 px-4 py-2 text-sm text-foreground">
                                  <Clock className="mr-2 inline h-4 w-4 text-primary" />
                                  {service.duration} min
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.28 }}
                    >
                      <div className="mb-6 flex flex-col gap-2">
                        <div className="text-sm uppercase tracking-[0.24em] text-primary">Step 02</div>
                        <h2 className="text-3xl md:text-4xl">{stepCopy.title}</h2>
                      </div>

                      <div className="grid gap-4">
                        {barbers.map((barber) => {
                          const isSelected = bookingData.barber === barber.id;
                          const barberMeta = barberNotes[barber.id];

                          return (
                            <motion.button
                              key={barber.id}
                              type="button"
                              whileHover={{ x: 3 }}
                              onClick={() => {
                                setBookingData((current) => ({
                                  ...current,
                                  barber: barber.id,
                                  time: current.barber !== barber.id ? null : current.time,
                                }));
                              }}
                              className={`rounded-3xl border p-4 text-left transition-all ${
                                isSelected
                                  ? "border-primary bg-primary/10 shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
                                  : "border-border/70 bg-card hover:border-primary/30"
                              }`}
                            >
                              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                                <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-border/60">
                                  {barber.image ? (
                                    <ImageWithFallback
                                      src={barber.image}
                                      alt={barber.name}
                                      className="h-full w-full object-cover"
                                    />
                                  ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-primary/10">
                                      <User className="h-8 w-8 text-primary" />
                                    </div>
                                  )}
                                </div>

                                <div className="min-w-0 flex-1">
                                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                                    <div>
                                      <h3 className="text-xl">{barber.name}</h3>
                                      <p className="text-sm text-muted-foreground">{barber.role}</p>
                                    </div>
                                    <Badge className="w-fit border border-primary/20 bg-primary/10 text-primary">
                                      {barberMeta?.accent ?? "Available now"}
                                    </Badge>
                                  </div>

                                  <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
                                    <p className="text-sm leading-6 text-muted-foreground">
                                      {barberMeta?.specialty ?? "Professional barbering tailored to your visit."}
                                    </p>
                                    <div className="flex items-center gap-2 self-start md:self-auto">
                                      <div className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-sm">
                                        <Star className="mr-1 inline h-3.5 w-3.5 fill-primary text-primary" />
                                        4.9
                                      </div>
                                      {isSelected && (
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                          <Check className="h-4 w-4" />
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.28 }}
                    >
                      <div className="mb-6 flex flex-col gap-2">
                        <div className="text-sm uppercase tracking-[0.24em] text-primary">Step 03</div>
                        <h2 className="text-3xl md:text-4xl">{stepCopy.title}</h2>
                      </div>

                      <Card className="border-border/70 bg-card/70 p-5">
                        <div className="mb-5 flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                            <CalendarDays className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Dates</div>
                            <div className="text-lg">Next 7 days</div>
                          </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                          {dateOptions.map((date) => {
                            const isSelected = bookingData.date?.toDateString() === date.toDateString();

                            return (
                              <button
                                key={getDateKey(date)}
                                type="button"
                                onClick={() =>
                                  setBookingData((current) => ({
                                    ...current,
                                    date,
                                    time:
                                      current.date?.toDateString() === date.toDateString() ? current.time : null,
                                  }))
                                }
                                className={`rounded-2xl border p-4 text-left transition-all ${
                                  isSelected
                                    ? "border-primary bg-primary/12"
                                    : "border-border/70 bg-background/45 hover:border-primary/25"
                                }`}
                              >
                                <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                                  {date.toLocaleDateString("en-US", { weekday: "short" })}
                                </div>
                                <div className="mt-3 text-3xl">{date.getDate()}</div>
                                <div className="mt-1 text-sm text-muted-foreground">
                                  {date.toLocaleDateString("en-US", { month: "long" })}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </Card>

                      <div className="mt-6 grid gap-5">
                        {groupedSlots.map((period) => (
                          <Card key={period.label} className="border-border/70 bg-card/70 p-5">
                            <div className="mb-4 flex items-center justify-between">
                              <div>
                                <div className="text-lg">{period.label}</div>
                                <p className="text-sm text-muted-foreground">
                                  {period.label === "Morning" && "Ideal before work or morning errands."}
                                  {period.label === "Afternoon" && "Balanced demand with solid availability."}
                                  {period.label === "Evening" && "Most popular after-work chairs."}
                                </p>
                              </div>
                              <div className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                                {period.slots.length} slots
                              </div>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                              {period.slots.map((time) => {
                                const status = bookingData.date
                                  ? getSlotStatus(bookingData.date, time, bookingData.barber)
                                  : "open";
                                const isSelected = bookingData.time === time;
                                const isUnavailable = status === "busy";

                                return (
                                  <button
                                    key={time}
                                    type="button"
                                    disabled={!bookingData.date || isUnavailable}
                                    onClick={() => setBookingField("time", time)}
                                    className={`rounded-2xl border p-4 text-left transition-all ${
                                      isSelected
                                        ? "border-primary bg-primary text-primary-foreground"
                                        : isUnavailable
                                          ? "cursor-not-allowed border-border/40 bg-background/30 opacity-50"
                                          : "border-border/70 bg-background/45 hover:border-primary/30"
                                    } ${!bookingData.date ? "cursor-not-allowed opacity-60" : ""}`}
                                  >
                                    <div className="flex items-center justify-between gap-3">
                                      <span className="text-lg">{time}</span>
                                      <Clock className="h-4 w-4" />
                                    </div>
                                    <div
                                      className={`mt-3 text-xs uppercase tracking-[0.2em] ${
                                        isSelected
                                          ? "text-primary-foreground/80"
                                          : status === "limited"
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                      }`}
                                    >
                                      {!bookingData.date
                                        ? "Pick a date first"
                                        : status === "busy"
                                          ? "Unavailable"
                                          : status === "limited"
                                            ? "Few left"
                                            : "Open"}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </Card>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.28 }}
                    >
                      <div className="mb-6 flex flex-col gap-2">
                        <div className="text-sm uppercase tracking-[0.24em] text-primary">Step 04</div>
                        <h2 className="text-3xl md:text-4xl">{stepCopy.title}</h2>
                      </div>

                      <Card className="border-border/70 bg-card/75 p-6">
                        <div className="grid gap-5 md:grid-cols-2">
                          <div>
                            <Label htmlFor="name">Full Name</Label>
                            <div className="relative mt-2">
                              <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                              <Input
                                id="name"
                                placeholder="Your name"
                                value={bookingData.name}
                                onChange={(e) => setBookingField("name", e.target.value)}
                                className="h-12 border-border/70 bg-background/60 pl-11"
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="email">Email</Label>
                            <div className="relative mt-2">
                              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                              <Input
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                                value={bookingData.email}
                                onChange={(e) => setBookingField("email", e.target.value)}
                                className="h-12 border-border/70 bg-background/60 pl-11"
                              />
                            </div>
                          </div>

                          <div className="md:col-span-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <div className="relative mt-2">
                              <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                              <Input
                                id="phone"
                                type="tel"
                                placeholder="+387 XX XXX XXX"
                                value={bookingData.phone}
                                onChange={(e) => setBookingField("phone", e.target.value)}
                                className="h-12 border-border/70 bg-background/60 pl-11"
                              />
                            </div>
                          </div>

                          <div className="md:col-span-2">
                            <Label htmlFor="notes">Additional Notes</Label>
                            <div className="relative mt-2">
                              <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
                              <Textarea
                                id="notes"
                                placeholder="Any fade preference, beard notes, or scheduling details..."
                                value={bookingData.notes}
                                onChange={(e) => setBookingField("notes", e.target.value)}
                                className="min-h-32 border-border/70 bg-background/60 pl-11"
                              />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {step > 1 && (
                    <Button
                      onClick={handleBack}
                      variant="outline"
                      className="h-12 border-border/70 bg-card/60 px-6 sm:w-auto"
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  )}

                  {step < totalSteps ? (
                    <Button
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="h-12 flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={!canProceed()}
                      className="h-12 flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Check className="mr-2 h-4 w-4" />
                      Confirm Booking
                    </Button>
                  )}
                </div>
              </div>

              <div>
                <Card className="sticky top-28 border-primary/15 bg-card/80 p-5 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
                        Booking summary
                      </div>
                      <h3 className="mt-2 text-2xl">Your visit</h3>
                    </div>
                    <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
                      {step}/4
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="rounded-2xl border border-border/70 bg-background/45 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Service</div>
                      <div className="mt-2 text-lg">{selectedService?.name ?? "Choose a service"}</div>
                      {selectedService && (
                        <div className="mt-2 text-sm text-muted-foreground">
                          {selectedService.duration} min • {selectedService.price} KM
                        </div>
                      )}
                    </div>

                    <div className="rounded-2xl border border-border/70 bg-background/45 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Barber</div>
                      <div className="mt-2 text-lg">{selectedBarber?.name ?? "Choose a barber"}</div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        {selectedBarber?.role ?? "Selection appears here"}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border/70 bg-background/45 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Schedule</div>
                      <div className="mt-2 text-lg">
                        {bookingData.date ? formatLongDate(bookingData.date) : "Pick a date"}
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        {bookingData.time ? `${bookingData.time} chair time` : "Time slot appears here"}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/10 p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Estimated total</span>
                      <span className="text-2xl text-primary">{discountedPrice} KM</span>
                    </div>
                    {isReturningCustomer && summaryPrice > 0 && (
                      <p className="mt-2 text-sm text-primary">
                        Returning guest discount applied from {summaryPrice} KM.
                      </p>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
