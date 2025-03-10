export const formSchema = {
    title: "Dynamic Form",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      {
        name: "gender",
        label: "Gender",
        type: "select",
        options: ["Male", "Female", "Other"],
        required: true,
      },
      { name: "subscribe", label: "Subscribe to Newsletter", type: "checkbox" },
      {
        name: "education",
        label: "Education",
        type: "section",
        fields: [
          { name: "degree", label: "Degree", type: "text", required: true },
          { name: "university", label: "University", type: "text", required: true },
        ],
      },
    ],
  };
  