import Plant from "./plant";
import "./Plants.css"

const Plants = ({ plants, setSelectedPlant, addToCart }) => {
    //console.log(plants)

    return(
        <div className="plants">
            <h2>Plants!</h2>
            <ul>
                {plants.map((item) => {
                    return (
                        <Plant key={item.id} 
                               item={item} 
                               setSelectedPlant={setSelectedPlant} 
                               addToCart={addToCart} />
                    );
                })}
                </ul>
            </div>
    );
};


export default Plants