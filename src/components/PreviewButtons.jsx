export default function PrevievButtons({
  setPersonalForm,
  setEducations,
  setExperiences,
  setSkills,
}) {
  const handlePreviewClear = (e) => {
    e.preventDefault();
    setPersonalForm({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      introduction: "",
    });
    setEducations([
      {
        id: crypto.randomUUID(),
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ]);
    setExperiences([
      {
        id: crypto.randomUUID(),
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        describtion: "",
      },
    ]);
    setSkills([]);
  };
  const handlePreviewFill = (e) => {
    e.preventDefault();
    handlePreviewClear;
    setPersonalForm({
      fullName: "Emily Carter",
      email: "emily.carter@example.com",
      phone: "+44 7123 456 789",
      address: "London, United Kingdom",
      introduction:
        "Creative and detail-oriented Front-End Developer with 3+ years of experience building responsive websites and web apps using React, JavaScript, and modern CSS frameworks. Passionate about clean code, usability, and pixel-perfect design.",
    });
    setEducations([
      {
        id: crypto.randomUUID(),
        schoolName: "University of Manchester",
        degree: "BSc Computer Science",
        startDate: "2017",
        endDate: "2020",
        location: "Manchester",
      },
      {
        id: crypto.randomUUID(),
        schoolName: "Code Institute",
        degree: "MSc Software Engineering",
        startDate: "2021",
        endDate: "2022",
        location: "Boston",
      },
    ]);
    setExperiences([
      {
        id: crypto.randomUUID(),
        companyName: "BrightPixel Studio",
        position: "Front-End Developer",
        startDate: "2022",
        endDate: "2025",
        describtion:
          "Developed and maintained responsive websites and landing pages for small businesses. Collaborated with designers to implement Figma mockups using React and Tailwind CSS.",
      },
      {
        id: crypto.randomUUID(),
        companyName: "Freelance",
        position: "Web Designer & Developer",
        startDate: "2020",
        endDate: "2022",
        describtion:
          "Designed and built custom WordPress websites for clients in the creative and retail sectors. Focused on usability, SEO, and fast load times.",
      },
    ]);
    setSkills([
      { id: crypto.randomUUID(), skill: "React.js" },
      { id: crypto.randomUUID(), skill: "Javascrips" },
      { id: crypto.randomUUID(), skill: "HTML" },
      { id: crypto.randomUUID(), skill: "CSS" },
      { id: crypto.randomUUID(), skill: "Node.js" },
    ]);
  };

  return (
    <>
      <button className="clearPreviev" onClick={handlePreviewClear}>
        Clear preview
      </button>
      <button className="fillPreview" onClick={handlePreviewFill}>
        Fill example
      </button>
    </>
  );
}
