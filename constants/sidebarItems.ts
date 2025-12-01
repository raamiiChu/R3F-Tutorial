import {
  Blend,
  Book,
  Camera,
  FileCheckCorner,
  Headphones,
  Home,
  Inbox,
  Play,
  SearchCheck,
  Wallpaper,
} from "lucide-react";

type Menu = {
  title: string;
  url: string;
  Icon: React.ComponentType<{ className?: string }>;
  isBlank?: boolean;
};

type SideBarItem = {
  groupLabel: string;
  menus: Menu[];
};

const sidebarItems: SideBarItem[] = [
  {
    groupLabel: "Basic",
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
    ],
  },
  {
    groupLabel: "Ecosystem",
    menus: [
      {
        title: "Camera Control (drei)",
        url: "#",
        Icon: Camera,
      },
      {
        title: "GUI (leva)",
        url: "#",
        Icon: SearchCheck,
      },
      {
        title: "GLTF to R3F",
        url: "#",
        Icon: FileCheckCorner,
      },
    ],
  },
  {
    groupLabel: "Advanced",
    menus: [
      {
        title: "Animations (useFrame)",
        url: "#",
        Icon: Play,
      },
      {
        title: "Shadows",
        url: "#",
        Icon: Blend,
      },
      {
        title: "Textures",
        url: "#",
        Icon: Wallpaper,
      },
      {
        title: "Audio",
        url: "#",
        Icon: Headphones,
      },
    ],
  },
  {
    groupLabel: "References",
    menus: [
      {
        title: "Three.js Docs",
        url: "https://threejs.org/docs/",
        Icon: Book,
        isBlank: true,
      },
      {
        title: "R3F Docs",
        url: "https://r3f.docs.pmnd.rs/",
        Icon: Book,
        isBlank: true,
      },
      {
        title: "Drei Docs",
        url: "https://drei.docs.pmnd.rs/",
        Icon: Book,
        isBlank: true,
      },
      {
        title: "Leva Docs",
        url: "https://leva.pmnd.rs/",
        Icon: Book,
        isBlank: true,
      },
      {
        title: "gltf-react-three",
        url: "https://gltf.pmnd.rs/",
        Icon: Book,
        isBlank: true,
      },
      {
        title: "React Three Fiber (R3F) - The Basics",
        url: "https://www.youtube.com/watch?v=vTfMjI4rVSI",
        Icon: Book,
        isBlank: true,
      },
      {
        title: "React Three Fiber Crash Course for Beginners",
        url: "https://www.youtube.com/watch?v=jKy2Rm7EVOk",
        Icon: Book,
        isBlank: true,
      },
    ],
  },
];

export default sidebarItems;
