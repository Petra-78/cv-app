import { useState } from "react";
import App from "../App";
import downArrow from "../assets/down-arrow.png";

function EducationForm({ education, setEducations }) {
  const [isOpen, setIsOpen] = useState(true);
  const [savedData, setSavedData] = useState(education);

  const handleSave = (e) => {
    e.preventDefault();

    setSavedData(education);
    setIsOpen(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setEducations(savedData);
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <h3>{education.schoolName || "New education"}</h3>
        <img
          className={`arrow ${isOpen ? "rotated" : ""}`}
          src={downArrow}
          alt="down arrow"
        />
      </div>
      {isOpen && (
        <form action="get">
          <label htmlFor="schoolName">School Name</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={education.schoolName}
            onChange={(e) =>
              setEducations({ ...education, schoolName: e.target.value })
            }
          />

          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            value={education.degree}
            onChange={(e) =>
              setEducations({ ...education, degree: e.target.value })
            }
          />

          <label htmlFor="startDate">Start</label>
          <input
            type="number"
            name="startDate"
            id="startDate"
            value={education.startDate}
            onChange={(e) =>
              setEducations({ ...education, startDate: e.target.value })
            }
          />

          <label htmlFor="endDate">End</label>
          <input
            type="number"
            name="endDate"
            id="endDate"
            value={education.endDate}
            onChange={(e) =>
              setEducations({ ...education, endDate: e.target.value })
            }
          />
          <label htmlFor="location">location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={education.location}
            onChange={(e) =>
              setEducations({ ...education, location: e.target.value })
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

export default function EducationDropdown({ educations, setEducations }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddEducation = () => {
    setEducations([
      ...educations,
      {
        id: crypto.randomUUID(),
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ]);
  };

  const updateEducation = (id, updatedEdu) => {
    const newList = educations.map((edu) => (edu.id === id ? updatedEdu : edu));
    setEducations(newList);
  };

  return (
    <div>
      <div className="dropdownHeader" onClick={() => setIsOpen(!isOpen)}>
        <h2>Educations</h2>
        <img
          className={`arrow ${isOpen ? "rotated" : ""}`}
          src={downArrow}
          alt="down arrow"
        />
      </div>
      {isOpen && (
        <div>
          {educations.map((edu) => (
            <EducationForm
              key={edu.id}
              education={edu}
              setEducations={(updatedEdu) => {
                updateEducation(edu.id, updatedEdu);
              }}
            />
          ))}

          <button onClick={handleAddEducation}>+ Add education</button>
        </div>
      )}
    </div>
  );
}
