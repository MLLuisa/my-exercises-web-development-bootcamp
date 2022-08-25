import UserItem from "./UserItem";

const UserList = (props) => {

    const userElements = props.users.map((user) => {
        return(
            <UserItem user={user}/>
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