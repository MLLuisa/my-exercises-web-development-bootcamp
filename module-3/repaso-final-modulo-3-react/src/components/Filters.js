import FilterByGender from './FilterByGender';
import FilterByCity from './FilterByCity';

const Filters = (props) => {
    return (
        <>
        <FilterByGender filterByGender={props.filterByGender}
        handleFilterByGender={props.handleFilterByGender}/>
        <FilterByCity 
        getCities={props.getCities}
        handleFilterCity={props.handleFilterCity}/>
        {/* // <FilterByName /> */}
        
        </>
    )

}
export default Filters;