const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="section-container">
        <div className="section-heading">
          <p>Let's Connect</p>
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together</h3>

            <p>
              I'm currently looking for opportunities as a Full Stack
              Developer. If you have a project, opportunity or just want
              to connect, feel free to reach out.
            </p>

            <div className="contact-links">
              <a href="mailto:dikshashu241@gmail.com">
                📧 dikshashu241@gmail.com
              </a>

              <a
                href="https://github.com/dikshashu241"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/diksha-sahu-1a431b3b9"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />

            <textarea
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;