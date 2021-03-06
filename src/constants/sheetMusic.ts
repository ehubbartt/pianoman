import type { sheetMusicType } from "src/types/sheetMusicType";
import { GithubIcon, LinkedinIcon } from "svelte-feather-icons";
import TpIcon from "../components/TpIcon.svelte";
import EHIcon from "../components/EHIcon.svelte";

const githubSheet = [
  "C", "A", "G", "B"
];

const linkedinSheet = [
  "C", "D", "E", "F"
];

const telepartySheet = [
  "B", "Ab", "A", "G"
]

const ehubbSheet = [
  "G", "C", "B", "Ab"
]

export const sheetMusic: sheetMusicType[] = [
  {
    name: "Github",
    type: "Social Link",
    icon: GithubIcon,
    url: "https://github.com/ehubbartt",
    sheet: githubSheet,
  },
  {
    name: "LinkedIn",
    type: "Social Link",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/ethan-hubbartt/",
    sheet: linkedinSheet,
  },
  {
    name: "Teleparty",
    type: "Project",
    icon: TpIcon,
    url: "https://www.teleparty.com",
    sheet: telepartySheet,
  },
  {
    name: "Ethanhub.dev",
    type: "Personal Blog",
    icon: EHIcon,
    url: "https://www.ethanhub.dev/",
    sheet: ehubbSheet,
  }
]
