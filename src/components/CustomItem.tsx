import React from "react"
import { Item, ItemProps } from "../model/Item"
import { MdDelete } from 'react-icons/md'
import { FiEdit3 } from 'react-icons/fi'

const CustomItem = ({item, editMode, updateItem, removeItem}: ItemProps) => {

    const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
        item.name = event.target.value
        updateStateItem()
    } 

    const updateContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        item.content = event.target.value
        updateStateItem()
    }


    const updateType = (type: String) => {
        item.type = type as Item["type"]
        updateStateItem()
    }
    
    const updateStateItem = () => {
        if (updateItem) {
            updateItem({id: item.id, name: item.name, content: item.content, type: item.type})
        }
    }

    const displayLabelName = item.name.trim() ? item.name : "Item " + item.id

    return (
        <div className="flex bg-white w-full">
            <fieldset className={`form__fieldset ${editMode && item.id === -1 ? "flex" : ""}`}>
                {editMode && item.id === -1 &&
                    <input className="form__input mr-2" placeholder="Enter the label name" readOnly={!editMode} type="text" value={item.name} onChange={updateName}></input>
                }
                {editMode && item.id !== -1 && 
                    <FiEdit3 className="mr-0 ml-auto"></FiEdit3>
                }
                {item.id !== -1 &&
                    <label className="form__label">{displayLabelName}</label>
                }
                <input className="form__input" placeholder="Initial value" readOnly={!editMode} type={item.type} value={item.content} onChange={updateContent}></input>
                
                {item.id === -1 &&
                    <select className="ml-2 rounded-sm" name="types" id="types" value={item.type} onChange={(e) => updateType(e.target.value)}>
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="date">Date</option>
                        <option value="email">Email</option>
                    </select>
                }
                
            </fieldset>
            {(removeItem && !editMode) && 
                <button type="button" onClick={() => {removeItem(item.id)}} title="remove"><MdDelete size={30}></MdDelete></button>            
                
            }
        </div>
    )
}

export default CustomItem
