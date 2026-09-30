const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "PHP", "REST APIs"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose", "MySQL"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Thunder Client", "JWT"],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <p>What I Work With</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;