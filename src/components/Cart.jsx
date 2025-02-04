const Cart = ({ cartItems, totalPrice, checkout }) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.map(item => (
                <div key={item.name}>
                    <p>{item.name} - ${item.price}</p>
                </div>
            ))}
            <h3>Total: ${totalPrice}</h3>
            <button onClick={checkout}>Checkout</button>
        </div>
    );
};

export default Cart;
