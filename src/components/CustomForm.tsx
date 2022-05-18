import { useRef, useState } from "react"
import { Item } from "../model/Item"
import CustomItem from "./CustomItem"


const CustomForm = () => {
    const titleForm = "Dynamic Form"
    const defatulItem: Item = {id: -1, name: "", content: "", type: "text"}
    const [item, setItem] = useState<Item>({...defatulItem})
    const savedItens = JSON.parse(localStorage.getItem("itens") || "[]")
    const [itens, setItens] = useState<Item[]>(savedItens)
    const itensCounter = useRef(itens[itens.length-1].id)

    const updateItem = (itemUpdated: Item) => {
        console.log("updateItem", itemUpdated)
        setItem(itemUpdated)
    }

    const addItem = () => {
        itens.push({...item, id: itensCounter.current + 1} )
        setItens(itens)
        
        setItem(defatulItem)
        itensCounter.current++
    }


    const removeItem = (index: number) => {
        setItens(itens.filter((item) => item.id !== index))
    }

    const saveForm = () => {
        localStorage.setItem("itens", JSON.stringify(itens))
    }

    return (
        <form>
            <h1>{ titleForm }</h1>
            <CustomItem item={item} updateItem={updateItem} editMode={true}></CustomItem> 
            <button type="button" onClick={addItem}>ADD</button>
            {itens.map( (item) => 
                <CustomItem key={item.id.toString()} item={item} editMode={false} removeItem={removeItem}></CustomItem>)
            }
            <button type="button" onClick={saveForm}>Save</button>
        </form>
    )
}

export default CustomForm
