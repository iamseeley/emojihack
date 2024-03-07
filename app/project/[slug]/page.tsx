import { Mdx } from "@/app/components/Mdx";
import { getProjects } from "@/app/utils/project"
import { notFound } from "next/navigation"
import Link from "next/link";







export default function Project({ params }) {
    const project = getProjects().find((project) => project.slug === params.slug)

    if (!project)  {
        notFound();
    }


    return (
        <section>
            <div className="mb-8">
                <h2 className="flex gap-2 font-semibold text-3xl mb-2"><span>{project.metadata.emoji}</span>{project.metadata.title}</h2>
                <div className="flex flex-row gap-4 items-center">
                    <time>{project.metadata.publishedAt}</time>
                    <Link className="px-2 h-7 hover:opacity-80  py-1 bg-blue-50 text-blue-600 rounded-lg shadow-sm font-medium inline-flex items-center" target="_blank" rel="noreferrer" href={`${project.metadata.source}`}>source <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></Link>
                </div>
            </div>
            <p className="border-l-gray-300 border-l-4 font-medium pl-4 mb-6">{project.metadata.description}</p>
            <p className="my-4">What came first, the emoji or the idea?</p>
            <p className="my-4">
                {project.metadata.origin === 'emoji' ? 
                 "The emoji came first." : 
                 "The idea came first."}
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Tech</h3>
            {project.metadata.tech && (
            <ul className="flex flex-row gap-2">
                {project.metadata.tech.map((techItem, index) => (
                <li className="px-2 py-1 inline-flex bg-gray-100 text-sm font-medium" key={index}>{techItem}</li>
                ))}
            </ul>
            )}
            <h3 className="text-2xl font-semibold mt-6 mb-4">Notes</h3>
            <article className="prose prose-h3:text-2xl prose-h3:font-semibold"><Mdx source={project.content} /></article>

        </section>
    )
}