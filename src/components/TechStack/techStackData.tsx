import { Brand } from "@/types/brand";
import { SiNextdotjs, SiFlask, SiFastapi, SiLaravel, SiPython } from "react-icons/si";

const techStackData: Brand[] = [
  {
    id: 1,
    name: "Next.js",
    href: "https://nextjs.org",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    id: 2,
    name: "Flask",
    href: "https://flask.palletsprojects.com",
    icon: SiFlask,
    color: "#000000",
  },
  {
    id: 3,
    name: "FastAPI",
    href: "https://fastapi.tiangolo.com",
    icon: SiFastapi,
    color: "#009688",
  },
  {
    id: 4,
    name: "Laravel",
    href: "https://laravel.com",
    icon: SiLaravel,
    color: "#FF2D20",
  },
  {
    id: 5,
    name: "Python",
    href: "https://www.python.org",
    icon: SiPython,
    color: "#3776AB",
  },
];

export default techStackData;
