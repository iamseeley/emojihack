import { Mdx } from "@/app/components/Mdx";
import { getProjects } from "@/app/utils/project"
import { notFound } from "next/navigation"
import Link from "next/link";
import { unstable_noStore as noStore } from 'next/cache';
import type { Metadata } from "next";
import emojihack from '../../../emojihack.json'
import { emojiArray } from '../../../emojis/emojis'
import emojisOG from '../../../emojis/emojisOg.json';

function formatDate(date: string) {
  noStore();
  let currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
}


export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let project = getProjects().find((project) => project.slug === params.slug);
  if (!project) {
    return;
  }
  let name = 'made by ' + emojihack.preferredName?.toLowerCase() ?? 'add name in emojihack.json';
  let {
    title,
    emoji,
    publishedAt: publishedTime,
    description: description,
    image,
  } = project.metadata;
  const emojiData = emojiArray.find((item) => item.emoji === emoji);
  // const faviconPngData = emojiData ? emojiData.apple : null;
  const faviconPngData = emojisOG[emoji];
  let ogImage = image
    ? `https://emojihack.com${image}`
    : `https://emojihack.com/og?title=${title}&emojiPng=${encodeURIComponent(faviconPngData)}&name=${(encodeURIComponent(name))}&date=${(encodeURIComponent(publishedTime))}`;
    // ? `https://localhost:3000${image}`
    // : `https://localhost:3000/og?title=${title}&emoji=${(encodeURIComponent(emoji))}&name=${(encodeURIComponent(name))}&date=${(encodeURIComponent(publishedTime))}`;
    let faviconSvgUrl = `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${emoji}</text></svg>`
    )}`;
  return {
    title,
    description,
    icons: {
      icon: faviconSvgUrl,
      shortcut: faviconPngData,
      apple: faviconPngData,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://emojihack.com/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}





export default function Project({ params }) {
    const project = getProjects().find((project) => project.slug === params.slug)
    const allProjects = getProjects().map(project => ({
      ...project,
      publishedAtDate: new Date(project.metadata.publishedAt)
    })).sort((a, b) => a.publishedAtDate.getTime() - b.publishedAtDate.getTime());

    const currentProjectIndex = allProjects.findIndex(project => project.slug === params.slug);
    const prevProject = currentProjectIndex > 0 ? allProjects[currentProjectIndex - 1] : null;
    const nextProject = currentProjectIndex < allProjects.length - 1 ? allProjects[currentProjectIndex + 1] : null;



    if (!project)  {
        notFound();
    }


    return (
        <section>
            <div className="mb-8">
                <h2 className="flex gap-2 font-semibold text-3xl mb-2"><span>{project.metadata.emoji}</span>{project.metadata.title}</h2>
                <div className="flex flex-row gap-4 items-center">
                    <time>{formatDate(project.metadata.publishedAt)}</time>
                    <Link className="px-2 h-7 hover:opacity-80  py-1 bg-blue-50 text-blue-600 rounded-lg shadow-sm font-medium inline-flex items-center" target="_blank" rel="noreferrer" href={`${project.metadata.source}`}>source <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></Link>
                </div>
            </div>
            <p className="font-medium mb-6">{project.metadata.description} <span className={`ml-1 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${project.metadata.origin === 'emoji' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                  <svg className="-ml-1 mr-1.5 h-2 w-2 ${project.metadata.origin === 'emoji' ? 'text-green-400' : 'text-purple-400'}" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {project.metadata.origin}
                </span>
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


            <div className="mt-8 flex flex-col gap-2 justify-center items-center">
                {prevProject && (
                    <Link href={`/project/${prevProject.slug}`} className="text-blue-600 font-medium hover:underline flex items-center gap-1 group">
                        <span className="group-hover:translate-x-2 transform ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg></span> Prev: {prevProject.metadata.title}
                    </Link>
                )}
                {nextProject && (
                    <Link href={`/project/${nextProject.slug}`} className="text-blue-600 font-medium hover:underline flex items-center gap-1 group">
                        Next: {nextProject.metadata.title} <span className="group-hover:translate-x-2 transform ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg></span>
                    </Link>
                )}
            </div>

            {/* <div className="flex items-center justify-center my-8">
              <Link href={`/project/${prevProject?.slug}`} passHref>
                <span className={`mr-4 ${!prevProject ? 'hidden' : ''}`}>
                  <button className="p-2 border rounded-l">{"<"}</button>
                </span>
              </Link>
            
              <div className="flex items-center justify-center">
                <span className="p-2 border-t border-b">
                  {currentProjectIndex + 1} of {totalProjects}
                </span>
              </div>
              <Link href={`/project/${nextProject?.slug}`} passHref>
                <span className={`ml-4 ${!nextProject ? 'hidden' : ''}`}>
                  <button className="p-2 border rounded-r">{">"}</button>
                </span>
              </Link>
            </div> */}

        </section>
    )
}