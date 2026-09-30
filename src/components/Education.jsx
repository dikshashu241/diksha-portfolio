const Education = () => {
  const education = [
    {
      year: "2022 - 2025",
      title: "Bachelor of Computer Applications (BCA)",
      institute: "Govt. Nagarjuna Science College, Raipur",
      detail: "Percentage: 65%",
    },
    {
      year: "2022",
      title: "Higher Secondary (12th)",
      institute: "Chhattisgarh Board",
      detail: "Percentage: 94%",
    },
    {
      year: "2020",
      title: "Secondary (10th)",
      institute: "Chhattisgarh Board",
      detail: "Percentage: 85%",
    },
  ];

  return (
    <section className="education section" id="education">
      <div className="section-container">
        <div className="section-heading">
          <p>My Academic Journey</p>
          <h2>Education & Certification</h2>
        </div>

        <div className="education-content">
          <div className="education-list">
            {education.map((item) => (
              <div className="education-card" key={item.title}>
                <span className="education-year">{item.year}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.institute}</p>
                  <small>{item.detail}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="certificate-card">
            <span className="certificate-icon">🏆</span>
            <h3>Full Stack Development</h3>
            <p>
              Certified in Full Stack Development with hands-on experience
              in frontend and backend web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;