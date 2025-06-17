import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import MDXContent from '@/components/MDXContent';
import { serialize } from 'next-mdx-remote/serialize';

// Generate static params for all posts
export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const { slug } = params;
  
  try {
    const post = await getPostBySlug(slug);

    if (!post) {
      return {
        title: 'Post Not Found',
      };
    }

    return {
      title: post.title,
      description: post.excerpt || post.title,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error Loading Post',
    };
  }
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  
  try {
    const post = await getPostBySlug(slug);

    if (!post) {
      notFound();
    }

    // Serialize the MDX content
    const serializedContent = await serialize(post.content);

    return (
      <article className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
          <div className="text-gray-600">
            Published on:{' '}
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          {/* <div className="mt-4 flex gap-2">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div> */}
        </header>

        <MDXContent content={serializedContent} />
      </article>
    );
  } catch (error) {
    console.error('Error loading post:', error);
    notFound();
  }
}
