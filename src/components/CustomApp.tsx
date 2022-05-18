import { useState } from "react"
import CustomForm from "./CustomForm"
import CustomFormEdit from "./CustomFormEdit"


const CustomApp = () => {
    const [editMode, setEditMode] = useState<Boolean>(false)

    const editModeToggle = () => {
        setEditMode(!editMode)
    }
    

    const titleName = editMode ? "Edit values" : "Add or remove items"
    const currentModeName = editMode ? "Add values" : "Edit values"

    return (
        <div>
            <h1>{titleName}</h1>
            <button type="button" onClick={editModeToggle}>{currentModeName}</button>
            {editMode && <CustomFormEdit></CustomFormEdit>}
            {!editMode && <CustomForm></CustomForm>}
        </div>
    )
}

export default CustomApp
