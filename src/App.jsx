import { useState } from "react";
import PersonalDataForm from "./components/Personal.jsx";
import PersonalDataDisplay from "./components/PersonalDisplay.jsx";
import "./App.css";

function App() {
  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [personalForm, setPersonalForm] = useState(personalData);
  return (
    <>
      <PersonalDataForm
        personalData={personalData}
        setPersonalData={setPersonalData}
        personalForm={personalForm}
        setPersonalForm={setPersonalForm}
      />
      <PersonalDataDisplay personalForm={personalForm} />
    </>
  );
}

export default App;
