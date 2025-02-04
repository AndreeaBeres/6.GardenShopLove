const Checkout = ({ cartItems, totalPrice }) => {
    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <div>
                {cartItems.map(item => (
                    <p key={item.name}>{item.name} - ${item.price}</p>
                ))}
            </div>
            <h3>Total: ${totalPrice}</h3>
            <form>
                {/* Form for user details */}
            </form>
            <button>Complete Order</button>
        </div>
    );
};

export default Checkout;
