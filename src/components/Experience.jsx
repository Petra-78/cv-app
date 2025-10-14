import { useState } from "react";
import App from "../App";
import downArrow from "../assets/down-arrow.png";

function ExperienceForm({ experience, setExperiences, handleDelete }) {
  const [isOpen, setIsOpen] = useState(true);
  const [savedData, setSavedData] = useState(experience);

  const handleSave = (e) => {
    e.preventDefault();

    setSavedData(experience);
    setIsOpen(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setExperiences(savedData);
    setIsOpen(false);
  };

  return (
    <>
      <div className="innerDropdown" onClick={() => setIsOpen(!isOpen)}>
        <h3>{experience.companyName || "New experience"}</h3>
        <button onClick={handleDelete}>Delete</button>
        <img
          className={`arrow ${isOpen ? "rotated" : ""}`}
          src={downArrow}
          alt="down arrow"
        />
      </div>
      {isOpen && (
        <form action="get">
          <label htmlFor="companyName">Company name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={experience.companyName}
            onChange={(e) =>
              setExperiences({ ...experience, companyName: e.target.value })
            }
          />

          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            id="position"
            value={experience.position}
            onChange={(e) =>
              setExperiences({ ...experience, position: e.target.value })
            }
          />

          <label htmlFor="startDate">Start</label>
          <input
            type="number"
            name="startDate"
            id="startDate"
            value={experience.startDate}
            onChange={(e) =>
              setExperiences({ ...experience, startDate: e.target.value })
            }
          />

          <label htmlFor="endDate">End</label>
          <input
            type="number"
            name="endDate"
            id="endDate"
            value={experience.endDate}
            onChange={(e) =>
              setExperiences({ ...experience, endDate: e.target.value })
            }
          />
          <label htmlFor="describtion">Describtion</label>
          <textarea
            type="text"
            name="describtion"
            id="describtion"
            value={experience.describtion}
            onChange={(e) =>
              setExperiences({ ...experience, describtion: e.target.value })
            }
          />

          <div className="buttons">
            <button onClick={(e) => handleCancel(e)}> Cancel</button>
            <button onClick={(e) => handleSave(e)}>Save</button>
          </div>
        </form>
      )}
    </>
  );
}

export default function EducationDropdown({ experiences, setExperiences }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddEducation = () => {
    setExperiences([
      ...experiences,
      {
        id: crypto.randomUUID(),
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        describtion: "",
      },
    ]);
  };

  const updateEducation = (id, updatedExp) => {
    const newList = experiences.map((exp) =>
      exp.id === id ? updatedExp : exp
    );
    setExperiences(newList);
  };

  const handleDelete = (id) => {
    const newList = experiences.filter((exp) => exp.id !== id);
    setExperiences(newList);
  };

  return (
    <div className="dropdown">
      <div className="dropdownHeader" onClick={() => setIsOpen(!isOpen)}>
        <h2>Experiences</h2>
        <img
          className={`arrow ${isOpen ? "rotated" : ""}`}
          src={downArrow}
          alt="down arrow"
        />
      </div>
      {isOpen && (
        <div className="formContainer">
          {experiences.map((exp) => (
            <ExperienceForm
              key={exp.id}
              experience={exp}
              setExperiences={(updatedExp) => {
                updateEducation(exp.id, updatedExp);
              }}
              handleDelete={() => handleDelete(exp.id)}
            />
          ))}

          <button onClick={handleAddEducation}>+ Add experience</button>
        </div>
      )}
    </div>
  );
}
