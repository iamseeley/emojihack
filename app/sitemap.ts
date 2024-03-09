import { getProjects } from "@/app/utils/project"

export default async function sitemap() {
  let projects = getProjects().map((project) => ({
    url: `https://emojihack.com/project/${project.slug}`,
    lastModified: project.metadata.publishedAt,
  }));

  let routes = ['', '/info'].map((route) => ({
    url: `https://leerob.io${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...projects];
}