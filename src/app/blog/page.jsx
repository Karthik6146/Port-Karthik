import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function Blog() {
  let posts = [];
  try {
    posts = await getAllPosts();
  } catch (error) {
    console.error('Error loading posts:', error);
  }

  return (
    <div className="container py-12">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-gray-600">No posts available yet. Check back soon!</p>
      ) : (
        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <a
                href={`/blog/${post.slug}`}
                className="block transition-colors hover:text-blue-600"
              >
                <h2 className="mb-2 text-2xl font-semibold">{post.title}</h2>
                <div className="text-gray-600">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                {post.excerpt && (
                  <p className="mt-2 text-gray-600">{post.excerpt}</p>
                )}
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
