import { useState } from "react";
import PersonalDataForm from "./components/Personal.jsx";
import PersonalDataDisplay from "./components/PersonalDisplay.jsx";
import EducationDropdown from "./components/Education.jsx";
import EducationDisplay from "./components/EducationDisplay.jsx";
import ExperienceDropdown from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import SkillsDisplay from "./components/SkillsDisplay.jsx";
import PrevievButtons from "./components/PreviewButtons.jsx";
import "./App.css";

import ExperienceDisplay from "./components/ExperienceDisplay.jsx";

function App() {
  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [personalForm, setPersonalForm] = useState(personalData);

  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const [skills, setSkills] = useState([]);

  return (
    <div className="main">
      <div className="previewButtons">
        <PrevievButtons
          setPersonalForm={setPersonalForm}
          setEducations={setEducations}
          setExperiences={setExperiences}
          setSkills={setSkills}
        />
      </div>
      <div className="forms">
        <PersonalDataForm
          personalData={personalData}
          setPersonalData={setPersonalData}
          personalForm={personalForm}
          setPersonalForm={setPersonalForm}
        />

        <EducationDropdown
          educations={educations}
          setEducations={setEducations}
        />
        <ExperienceDropdown
          experiences={experiences}
          setExperiences={setExperiences}
        />
        <Skills skills={skills} setSkills={setSkills} />
      </div>
      <div className="preview">
        <PersonalDataDisplay personalForm={personalForm} />
        <SkillsDisplay skills={skills} />
        <EducationDisplay educations={educations} />
        <ExperienceDisplay experiences={experiences} />
      </div>
    </div>
  );
}

export default App;
