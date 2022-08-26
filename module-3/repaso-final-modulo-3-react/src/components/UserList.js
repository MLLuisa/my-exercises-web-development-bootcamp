import UserItem from "./UserItem";

const UserList = (props) => {

    const userElements = props.users.map((item) => {
        return(
            <UserItem user={item} key={item.id}/>
        )
    })
    return (
        <section>
            <ul className="cards">
                {userElements}
            </ul>
        </section>
    )
}

export default UserList;