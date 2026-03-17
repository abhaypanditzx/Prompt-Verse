import {
  LayoutDashboard,
  Plus,
  List,
  LogOut,
  Images,
  PlusSquare,
  GalleryVerticalEnd,
} from "lucide-react";
export const sidebarLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    name: "Create Prompt",
    icon: Plus,
    path: "/admin/prompt/create",
  },
  {
    name: "All Prompts",
    icon: Images,
    path: "/admin/prompt/all",
  },
  {
    name: " Add Category",
    icon: PlusSquare,
    path: "/admin/category/create",
  },
  {
    name: " All Categories",
    icon: GalleryVerticalEnd,
    path: "/admin/category/all",
  },
];
