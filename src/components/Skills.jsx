import { useState } from "react";
import downArrow from "../assets/down-arrow.png";

export default function Skills({ skills, setSkills }) {
  const [isOpen, setIsOpen] = useState(false);

  const addSkill = () => {
    setSkills([...skills, { id: crypto.randomUUID(), skill: "" }]);
  };

  const updateSkill = (id, value) => {
    setSkills((prevSkills) =>
      prevSkills.map((s) => (s.id === id ? { ...s, skill: value } : s))
    );
  };

  const deleteSkill = (id) => {
    setSkills((prevSkills) => prevSkills.filter((s) => s.id !== id));
  };

  return (
    <div className="dropdown">
      <div className="dropdownHeader" onClick={() => setIsOpen(!isOpen)}>
        <h2>Skills</h2>
        <img
          className={`arrow ${isOpen ? "rotated" : ""}`}
          src={downArrow}
          alt="down arrow"
        />
      </div>

      {isOpen && (
        <div className="formContainer">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-item">
              <input
                type="text"
                placeholder="Skill"
                value={skill.skill}
                onChange={(e) => updateSkill(skill.id, e.target.value)}
              />
              <button onClick={() => deleteSkill(skill.id)}>Delete</button>
            </div>
          ))}
          <button onClick={addSkill}>+ Add skills</button>
        </div>
      )}
    </div>
  );
}
