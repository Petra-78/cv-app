export default function EducationDisplay({ educations }) {
  return (
    <div>
      {educations.map((edu) => (
        <div key={edu.id}>
          <p>
            <strong>School:</strong> {edu.schoolName}
          </p>
          <p>
            <strong>Degree:</strong> {edu.degree}
          </p>
          <p>
            <strong>Years:</strong> {edu.startDate} - {edu.endDate}
          </p>
          <p>
            <strong>Location:</strong> {edu.location}
          </p>
        </div>
      ))}
    </div>
  );
}
