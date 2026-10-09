import Image from 'next/image';
import projects from '@/lib/projects.json';

export default function Projects() {
  return (
    <section id="projects" className="projects-section container" aria-labelledby="projects-title">
      <div className="section-heading">
        <div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="projects-title">Ideas turned into websites<span className="accent">.</span></h2></div>
        <a className="text-link" href="https://github.com/Karthik6146?tab=repositories" target="_blank" rel="noopener noreferrer">All repositories ↗</a>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            {project.thumbnail ? (
              <div className="project-image"><Image src={project.thumbnail} alt={`${project.title} website preview`} width={800} height={500} sizes="(max-width: 767px) 100vw, 50vw" /></div>
            ) : (
              <div className={`project-preview ${project.preview}`}>
                <p className="preview-label">INTERFACE CONCEPT</p>
                <div className="workspace-concept" aria-hidden="true"><div className="workspace-sidebar">a<span>Overview</span><span>Projects</span><span>Tasks</span></div><div className="workspace-content"><span>Your workspace</span><strong>A little more clarity.</strong><div className="workspace-tiles"><span>Projects<b>Organize</b></span><span>Workflows<b>Connect</b></span></div><div className="workspace-line" /><div className="workspace-line short" /></div></div>
              </div>
            )}
            <div className="project-info">
              <p className="project-category">{project.category}{project.year && ` / ${project.year}`}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tags" aria-label={`${project.title} features and technologies`}>{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
              <div className="project-links">
                {project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} website`}>Visit website ↗</a> : <span className="demo-unavailable">Demo unavailable</span>}
                {project.code && <a href={project.code} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub`}>Source code ↗</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
