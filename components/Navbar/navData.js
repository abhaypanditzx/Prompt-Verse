import {
  Briefcase,
  Home,
  Info,
  Phone,

  User,
} from "lucide-react";
export const navLinks = [
  {
    name: "Home",
    icon: Home,
    path: "/",
  },
  {
    name: "AI Prompts",
    icon: Briefcase,
    path: "/prompts",
  },
  {
    name: "About",
    icon: Info,
    path: "/about",
  },
  {
    name: "Contact",
    icon: Phone,
    path: "/contact",
  },
   {
    name: "admin",
    icon: User,
    path: "/admin/",
  },
];