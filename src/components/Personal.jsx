import { useState } from "react";
import downArrow from "../assets/down-arrow.png";

export default function PersonalDataForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div onClick={() => setIsOpen(!isOpen)}>
        <h2>Personal details</h2>
        <img
          className={`arrow ${isOpen ? "rotated" : ""}`}
          src={downArrow}
          alt=""
        />
      </div>
      {isOpen && (
        <div>
          <form action="get">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />

            <div className="buttons">
              <button type="submit" onClick={() => setIsOpen(!isOpen)}>
                Cancel
              </button>
              <button type="submit" onClick={() => setIsOpen(!isOpen)}>
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
