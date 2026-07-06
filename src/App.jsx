import { useState } from "react"
import PLANTS from "./data"
import Plants from "./Plants/Plants"
import PlantsSelect from "./Plants/PlantsSelect"
import Cart from "./Cart/Cart"

export default function App() {

  const[plants, setplants] = useState(PLANTS)
  const[selectedPlant, setSelectedPlant] = useState(null)
  const[cart, setCart] = useState([])

  const addToCart = (prod) => {
    const itemExists = cart.find((item) => {return item.id === prod.id})
    if (itemExists) {
      const mappedCart = cart.map((item) => {
        return (item.id === prod.id ? {...item, quantity: item.quantity + 1} : item)
      });
      setCart(mappedCart);
    }
    else{
      const item = {...prod, quantity: 1}
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (prod) => {
    const mappedCart = cart.map((item) => {
      return (item.id === prod.id ? {...item, quantity: item.quantity - 1} : item)
    })
    const filteredCart = mappedCart.filter((item) => {
      return (item.quantity > 0)
    });
    setCart(filteredCart);
  };

  return( 
    
    <div>
      <h1>Welcome to Johnny's Plant Store</h1>
      <div className="container">
          <Plants plants={plants} 
              setSelectedPlant={setSelectedPlant}
              addToCart={addToCart} />
      
          <PlantsSelect  selectedPlant={selectedPlant} />
      
          <Cart  cart={cart} selectedPlant={selectedPlant} addToCart={addToCart} removeFromCart={removeFromCart} />
      </div>
    </div>
  )
}
