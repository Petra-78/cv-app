import App from "../App";

export default function PersonalDataDisplay({ personalForm }) {
  return (
    <div>
      <h1>{personalForm.fullName}</h1>
      <p>{personalForm.email}</p>
      <p>{personalForm.phone}</p>
      <p>{personalForm.address}</p>
    </div>
  );
}
