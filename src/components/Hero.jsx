const Hero = () => {
const scrollToProjects = () => {
document.getElementById("projects")?.scrollIntoView({
behavior: "smooth",
});
};

return ( <section className="hero" id="home"> <div className="hero-container"> <div className="hero-content"> <p className="hero-greeting">Hello, I'm</p>

```
      <h1>
        Diksha Sahu
      </h1>

      <h2>Full Stack Web Developer</h2>

      <p className="hero-description">
        I build responsive and user-friendly web applications
        using modern technologies like React.js, Node.js,
        Express.js and MongoDB.
      </p>

      <div className="hero-buttons">
        <button
          className="primary-btn"
          onClick={scrollToProjects}
        >
          View My Work
        </button>

        <a
          href="mailto:dikshashu241@gmail.com"
          className="secondary-btn"
        >
          Contact Me
        </a>
      </div>

      <div className="hero-socials">
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
      </div>
    </div>

    <div className="hero-card">
      <div className="hero-card-inner">
        <span>&lt;/&gt;</span>
        <p>MERN Stack</p>
        <small>Building ideas into web applications.</small>
      </div>
    </div>
  </div>
</section>


);
};

export default Hero;
