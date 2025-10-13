import App from "../App";

export default function SkillsDisplay({ skills }) {
  return (
    <>
      <h1>Skills:</h1>
      <ul>
        {skills.map((skill) => {
          return <li>{skill.skill}</li>;
        })}
      </ul>
    </>
  );
}
