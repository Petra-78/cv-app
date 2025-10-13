import "../styles/Experience.css";

export default function ExperienceDisplay({ experiences }) {
  return (
    <div className="experience">
      <h2 className="sectionTitle">Experience</h2>
      {experiences.map((exp) => (
        <div key={exp.id}>
          <p>
            <strong>Company:</strong> {exp.companyName}
          </p>
          <p>
            <strong>Position:</strong> {exp.position}
          </p>
          <p>
            <strong>Years:</strong> {exp.startDate} - {exp.endDate}
          </p>
          <p>
            <strong>Describtion:</strong> {exp.describtion}
          </p>
        </div>
      ))}
    </div>
  );
}
