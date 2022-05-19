import { useState } from "react"
import CustomForm from "./CustomForm"
import CustomFormEdit from "./CustomFormEdit"
import { AiOutlineForm } from 'react-icons/ai'
import { BiAddToQueue } from 'react-icons/bi'

const CustomApp = () => {
    const [editMode, setEditMode] = useState<Boolean>(false)

    const editModeToggle = () => {
        setEditMode(!editMode)
    }
    
    return (
        <div>
            <div className="p-8 text-right">
            {editMode && <button type="button" onClick={editModeToggle} title="Add values"><BiAddToQueue size={25}></BiAddToQueue></button>}
            {!editMode && <button type="button" onClick={editModeToggle} title="Edit values"><AiOutlineForm size={25}></AiOutlineForm></button>}
            </div>

            {editMode && <CustomFormEdit></CustomFormEdit>}
            {!editMode && <CustomForm></CustomForm>}
        </div>
    )
}

export default CustomApp
