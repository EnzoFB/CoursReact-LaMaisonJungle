import { plantList } from "../datas/plantList"
import PlantItem from "./PlantItem"
import '../styles/ShoppingList.css'
import Categories from "./Categories"
import { useState } from "react"

function ShoppingList({cart, updateCart}) {

    const [selectedCategory, setSelectedCategory] = useState("")
    const categoriesList = plantList.reduce( (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), [])

    const displayPlantItem = ({id, cover, name, water, light, price, category}) => !selectedCategory || selectedCategory === category ?
            (<div key={id}>
                <PlantItem 
                    cover={cover} 
                    name={name} 
                    light={light} 
                    water={water}
                    price={price}
                />
                <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>) : null
        
    

    function addToCart(name, price) {
        const currentPlantSaved= cart.find((plant) => plant.name === name)
        currentPlantSaved ? 
            updateCart([
                ...cart.filter((plant) => plant.name !== name), {name, price, amount: currentPlantSaved.amount + 1}
            ])
         : updateCart([
             ...cart, {name, price, amount: 1}
         ])
    }
    

    return (
        <div className="shopping-list">
            <ul>
                <Categories
                    categoriesList={categoriesList} 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} 
                />
            </ul>
            <ul className="plant-list">
                {plantList.map(displayPlantItem)}
            </ul>
        </div>       
    )
}

export default ShoppingList