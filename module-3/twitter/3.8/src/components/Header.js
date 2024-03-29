import HeaderMenuItem from './HeaderMenuItem';
import HeaderMenuButton from './HeaderMenuButton';

const Header = (props) => {
    return (<header className="header">
    <nav className="menu">
      <ul className="menu__items">
        <HeaderMenuItem text="Ir al inicio" href="/home" liClass="twitter"/>
        <HeaderMenuItem text="Ir al inicio" href="/home" liClass="home"/>
        <HeaderMenuItem text="Buscar" href="/search" liClass="search"/>
        <HeaderMenuItem text="Perfil" href="/profile" liClass="profile"/>
        <HeaderMenuButton 
        text="Twittear"
        liClass="tweet"
        handleClick={props.handleToggleCompose}/>
      </ul>
    </nav>
  </header>)
}

export default Header;