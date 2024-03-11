import fs from 'fs';
import path from 'path';
import emojihack from '../../emojihack.json'

type Metadata = {
  title: string;
  emoji: string;
  publishedAt: string;
  description?: string;
  origin?: string;
  source: string;
  tech?: any;
  image?: string;
  name?: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, '').trim();
  let frontMatterLines = frontMatterBlock.trim().split('\n');
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();

    if (key.trim() === 'tech') {
      metadata[key.trim() as keyof Metadata] = value.split(", ").map(item => item.trim());
  } else {
      metadata[key.trim() as keyof Metadata] = value;
  }
  });

  return { metadata: metadata as Metadata, content };
}

  

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}


function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getProjects() {
  return getMDXData(path.join(process.cwd(), 'content'));
}