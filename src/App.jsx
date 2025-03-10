import React from "react";
import DynamicForm from "./components/DynamicForm";
import { formSchema } from "./data/formSchema";

const App = () => {
  const handleFormSubmit = (data) => {
    console.log("Form Submitted Data:", data);
    alert("Check console for form data!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <DynamicForm schema={formSchema} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
