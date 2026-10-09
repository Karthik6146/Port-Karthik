import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="intro-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> DEVELOPER & CREATIVE THINKER</p>
        <h1 id="intro-title">Hi, I’m Karthik.<br /><span>I build for the web.</span></h1>
        <p className="hero-description">I’m Karthik Shakyawar, a frontend developer turning ideas into thoughtful, easy-to-use websites. I work with React, Next.js, and a curiosity for what’s next.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↘</span></a>
          <a className="text-link" href="https://github.com/Karthik6146" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
        <p className="hero-note">Thoughtful interfaces. Practical code. Always learning.</p>
      </div>
      <figure className="portrait">
        <Image src="/Site portfolio pic.png" width={605} height={721} alt="Karthik Shakyawar" priority sizes="(max-width: 767px) 260px, 320px" />
        <figcaption><span className="status-dot" /> A little design. A lot of curiosity.</figcaption>
      </figure>
    </section>
  );
}
