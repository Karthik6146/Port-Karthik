import Link from 'next/link';

import ThemeToggle from '@/components/ThemeToggle';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="Karthik Shakyawar home">karthik<span>.</span></Link>
        <nav aria-label="Main navigation">
          <Link href="/#projects">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#contact" className="nav-contact">Let’s talk <span aria-hidden="true">↗</span></Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
