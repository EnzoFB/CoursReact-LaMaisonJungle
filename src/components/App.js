import { useState, useEffect } from 'react';
import Banner from './Banner'
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
    // On récupere le panier dans le local storage
    const savedCart = localStorage.getItem('cart')

    // Si savedCart existe, on le parse pour l'utiliser comme valeur par défaut, sinon, on utilise par défaut un tableau vide 
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

    // On transforme une valeur (le panier) en objet utilisable
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    })

    return <div>
        <Banner/>
        <div className="layout-inner">
            <Cart cart={cart} updateCart={updateCart} />
            <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
        <Footer/>
    </div>
}

export default App;