import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'src/posts');

// Splits "---\nkey: value\n---\nbody" into metadata and body. Only the first two
// delimiters count, so a "---" inside the post body is kept as content.
export function parsePost(fileContents) {
  const match = fileContents.replace(/^﻿/, '').match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { metadata: {}, content: fileContents.trim() };

  const metadata = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':');
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^["']|["']$/g, '');
    if (!key) continue;
    metadata[key] = key === 'tags'
      ? value.replace(/[[\]]/g, '').split(',').map((tag) => tag.trim()).filter(Boolean)
      : value;
  }
  return { metadata, content: match[2].trim() };
}

export async function getAllPosts() {
  return fs.readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => ({
      slug: filename.replace(/\.mdx$/, ''),
      ...parsePost(fs.readFileSync(path.join(postsDirectory, filename), 'utf8')).metadata,
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  // Slugs come from the URL; reject anything that could escape the posts folder.
  if (!/^[\w-]+$/.test(slug)) return null;
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const { metadata, content } = parsePost(fs.readFileSync(filePath, 'utf8'));
  return { slug, ...metadata, content };
}
