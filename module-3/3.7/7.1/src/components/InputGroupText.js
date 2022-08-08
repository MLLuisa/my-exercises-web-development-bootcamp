
const InputGroupText = (props) => {
    return (<div className="input-group-text">
    <label className="label-text" htmlFor={props.htmlFor}>
      {`Escribe un ${props.text}`}:
    </label>
    <input
      className="input-text"
      type="text"
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleName}/>
  </div>)
}

export default InputGroupText;