const CartItem = ({item, addToCart, removeFromCart}) => {
    return (
    <li className="cart-item">
        <h5>{item.name}</h5>
        <div>
            {item.image}
        </div>
        <p>
            Quantity: <button onClick= {() => {removeFromCart(item)}}>-</button> {item.quantity} <button onClick= {() => {addToCart(item)}}>+</button>
        </p>
    </li>
    ) 
};


export default CartItem