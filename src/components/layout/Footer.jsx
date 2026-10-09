export default function Footer() {
  return (
    <footer className="site-footer container">
      <p>© {new Date().getFullYear()} Karthik Shakyawar</p>
      <div>
        <a href="https://github.com/Karthik6146" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/karthik-shakyawar-8a0b35243/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a href="https://x.com/5Shakyawar" target="_blank" rel="noopener noreferrer">X ↗</a>
      </div>
      <a href="#main-content">Back to top ↑</a>
    </footer>
  );
}
