import { useContext, useState } from "react";
import FieldModeContext from "../../context/field-mode-context";
import Field from "./Field";


function Fields() {
  const [activeField, setActiveField] = useState<{ row: number, col: number }[]>([])
  const fieldsModeCtx = useContext(FieldModeContext);

  const fields: number[] = [];

  for (let i = 1; i <= fieldsModeCtx.fieldsCount; i++) {
    fields.push(i)
  }

  const getActiveField = (row: number, col: number) => {
    if (fieldsModeCtx.mode) {
      setActiveField(prevState => {
        if (prevState.length === 5) {
          prevState.pop();
          return [{ row, col }, ...prevState]
        } else {
          return [{ row, col }, ...prevState]
        }

      })
    }
  }

  return (
    <div className="flex items-top gap-12">
      <div className="">
        {fields.map((row, i) => {
          return (
            <div className="flex" key={i} data-row={i + 1}>
              {fields.map((item, index) => <Field key={index + 1} getActiveField={getActiveField} rowId={i + 1} cellId={index + 1} />)}
            </div>
          )
        })}
      </div>
      <div>
        <h2>Hover squares</h2>
        {activeField.map((field, index) => <div key={index}>row {field.row} col {field.col}</div>)}
      </div>
    </div>
  )
}

export default Fields;