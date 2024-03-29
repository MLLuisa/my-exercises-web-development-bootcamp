import { Link } from "react-router-dom";
const UserItem = (props) => {
    return (<li>
        <Link to={`/user/${props.user.id}`}>
        <img 
            src={props.user.image}
            alt={`foto de ${props.user.name}`}
            title={`foto de ${props.user.name}`}></img>
        <h4>{props.user.name}</h4>
        <p>{props.user.city} / {props.user.gender}</p>
        </Link>
    </li>)
}

export default UserItem;