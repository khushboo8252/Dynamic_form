import React, { useState, useEffect } from "react";
import FormField from "./FormField";

const DynamicForm = ({ schema, onSubmit = (data) => console.log(data) }) => {
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null); // Store submitted data

  // Initialize formData state with default values
  useEffect(() => {
    if (schema?.fields) {
      const initialData = schema.fields.reduce((acc, field) => {
        acc[field.name] = field.defaultValue || ""; // Set default value if provided
        return acc;
      }, {});
      setFormData(initialData);
    }
  }, [schema]);

  // Handle field changes
  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Store form data to display it
    onSubmit(formData); // Log to console or send data elsewhere

    // Reset form fields to default values after submission
    const resetData = schema.fields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || ""; // Reset to default value or empty
      return acc;
    }, {});
    setFormData(resetData);
  };

  return (
    <div className="w-xl mx-auto bg-white shadow-xl rounded-lg p-10 mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {schema?.title || "Dynamic Form"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {schema?.fields?.map((field) => (
          <FormField 
            key={field.name} 
            field={field} 
            value={formData[field.name] || ""} 
            onChange={handleChange} 
          />
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>

      {/* Display Submitted Data */}
      {submittedData && (
        <div className="mt-8 p-6 bg-gray-100 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700">Submitted Data:</h3>
          <pre className="text-sm text-gray-800 bg-gray-200 p-3 rounded-md mt-2">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default DynamicForm;
