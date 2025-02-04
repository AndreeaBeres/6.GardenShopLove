// src/App.js
import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Make sure styles are applied

const App = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (name, price) => {
        const newCart = [...cart, { name, price }];
        setCart(newCart);
        setTotalPrice(prevTotal => prevTotal + price);
    };

    const handleCheckout = () => {
        alert(`Total: $${totalPrice}. Proceeding to checkout...`);
        // Redirect to Checkout page or handle order submission here
    };

    return (
        <div>
            <Header />
            <main>
                <section id="shop">
                    <div className="container">
                        <h2>Our Products</h2>
                        <ProductCard
                            productName="Beautiful Rose"
                            price={15.00}
                            image="/images/9b.jpg"
                            addToCart={addToCart}
                        />
                        <ProductCard
                            productName="Sunflower"
                            price={12.00}
                            image="/images/sunflower.jpg"
                            addToCart={addToCart}
                        />
                        <ProductCard
                            productName="Lavender"
                            price={18.00}
                            image="/images/lave.jpg"
                            addToCart={addToCart}
                        />
                        <ProductCard
                            productName="Tulips"
                            price={14.00}
                            image="/images/T148-2A.jpg"
                            addToCart={addToCart}
                        />
                        <ProductCard
                            productName="Lilies"
                            price={10.00}
                            image="/images/Lily.jpg"
                            addToCart={addToCart}
                        />
                        <ProductCard 
                            productname="Geraniums"
                            price={13.00}
                            image="/images/vibrant.jpg"
                            addToCart={addToCart}
                        />
                    </div>
                </section>
                <Cart cartItems={cart} totalPrice={totalPrice} checkout={handleCheckout} />
            </main>
            <Footer />
        </div>
    );
};

export default App;


