import React from "react"

export interface Item {
    id: number
    name: string
    content: string
    type: "text" | "number" | "email" | "date"
} 

export interface ItemProps {
    item: Item
    editMode: boolean
    // setItem?: React.Dispatch<React.SetStateAction<Item>>
    updateItem?: (item: Item) => void
    removeItem?: (index: number) => void
}