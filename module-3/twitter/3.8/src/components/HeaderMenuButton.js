const HeaderMenuButton = (props) => {

const handleClick = () => {
    props.handleClick();
}

    return (<li className={`menu__item menu__item--${props.liClass}`}>
    <button className="menu__link" href="#" title={props.text} onClick={handleClick} >
      <span className="text">Twittear</span>
    </button>
  </li>)
}

export default HeaderMenuButton;