import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from './MDXComponents';

export default function MDXContent({ content }) {
  if (!content) return null;
  
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={content} components={MDXComponents} />
    </div>
  );
}
