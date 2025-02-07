import ModelCreateUser from "./ModelCreateUser";

const ManagerUser = (props) => {
    return (
        <div className="manager-user-container">
            <div className="title">
                Manager User
            </div>
            <div className="users-content"></div>
            <div>
                <button className="btn-add-user">Add new User</button>
            </div>
            <div>
                table user
                <ModelCreateUser />
            </div>
        </div>
    )
}

export default ManagerUser;