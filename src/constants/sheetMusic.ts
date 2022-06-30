import type { sheetMusicType } from "src/types/sheetMusicType";
import { GithubIcon, LinkedinIcon } from "svelte-feather-icons";
import TpIcon from "../components/TpIcon.svelte";

const githubSheet = [
  "C", "A", "G", "B"
];

const linkedinSheet = [
  "C", "D", "E", "F"
];

const telepartySheet = [
  "B", "Ab", "A", "G"
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
  }
]
