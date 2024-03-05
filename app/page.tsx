import Image from "next/image";
import { EmojiProps } from "@/emojis/emojis";
import emojis from '../emojis/emojis.json'
import { getProjects } from "./utils/project";
import ProjectGraph from "./components/ProjectsGraph";





export default function Home() {
  const allProjects = getProjects();
  const associatedEmojisSet = new Set(allProjects.map(project => project.metadata.emoji));
  const associatedEmojis = Array.from(associatedEmojisSet);

  return (
    <>
    
    <ProjectGraph associatedEmojis={associatedEmojis} emojis={emojis} />
    
    </>
  );
}
