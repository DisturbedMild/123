import { useState, useContext } from "react";
import FieldModeContext from "../../context/field-mode-context";

interface FieldProps {
    cellId: number,
    rowId: number,
    getActiveField: (row: number, col: number) => void
}

function Field(props: FieldProps) {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const fieldModeCtx = useContext(FieldModeContext);

    const onMouseEnterHandler = () => {
        if (fieldModeCtx.mode) setIsSelected(!isSelected);
        if (isSelected === false) {
            props.getActiveField(props.rowId, props.cellId);
        }
    }

    return (
        <div className={`w-12 h-12 border border-white ${isSelected ? "bg-cyan-500" : ''}`} onMouseEnter={onMouseEnterHandler} data-cell={props.cellId}></div>
    )
}

export default Field;