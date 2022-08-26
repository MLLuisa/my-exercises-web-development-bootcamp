
const FilterByCity = (props) => {

    const handleFilterCity = (ev) => {
        props.handleFilterCity(ev.target.value);
    }

    const renderCities = () => {
        return props.getCities.map((city, index) => {
            return (
                <li key={index}>
                    <input type="checkbox"
                            name="city"
                            value={city} 
                            onChange={handleFilterCity}/>
                <label htmlFor="">{city}</label>
                </li>
            )
        })
    }
    return (
        <>
        <label htmlFor="">Ciudades</label>
        <ul>{renderCities()}</ul>
        </>
    )
};

export default FilterByCity;