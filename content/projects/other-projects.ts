import type { OtherProject } from "@/lib/types";

export const otherProjects: OtherProject[] = [
  {
    slug: "restaurant-admin-dashboard",
    name: "Restaurant Ordering App",
    description:
      "A restaurant ordering web app with a role-gated admin section for menu and order management, using Firebase Authentication and Firestore for live data sync.",
    date: "Jan 2026",
    liveUrl: "https://authentication-bf59e.web.app",
    techStack: ["JavaScript", "HTML", "CSS", "Firebase"],
    heroImage: {
      src: "/projects/restaurant-admin-dashboard/login.png",
      alt: "The restaurant ordering app's sign-in screen, with Google sign-in, email/password fields and feature highlights (Fast Delivery, Quality Food, Secure Payments, Order History).",
      width: 1920,
      height: 902,
    },
  },
];
