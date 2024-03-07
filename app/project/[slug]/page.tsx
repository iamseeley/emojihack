import { Mdx } from "@/app/components/Mdx";
import { getProjects } from "@/app/utils/project"
import { notFound } from "next/navigation"








export default function Project({ params }) {
    const project = getProjects().find((project) => project.slug === params.slug)

    if (!project)  {
        notFound();
    }


    return (
        <section>
            <div className="mb-8">
                <h2 className="flex gap-2 font-semibold text-3xl mb-2"><span>{project.metadata.emoji}</span>{project.metadata.title}</h2>
                <time>{project.metadata.publishedAt}</time>
            </div>
            <p className="border-l-gray-300 border-l-4 font-medium pl-4 ">{project.metadata.description}</p>
            <p className="my-4">What came first, the emoji or the idea?</p>
            <p className="my-4">
                {project.metadata.origin === 'emoji' ? 
                 "The emoji came first." : 
                 "The idea came first."}
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Tech</h3>
            <ul><li>{project.metadata.tech}</li></ul>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Notes</h3>
            <article className="prose prose-h3:text-2xl prose-h3:font-semibold"><Mdx source={project.content} /></article>

        </section>
    )
}