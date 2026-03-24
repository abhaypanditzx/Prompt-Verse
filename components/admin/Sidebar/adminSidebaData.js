import {
  LayoutDashboard,
  Plus,
  List,
  LogOut,
  Images,
  PlusSquare,
  GalleryVerticalEnd,
  ImagePlus,
} from "lucide-react";
export const sidebarLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    name: "Create Prompt",
    icon: ImagePlus,
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
  {
    name: "Create Blog",
    icon: Plus,
    path: "/admin/blog/create",
  },
  {
    name: "All Blogs",
    icon: Images,
    path: "/admin/blog/all",
  },
];
