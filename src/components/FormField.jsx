import React from "react";
import NestedSection from "./NestedSection";

const FormField = ({ field, value, onChange }) => {
  if (field.type === "section") {
    return <NestedSection section={field} value={value || {}} onChange={onChange} />;
  }

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold">{field.label}</label>
      {field.type === "text" || field.type === "email" ? (
        <input
          type={field.type}
          value={value || ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          required={field.required}
          className="border px-3 py-2 w-full rounded"
        />
      ) : field.type === "select" ? (
        <select
          value={value || ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          className="border px-3 py-2 w-full rounded"
          required={field.required}
        >
          <option value="">Select</option>
          {field.options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : field.type === "checkbox" ? (
        <input
          type="checkbox"
          checked={value || false}
          onChange={(e) => onChange(field.name, e.target.checked)}
          className="ml-2"
        />
      ) : null}
    </div>
  );
};

export default FormField;
