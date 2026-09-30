const Projects = () => {
  const projects = [
    {
      title: "HireHub",
      category: "MERN Stack Job Portal",
      description:
        "A full-stack job portal with separate workflows for jobseekers and recruiters, including authentication, job management, applications and applicant status tracking.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      live: "https://hirehub-frontend-aa16.onrender.com",
      github: "https://github.com/dikshashu241/hirehub-frontend",
    },
    {
      title: "TaskFlow",
      category: "MERN Stack Task Management",
      description:
        "A task management application with user authentication, protected routes, task CRUD operations, priority management and separate pending and completed task views.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      live: "https://taskflow-gnut.onrender.com",
      github: "https://github.com/dikshashu241/taskflow",
    },
    {
      title: "Raipur Cart",
      category: "E-Commerce Web Application",
      description:
        "A responsive e-commerce web application with product management and database-driven functionality using PHP and MySQL.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      live: "#",
      github: "https://github.com/dikshashu241",
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="section-container">
        <div className="section-heading">
          <p>My Recent Work</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-content">
                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn primary-btn"
                    >
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn secondary-btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;