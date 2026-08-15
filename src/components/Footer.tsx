import "./Footer.css"

export function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-links">
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <p className="footer-copyright">© {new Date().getFullYear()} Skillpath. All rights reserved.</p>
    </footer>
  )
}
