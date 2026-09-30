const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Diksha<span>.</span></h3>
          <p>Full Stack Web Developer</p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/dikshashu241"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/diksha-sahu-1a431b3b9"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:dikshashu241@gmail.com">
            Email
          </a>
        </div>

        <p className="footer-copy">
          © {currentYear} Diksha Sahu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;