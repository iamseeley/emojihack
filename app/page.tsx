import Image from "next/image";
import { EmojiProps } from "@/emojis/emojis";
import emojis from '../emojis/emojis.json'
import { getProjects } from "./utils/project";
import ProjectGraph from "./components/ProjectsGraph";
import ProjectStatus from "./components/ProjectsStatus";
import Hero from "./components/Hero";





export default function Home() {
  const allProjects = getProjects();
  const associatedEmojisSet = new Set(allProjects.map(project => project.metadata.emoji));
  const emojiToProjectSlug = allProjects.reduce((acc, project) => {
    acc[project.metadata.emoji] = project.slug;
    return acc;
  }, {});
  const associatedEmojis = Array.from(associatedEmojisSet);
  const totalEmojisCount = emojis.length;
  const associatedEmojisCount = Object.keys(emojiToProjectSlug).length;

  return (
    <>
      <div className="flex flex-col gap-20">
        <section>
          <Hero />
        </section>
        <section className="flex flex-col gap-4">
          <ProjectStatus totalEmojisCount={totalEmojisCount} associatedEmojisCount={associatedEmojisCount} />
          <ProjectGraph associatedEmojis={emojiToProjectSlug} emojis={emojis} />
        </section>
      </div>
    </>
  );
}
