import App from "../App";
import "../styles/Personal.css";

export default function PersonalDataDisplay({ personalForm }) {
  return (
    <>
      <div className="personalDetails">
        <h2>{personalForm.fullName}</h2>
        <p>{personalForm.email}</p>
        <p>{personalForm.phone}</p>
        <p>{personalForm.address}</p>
      </div>
      <div className="introduction">
        <h2>Introduction</h2>
        <p className="introduction">{personalForm.introduction}</p>
      </div>
    </>
  );
}
