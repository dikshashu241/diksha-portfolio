const About = () => {
  return (
    <section className="about section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <p>Get To Know Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Full Stack Web Developer</h3>

            <p>
              I am a BCA graduate and a passionate Full Stack Web Developer
              with hands-on experience in building web applications using
              modern technologies.
            </p>

            <p>
              I enjoy working with React.js, Node.js, Express.js and MongoDB
              to create responsive, user-friendly and functional web
              applications.
            </p>

            <p>
              I am currently looking for an opportunity where I can apply my
              skills, learn new technologies and grow as a professional
              developer.
            </p>
          </div>

          <div className="about-info">
            <div className="info-card">
              <span>🎓</span>
              <div>
                <h4>Education</h4>
                <p>BCA — 2025</p>
              </div>
            </div>

            <div className="info-card">
              <span>💻</span>
              <div>
                <h4>Specialization</h4>
                <p>MERN Stack Development</p>
              </div>
            </div>

            <div className="info-card">
              <span>🚀</span>
              <div>
                <h4>Career Goal</h4>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;