import "../styles/Education.css";

export default function EducationDisplay({ educations }) {
  return (
    <div className="educations">
      <h2 className="sectionTitle">Education</h2>
      {educations.map((edu) => (
        <div key={edu.id}>
          <p>
            {edu.startDate} - {edu.endDate}
          </p>
          <p>
            <strong>{edu.schoolName}</strong>
          </p>
          <p>{edu.location}</p>
          <p>{edu.degree}</p>
        </div>
      ))}
    </div>
  );
}
