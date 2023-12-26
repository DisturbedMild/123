import { useState } from "react";
import SelectBar from "./components/SelectBar/SelectBar";
import Fields from "./components/Fields/Fields";
import './App.css'
import FieldModeContext from "./context/field-mode-context";

function App() {
  const [fields, setFields] = useState({ fieldsCount: 5, mode: "" });

  return (
    <>
      <SelectBar setFields={setFields} />
      <FieldModeContext.Provider value={{ fieldsCount: fields.fieldsCount, mode: fields.mode }}>
        <Fields />
      </FieldModeContext.Provider>
    </>
  )
}

export default App
