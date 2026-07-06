import CartItem from "./CartItem";
import "./Cart.css";


const Cart = ({cart, selectedPlant, addToCart, removeFromCart }) => {
    
    const calculateTotal = () => {
        return cart.reduce((acc, cur) => {
            return acc + (cur.quantity);
        }, 0)
    }

        return(
        <div className="cart">
           <h3> My Cart! </h3>
                
            {cart.length === 0 ? ( 
                <p>Cart is empty</p>)
                    : 
                (<ul>
                    {cart.map((item) => {
                        return <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
                        
                    })}
                </ul>
                )}
                <div>
                    <h5>Total: {calculateTotal()}</h5>
                </div>    
                 
    </div>
    )
};


export default Cart;