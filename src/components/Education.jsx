import { useState } from "react";
import downArrow from "../assets/down-arrow.png";

function EducationForm({ educationData, setEducationData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [educationForm, setEducationForm] = useState(educationData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducationData({ ...educationForm });
    setIsOpen(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setEducationForm({ ...educationData });
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div onClick={() => setIsOpen(!isOpen)}>
        <h3>{educationForm.schoolName || "New education"}</h3>
        <img
          className={`arrow ${isOpen ? "rotated" : ""}`}
          src={downArrow}
          alt="down arrow"
        />
      </div>

      {isOpen && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="schoolName">School name</label>
          <input
            type="text"
            id="schoolName"
            value={educationForm.schoolName}
            onChange={(e) =>
              setEducationForm({
                ...educationForm,
                schoolName: e.target.value,
              })
            }
          />

          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            value={educationForm.degree}
            onChange={(e) =>
              setEducationForm({
                ...educationForm,
                degree: e.target.value,
              })
            }
          />

          <div className="dates">
            <label htmlFor="startDate">Start date</label>
            <input
              type="number"
              id="startDate"
              value={educationForm.startDate}
              onChange={(e) =>
                setEducationForm({
                  ...educationForm,
                  startDate: e.target.value,
                })
              }
            />

            <label htmlFor="endDate">End date</label>
            <input
              type="number"
              id="endDate"
              value={educationForm.endDate}
              onChange={(e) =>
                setEducationForm({
                  ...educationForm,
                  endDate: e.target.value,
                })
              }
            />
          </div>

          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={educationForm.location}
            onChange={(e) =>
              setEducationForm({
                ...educationForm,
                location: e.target.value,
              })
            }
          />

          <div className="buttons">
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function EducationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [educations, setEducations] = useState([]);

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

  const handleUpdateEducation = (id, updatedEducation) => {
    const updatedList = educations.map((edu) =>
      edu.id === id ? updatedEducation : edu
    );
    setEducations(updatedList);
  };

  return (
    <div className="dropdown">
      <div onClick={() => setIsOpen(!isOpen)}>
        <h2>Education</h2>
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
              educationData={edu}
              setEducationData={(updatedEdu) =>
                handleUpdateEducation(edu.id, updatedEdu)
              }
            />
          ))}
          <button onClick={handleAddEducation}>+ Add education</button>
        </div>
      )}
    </div>
  );
}
