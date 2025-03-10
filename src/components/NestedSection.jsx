import React from "react";
import FormField from "./FormField";

const NestedSection = ({ section, value, onChange }) => {
  const handleSectionChange = (name, val) => {
    onChange(section.name, { ...value, [name]: val });
  };

  return (
    <div className="p-4 border rounded-lg mt-4">
      <h3 className="font-semibold mb-2">{section.label}</h3>
      {section.fields.map((field) => (
        <FormField key={field.name} field={field} value={value?.[field.name]} onChange={handleSectionChange} />
      ))}
    </div>
  );
};

export default NestedSection;
