import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

const sidebarItems = [
  {
    groupLabel: "Topics",
    menus: [
      {
        title: "Introduction",
        url: "/",
        Icon: Home,
      },
      {
        title: "Foundation",
        url: "/foundation",
        Icon: Inbox,
      },
      {
        title: "Calendar",
        url: "#",
        Icon: Calendar,
      },
      {
        title: "Search",
        url: "#",
        Icon: Search,
      },
      {
        title: "Settings",
        url: "#",
        Icon: Settings,
      },
    ],
  },
];

export default sidebarItems;
