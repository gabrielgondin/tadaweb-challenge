import { useState } from "react"
import { Item } from "../model/Item"
import CustomItem from "./CustomItem"


const CustomFormEdit = () => {
    const titleForm = "Dynamic Form Edit"
    const savedItens = JSON.parse(localStorage.getItem("itens") || "[]")
    const [itens, setItens] = useState<Item[]>(savedItens)

    const updateItem = (itemUpdated: Item) => {
        setItens(itens.map((item) => { 
            if (item.id === itemUpdated.id) {
                item = itemUpdated
            }
            return item
        }))
    }

    const saveForm = () => {
        localStorage.setItem("itens", JSON.stringify(itens))
    }

    return (
        <form>
            <h1>{ titleForm }</h1>
            {itens.map( (item) => 
                <CustomItem key={item.id.toString()} item={item} updateItem={updateItem} editMode={true}></CustomItem>)
            }
            <button type="button" onClick={saveForm}>Save</button>

        </form>
    )
}

export default CustomFormEdit
