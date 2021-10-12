import CareScale from './CareScale';
import '../styles/PlantItem.css'


function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}


function PlantItem({ cover, name, light, water, price }) {
    
    return <li className="plant-item" onClick={() => handleClick}>
        <span className="plant-item-price">{price} €</span>
        <img src={cover} alt={`${name} cover`} className="plant-item-cover"/>
        {name}
        <div>
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
        </div>
    </li>
}

export default PlantItem