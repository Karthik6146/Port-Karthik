// Typography comes from the `prose` wrapper in MDXContent; only links need extra handling.
export const MDXComponents = {
  a: ({ href = '', ...props }) => (href.startsWith('http')
    ? <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    : <a href={href} {...props} />),
};
