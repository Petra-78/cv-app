import { useState } from "react";
import PersonalDataForm from "./components/Personal.jsx";
import PersonalDataDisplay from "./components/PersonalDisplay.jsx";
import "./App.css";
import EducationDropdown from "./components/Education.jsx";

function App() {
  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [personalForm, setPersonalForm] = useState(personalData);

  const [educationData, setEducationData] = useState({
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  const [educationForm, setEducationForm] = useState(educationData);
  return (
    <>
      <PersonalDataForm
        personalData={personalData}
        setPersonalData={setPersonalData}
        personalForm={personalForm}
        setPersonalForm={setPersonalForm}
      />
      <PersonalDataDisplay personalForm={personalForm} />
      <EducationDropdown />
    </>
  );
}

export default App;
