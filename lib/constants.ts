import {
  PiGithubLogoDuotone,
  PiInstagramLogoDuotone,
  PiLinkedinLogoDuotone,
  PiFacebookLogoDuotone,
} from "react-icons/pi";

import { RiNextjsFill } from "react-icons/ri";

export const myProfile = {
  name: "Leovin",
  url: "https://leovin.fyi",
  description:
    "Code is my canvas. As a software engineer, I design and build systems that balance performance, reliability, and great user experience.",
  author: "Leovin",
  links: {
    github: "https://github.com/leovin98",
    personalSite: "https://leovin.fyi",
  },
};

export const socialItems = [
  {
    name: "facebook",
    href: "https://www.facebook.com/leovin.huang",
    icon: PiFacebookLogoDuotone,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "github",
    href: "https://github.com/leovin98",
    icon: PiGithubLogoDuotone,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/leovin.98/",
    icon: PiInstagramLogoDuotone,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/leovin-huang/",
    icon: PiLinkedinLogoDuotone,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export const workItems = [
  {
    title: "Software Engineer",
    company: "Posable",
    duration: "Mar 22 - Mar 25",
  },
  {
    title: "Web Developer",
    company: "Vowever Wedding ",
    duration: "Jan 21 - Aug 21",
  },
  {
    title: "Web Developer",
    company: "Diskominfos Denpasar",
    duration: "Jun 19 - Nov 19",
  },
];

export const projectItems = [
  {
    icon: RiNextjsFill,
    title: "Leovin",
    description: "Next.js • Tailwind CSS • TypeScript",
    link: "https://leovin.fyi/",
  },
  {
    icon: RiNextjsFill,
    title: "My Terminal",
    description: "Next.js • Tailwind CSS • TypeScript",
    link: "https://myterminalx.vercel.app/",
  },
];
