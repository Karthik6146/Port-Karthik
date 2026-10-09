const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Bootstrap'] },
  { category: 'Design', items: ['Figma', 'Penpot', 'Responsive design', 'Adobe Photoshop'] },
  { category: 'Tools & workflow', items: ['Git', 'GitHub', 'WordPress', 'Bitbucket'] },
];

export default function Skills() {
  return (
    <section id="about" className="about-section container" aria-labelledby="about-title">
      <div className="about-copy">
        <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
        <h2 id="about-title">Curious by nature.<br />Developer by practice<span className="accent">.</span></h2>
        <p>I enjoy the space where design meets code. From brand websites to learning tools, I like making things that are useful, readable, and comfortable to use.</p>
        <p>My foundation is frontend development. Along the way, I’m exploring AI tools and ethical hacking, and learning by building.</p>
        <a className="text-link" href="https://www.linkedin.com/in/karthik-shakyawar-8a0b35243/" target="_blank" rel="noopener noreferrer">Find me on LinkedIn ↗</a>
      </div>
      <div className="skill-groups">{skills.map((skill) => (
        <div className="skill-group" key={skill.category}><h3>{skill.category}</h3><ul className="tags">{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
      ))}</div>
    </section>
  );
}
