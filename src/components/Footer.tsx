import { theme } from "@/lib/theme"

export function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-links">
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <p className="footer-copyright">© {new Date().getFullYear()} Skillpath. All rights reserved.</p>
      <style>{`
        .footer {
          background: ${theme.background};
          border-top: 1px solid ${theme.border};
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .footer-links {
          display: flex;
          gap: 24px;
        }
        .footer-links a {
          color: ${theme.textMuted};
          text-decoration: none;
          font-size: 14px;
        }
        .footer-links a:hover {
          color: ${theme.accent};
        }
        .footer-copyright {
          margin: 0;
          color: ${theme.textMuted};
          font-size: 13px;
        }
      `}</style>
    </footer>
  )
}
