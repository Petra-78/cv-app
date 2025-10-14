import "../styles/Personal.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function PersonalDataDisplay({ personalForm }) {
  return (
    <>
      <div className="personalDetails">
        <h2>{personalForm.fullName}</h2>
        <p>
          {personalForm.email && (
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
          )}
          {personalForm.email}
        </p>
        <p>
          {personalForm.phone && (
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "8px" }} />
          )}
          {personalForm.phone}
        </p>
        <p>
          {personalForm.address && (
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ marginRight: "8px" }}
            />
          )}
          {personalForm.address}
        </p>
      </div>
      <div className="introduction">
        <h2 className="sectionTitle">Introduction</h2>
        <p className="introduction">{personalForm.introduction}</p>
      </div>
    </>
  );
}
