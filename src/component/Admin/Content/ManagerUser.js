import ModelCreateUser from "./ModelCreateUser";
import './ManageUser.scss';
const ManagerUser = (props) => {
    return (
        <div className="manager-user-container">
            <div className="title">
                Manager User
            </div>
            <div className="users-content">
                <div>
                    <button className="btn-add-user">Add new User</button>
                </div>
                <div>
                    table user

                </div>
                <ModelCreateUser />
            </div>
        </div>
    )
}

export default ManagerUser;