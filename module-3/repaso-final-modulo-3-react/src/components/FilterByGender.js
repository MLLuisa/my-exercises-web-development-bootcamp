const FilterByGender = (props) => {

    const handleChange = (ev) => {
        props.handleFilterByGender(ev.target.value);
    }

    return (
        <>
        <label
            className="form__label display-block"
            htmlFor="gender">Género:</label>
        <select
            className="form__input-text"
            name="gender"
            id="gender"
            value={props.filterByGender}
            onChange={handleChange}>
            <option value="all" selected>Todos</option>
            <option value="female">Mujer</option>
            <option value="male">Hombre </option>
            <option value="no-binary">No binario</option>
        </select>

    </>

    )
}

export default FilterByGender;