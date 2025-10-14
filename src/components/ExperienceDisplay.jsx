import "../styles/Experience.css";

export default function ExperienceDisplay({ experiences }) {
  return (
    <div className="experience">
      <h2 className="sectionTitle">Experience</h2>
      {experiences.map((exp) => (
        <div key={exp.id}>
          <p>
            <strong>{exp.companyName}</strong>
          </p>
          <p>{exp.position}</p>
          <p>
            {exp.startDate} - {exp.endDate}
          </p>
          <p>{exp.describtion}</p>
        </div>
      ))}
    </div>
  );
}
