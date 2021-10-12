import '../styles/Cart.css'
import { useState } from 'react'

const Cart = ({cart, updateCart}) => { 

    //const [cart, updateCart] = useState(0)              // Décomposition (Tableau) de useState(Valeur par défault)$
    const [isOpen, setIsOpen] = useState(true)
    /*
    const totalPrice = (...prices) => {
        let sum = 0;
        prices.forEach(price => {
            sum = sum + price
        });
        return sum;
    }
    */

    function displayCart({name, price, amount, index}) {
        return <li key={`${name}-${index}`}>{name} {price}€ x {amount}</li>
    }
    
    return isOpen ? (
        <div className="cart">
            <button className="cart-toggle-button" onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Votre Panier:</h2>
            <ul>
                {cart.map(displayCart)}
            </ul>
            <p>Total du panier: {cart.reduce((acc, plant) => acc + plant.amount * plant.price, 0)} €</p>
            <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
        ) : (
            <div className="cart-closed">
                <button className="cart-toggle-button" onClick={() => setIsOpen(true)}>Afficher le panier</button>
            </div>
    )
}

export default Cart