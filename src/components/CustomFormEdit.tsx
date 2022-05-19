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
        <div className="grid grid-cols-[300px_auto] rounded-lg max-w-[80%] m-auto mb-10">
            <div className="bg-[#0D1E28] flex rounded-tl-[20rem]">
                <img className="p-4 m-auto w-[225px] h-[225px] rounded-tl-[20rem]" src={require("../images/tadaweb-logo.png")} alt="tadaweb logo" />
            </div>
            <form className="form">
                <h1 className="mt-2 font-bold text-2xl">{ titleForm }</h1>
                {itens.map( (item) => 
                    <CustomItem key={item.id.toString()} item={item} updateItem={updateItem} editMode={true}></CustomItem>)
                }
                {itens.length > 0 && 
                    <button className="form__button bg-green-600 hover:bg-green-800" type="button" onClick={saveForm}>Save</button>
                }
                {!itens.length && 
                    <p className="my-5 font-semibold text-lg text-gray-500">Click here to customise your form and store data</p>
                }
            </form>
        </div>
    )
}

export default CustomFormEdit
