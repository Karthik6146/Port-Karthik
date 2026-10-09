import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <section id="contact" className="contact-section container" aria-labelledby="contact-title">
        <p className="eyebrow">03 / GET IN TOUCH</p>
        <div className="contact-inner"><div><h2 id="contact-title">Have something in mind?</h2><p>A project, an opportunity, or just a hello. Let’s connect.</p></div><a className="button button-primary" href="https://www.linkedin.com/in/karthik-shakyawar-8a0b35243/" target="_blank" rel="noopener noreferrer">Let’s talk on LinkedIn ↗</a></div>
      </section>
    </>
  );
}
