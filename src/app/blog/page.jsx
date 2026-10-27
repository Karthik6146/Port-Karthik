import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/format';

export const metadata = {
  title: 'Blog',
  description: 'Notes on frontend development, design, and things I am learning.',
};

export default async function Blog() {
  let posts = [];
  try {
    posts = await getAllPosts();
  } catch (error) {
    console.error('Error loading posts:', error);
  }

  return (
    <section className="page-section container" aria-labelledby="blog-title">
      <p className="eyebrow">WRITING</p>
      <h1 id="blog-title" className="page-title">Notes &amp; experiments<span className="accent">.</span></h1>
      <p className="page-lead">Short write-ups on frontend development, design, and what I’m learning along the way.</p>
      {posts.length === 0 ? (
        <p className="page-lead">No posts yet. Check back soon.</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="post-link">
                {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
                <h2>{post.title}</h2>
                {post.excerpt && <p>{post.excerpt}</p>}
                <span className="post-more">Read post <span aria-hidden="true">→</span></span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
