const Plant = ({item, setSelectedPlant, addToCart}) => {

    const handleClick = (item) => {
        setSelectedPlant(item);
    };

    return(
        
        <li className="item" key={item.id}>
                        {item.name}
                        <div>
                        {item.image}
                        </div>
                        <button type="submit" 
                                onClick={() => {
                                    handleClick(item);
                                    addToCart(item);
                                }}>
                                 Add to Cart   
                                </button> 
                                    
                    </li>
    )
};


export default Plant