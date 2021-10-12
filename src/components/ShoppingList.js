import { plantList } from "../datas/plantList"
import PlantItem from "./PlantItem"
import '../styles/ShoppingList.css'

function ShoppingList({cart, updateCart}) {

    const categories = plantList.reduce( (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), [])

    const displayPlantCategory = (categories) => <li key={categories}>{categories}</li>

    const displayPlantItem = ({id, cover, name, water, light, price}) => <div key={id}>
        <PlantItem 
            cover={cover} 
            name={name} 
            light={light} 
            water={water}
            price={price}
        />
        <button onClick={() => addToCart(name, price)}>Ajouter</button>
    </div>

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
                {categories.map(displayPlantCategory)}
            </ul>
            <ul className="plant-list">
                {plantList.map(displayPlantItem)}
            </ul>
        </div>       
    )
}

export default ShoppingList