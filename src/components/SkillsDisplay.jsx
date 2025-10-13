import "../styles/Skills.css";

export default function SkillsDisplay({ skills }) {
  return (
    <div className="skills">
      <h2 className="sectionTitle">Skills</h2>
      <ul>
        {skills.map((skill) => {
          return <li>{skill.skill}</li>;
        })}
      </ul>
    </div>
  );
}
