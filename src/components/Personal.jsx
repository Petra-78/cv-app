import { useState } from "react";
import downArrow from "../assets/down-arrow.png";

export default function PersonalDataForm({
  personalData,
  setPersonalData,
  personalForm,
  setPersonalForm,
}) {
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonalData({ ...personalForm });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setPersonalForm({ ...personalData });
  };

  return (
    <div className="dropdown">
      <div className="dropdownHeader" onClick={() => setIsOpen(!isOpen)}>
        <h2>Personal details</h2>
        <img
          className={`arrow ${isOpen ? "rotated" : ""}`}
          src={downArrow}
          alt="down arrow"
        />
      </div>
      {isOpen && (
        <div className="formContainer">
          <form action="get">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={personalForm.fullName}
              onChange={(e) =>
                setPersonalForm({ ...personalForm, fullName: e.target.value })
              }
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={personalForm.email}
              onChange={(e) =>
                setPersonalForm({ ...personalForm, email: e.target.value })
              }
            />

            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={personalForm.phone}
              onChange={(e) =>
                setPersonalForm({ ...personalForm, phone: e.target.value })
              }
            />

            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={personalForm.address}
              onChange={(e) =>
                setPersonalForm({ ...personalForm, address: e.target.value })
              }
            />

            <label htmlFor="introduction">Introduction</label>
            <textarea
              type="text"
              name="introduction"
              id="addintroductionress"
              value={personalForm.introduction}
              onChange={(e) =>
                setPersonalForm({
                  ...personalForm,
                  introduction: e.target.value,
                })
              }
            />

            <div className="buttons">
              <button
                onClick={(e) => {
                  setIsOpen(!isOpen);
                  handleCancel(e);
                }}
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  setIsOpen(!isOpen);
                  handleSubmit(e);
                }}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
