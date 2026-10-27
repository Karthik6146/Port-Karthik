import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/format';
import MDXContent from '@/components/MDXContent';

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return post
    ? { title: post.title, description: post.excerpt || post.title }
    : { title: 'Post Not Found' };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="page-section container post">
      <Link href="/blog" className="text-link">← All posts</Link>
      <header className="post-header">
        {post.date && <p className="eyebrow"><time dateTime={post.date}>{formatDate(post.date)}</time></p>}
        <h1 className="page-title">{post.title}</h1>
        {post.excerpt && <p className="page-lead">{post.excerpt}</p>}
      </header>
      <MDXContent content={post.content} />
    </article>
  );
}
