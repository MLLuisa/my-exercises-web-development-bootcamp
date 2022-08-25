import FilterByGender from './FilterByGender';

const Filters = (props) => {
    return (
        <FilterByGender filterByGender={props.filterByGender}
        handleFilterByGender={props.handleFilterByGender}/>
        // <FilterByName />
        // <FilterByCity />
    )

}
export default Filters;