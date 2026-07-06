
const PlantsSelect = ({selectedPlant}) => {
    return(
        <div>
            <h4>
                The selected Plant is {""}
                {selectedPlant ? selectedPlant.name : "..."}
            </h4>
        </div>
    );

};


export default PlantsSelect