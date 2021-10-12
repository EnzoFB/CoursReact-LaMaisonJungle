import { useState } from 'react';
import Banner from './Banner'
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList'

/*
const App = () => <div>
    <Banner/>
    <Cart/>
    <ShoppingList/>
    <Footer />
</div>
*/

function App() {

    const [cart, updateCart] = useState([])

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