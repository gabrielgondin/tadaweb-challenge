import React from "react"
import { Item, ItemProps } from "../model/Item"

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
        console.log("type", type)
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
        <fieldset>
            {editMode &&
                <input placeholder="Enter a label name" readOnly={!editMode} type="text" value={item.name} onChange={updateName}></input>
            }
            {!editMode &&
                <label>{displayLabelName}</label>
            }
            {": " } 
            <input placeholder="Inital a value" readOnly={!editMode} type={item.type} value={item.content} onChange={updateContent}></input>
            {item.id === -1 &&
                <select name="types" id="types" value={item.type} onChange={(e) => updateType(e.target.value)}>
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                    <option value="date">Date</option>
                    <option value="email">Email</option>
                </select>
            }
            {(removeItem && !editMode) && 
                <button type="button" onClick={(e) => { console.log(e); removeItem(item.id)}}>Remove</button>            
            }
        </fieldset>
    )
}

export default CustomItem
