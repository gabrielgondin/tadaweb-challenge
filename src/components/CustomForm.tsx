import { Fragment, useRef, useState } from "react"
import { Item } from "../model/Item"
import CustomItem from "./CustomItem"

const CustomForm = () => {
    const titleForm = "Dynamic Form"
    const defatulItem: Item = {id: -1, name: "", content: "", type: "text"}
    const [item, setItem] = useState<Item>({...defatulItem})
    const savedItens = JSON.parse(localStorage.getItem("itens") || "[]")
    const [itens, setItens] = useState<Item[]>(savedItens)
    const itensCounter = useRef(itens[itens.length-1]?.id || 0)

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
        const itensUpdated = itens.filter((item) => item.id !== index)
        setItens(itensUpdated)
        itensCounter.current = itensUpdated[itensUpdated.length-1]?.id || 0
    }

    const saveForm = () => {
        localStorage.setItem("itens", JSON.stringify(itens))
    }

    return (
        <Fragment>
            <div className="max-w-4xl m-auto bg-white text-left">
                <span className="bg-white pl-1 text-sm">Add field names and values to customise your form</span>
                <CustomItem item={item} updateItem={updateItem} editMode={true}></CustomItem> 
                <button className="form__button bg-cyan-600 hover:bg-cyan-800" type="button" onClick={addItem}>ADD</button>
            </div>

            <form className="form mx-auto mt-10 mb-6 ">
                <h2 className="mt-2 font-bold text-2xl">{ titleForm }</h2>

                {itens.map( (item) => 
                    <CustomItem key={item.id.toString()} item={item} editMode={false} removeItem={removeItem}></CustomItem>)
                }
                {!itens.length && 
                    <p className="my-5 font-semibold text-lg text-gray-500">Customise your form by adding new fields and values to store data here</p>
                }
                <button className="form__button bg-green-600 hover:bg-green-800" type="button" onClick={saveForm}>Save</button>
            </form>
        </Fragment>
    )
}

export default CustomForm
