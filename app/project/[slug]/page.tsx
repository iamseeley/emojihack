import { Mdx } from "@/app/components/Mdx";
import { getProjects } from "@/app/utils/project"
import { notFound } from "next/navigation"








export default function Project({ params }) {
    let project = getProjects().find((project) => project.slug === params.slug)

    if (!project)  {
        notFound();
    }


    return (
        <section>
            <h2 className="flex gap-2 font-semibold text-4xl"><span>{project.metadata.emoji}</span>{project.metadata.title}</h2>

            <article><Mdx source={project.content} /></article>

        </section>
    )
}