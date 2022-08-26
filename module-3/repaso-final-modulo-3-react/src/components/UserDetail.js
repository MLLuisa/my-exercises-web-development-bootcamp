const UserDetail = (props) => {
    return (
        <>
        <li>
        <a href="#">
        <img 
            src={props.user.image}
            alt={`foto de ${props.user.name}`}
            title={`foto de ${props.user.name}`}></img>
        <h4>{props.user.name}</h4>
        <p>{props.user.city} / {props.user.gender}</p>
        </a>
    </li>
    </>
    )
}

export default UserDetail;