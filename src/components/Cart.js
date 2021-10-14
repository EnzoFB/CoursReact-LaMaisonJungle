import '../styles/Cart.css'
import { useState, useEffect } from 'react'

const Cart = ({cart, updateCart}) => { 

    //const [cart, updateCart] = useState(0)              // Décomposition (Tableau) de useState(Valeur par défault)$
    const [isOpen, setIsOpen] = useState(true)
    
    const totalPrice = cart.reduce((acc, plant) => acc + plant.amount * plant.price, 0)
    
    useEffect(() => {
        document.title = `LMJ: ${totalPrice}€ d'achats`
    }, [totalPrice])

    function displayCart({name, price, amount, index}) {
        return <li key={`${name}-${index}`}>{name} {price}€ x {amount}</li>
    }

    return isOpen ? (
        <div className="cart">
            <button className="cart-toggle-button" 
                onClick={() => setIsOpen(false)}>
                Fermer
            </button>
            { cart.length > 0 ? (
                <div>
                    <h2>Votre Panier:</h2>
                    <ul>
                        {cart.map(displayCart)}
                    </ul>
                    <p>Total du panier: {totalPrice} €</p>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div><h2>Votre panier est vide</h2></div>
            )}
        </div>
        ) : (
            <div className="cart-closed">
                <button className="cart-toggle-button" onClick={() => setIsOpen(true)}>Afficher le panier</button>
            </div>
    )
}

export default Cart