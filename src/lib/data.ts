export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: "Radio" | "Crosshair" | "Signal" | "Activity" | "ArrowUpRight";
}

export interface DataExperience {
  id: "location" | "route" | "speed" | "stoppages" | "journey" | "anomalies";
  label: string;
  detail: string;
  iconName: "MapPin" | "RouteIcon" | "Gauge" | "Clock3" | "ArrowRight" | "ShieldCheck";
  value: string;
  unit?: string;
  metric: string;
  fill: number;
}

export interface Vehicle {
  id: string;
  status: "Moving" | "Stopped" | "In transit";
  place: string;
  speed: number;
  distance: number;
  tone: "good" | "watch";
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DifferenceItem {
  number: string;
  title: string;
  copy: string;
}

export interface PipelineStep {
  number: string;
  title: string;
  caption: string;
  id: string;
  iconName: "RouteIcon" | "Layers3" | "Signal" | "Activity" | "Sparkles" | "Gauge";
}

export const navigation = [
  { label: "About", id: "about" },
  { label: "How it works", id: "how-it-works" },
  { label: "Technology", id: "technology" },
  { label: "Dashboard", id: "dashboard" },
  { label: "Team", id: "team" },
  { label: "FAQ", id: "faq" },
] as const;

export const processSteps: ProcessStep[] = [
  { number: "01", title: "CONNECT", description: "A compact QUICKMATE device is installed inside the vehicle.", iconName: "Radio" },
  { number: "02", title: "CAPTURE", description: "Location, speed, motion, route, stoppages and journey data.", iconName: "Crosshair" },
  { number: "03", title: "TRANSMIT", description: "Vehicle information reaches QUICKMATE through cellular connectivity.", iconName: "Signal" },
  { number: "04", title: "UNDERSTAND", description: "Vehicle data becomes useful operational information.", iconName: "Activity" },
  { number: "05", title: "ACT", description: "See delays and unusual activity earlier, and make faster decisions.", iconName: "ArrowUpRight" },
];

export const dataExperiences: DataExperience[] = [
  { id: "location", label: "LIVE LOCATION", detail: "Know where your vehicle is.", iconName: "MapPin", value: "19.31° N", metric: "BERHAMPUR, ODISHA", fill: 72 },
  { id: "route", label: "ROUTE", detail: "Understand where it is going.", iconName: "RouteIcon", value: "NH-16", metric: "ROUTE ON TRACK", fill: 61 },
  { id: "speed", label: "SPEED", detail: "Know how it is moving.", iconName: "Gauge", value: "62", unit: "km/h", metric: "STEADY MOVEMENT", fill: 66 },
  { id: "stoppages", label: "STOPPAGES", detail: "See when and where it stops.", iconName: "Clock3", value: "18 min", metric: "BERHAMPUR • TODAY", fill: 34 },
  { id: "journey", label: "JOURNEY", detail: "Track distance and travel time.", iconName: "ArrowRight", value: "184 km", metric: "JOURNEY PROGRESS", fill: 76 },
  { id: "anomalies", label: "ANOMALIES", detail: "Spot unusual movement and deviations.", iconName: "ShieldCheck", value: "NORMAL", metric: "NO UNUSUAL MOVEMENT", fill: 15 },
];

export const vehicles: Vehicle[] = [
  { id: "104", status: "Moving", place: "NH-16 • Berhampur", speed: 62, distance: 184, tone: "good" },
  { id: "108", status: "Stopped", place: "Berhampur", speed: 0, distance: 96, tone: "watch" },
  { id: "112", status: "In transit", place: "Bhubaneswar • NH-16", speed: 54, distance: 238, tone: "good" },
];

export const faqs: FAQItem[] = [
  {
    question: "What is QUICKMATE?",
    answer: "QUICKMATE is an AIoT-powered fleet platform designed for heavy vehicles.",
  },
  {
    question: "Is QUICKMATE just a GPS tracker?",
    answer: "No. QUICKMATE combines dedicated IoT hardware, vehicle data and intelligent analytics.",
  },
  {
    question: "What can QUICKMATE track?",
    answer: "Location, route, speed, stoppages, journey information and unusual movement.",
  },
  {
    question: "How is QUICKMATE installed?",
    answer: "A dedicated IoT device is installed inside the vehicle.",
  },
  {
    question: "Who is QUICKMATE for?",
    answer: "Fleet owners, logistics operators and businesses managing commercial vehicles.",
  },
  {
    question: "What is the future of QUICKMATE?",
    answer: "AI-powered fleet intelligence that can identify patterns, risks and operational insights earlier.",
  },
];

export const differences: DifferenceItem[] = [
  { number: "01", title: "HEAVY-VEHICLE FIRST", copy: "Built around the realities of commercial and heavy-vehicle operations." },
  { number: "02", title: "BEYOND GPS", copy: "Vehicle data becomes operational intelligence, not just location tracking." },
  { number: "03", title: "AI-READY", copy: "Today’s vehicle data becomes tomorrow’s predictive fleet intelligence." },
];

export const pipelineSteps: PipelineStep[] = [
  { number: "01", title: "VEHICLE", caption: "On the road", id: "vehicle", iconName: "RouteIcon" },
  { number: "02", title: "QUICKMATE DEVICE", caption: "Capture signals", id: "hardware", iconName: "Layers3" },
  { number: "03", title: "CONNECTIVITY", caption: "Cellular network", id: "network", iconName: "Signal" },
  { number: "04", title: "DATA", caption: "Journey signals", id: "data", iconName: "Activity" },
  { number: "05", title: "INTELLIGENCE", caption: "Useful insights", id: "intelligence", iconName: "Sparkles" },
  { number: "06", title: "FLEET VIEW", caption: "Faster decisions", id: "view", iconName: "Gauge" },
];

export const signalIssues = [
  { number: "01", title: "MISSED UPDATES", description: "Too much dependence on manual information." },
  { number: "02", title: "UNEXPECTED STOPPAGES", description: "Delays can remain invisible until they become costly." },
  { number: "03", title: "ROUTE DEVIATIONS", description: "Problems may be discovered too late." },
  { number: "04", title: "SLOW DECISIONS", description: "Limited visibility leads to delayed action." },
] as const;
