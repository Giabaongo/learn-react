import ModelCreateUser from "./ModelCreateUser";
import './ManageUser.scss';
import { useState } from "react";
const ManagerUser = (props) => {

    const [showModelCreateUser, setShowModelCreateUser] = useState(false);
    return (
        <div className="manager-user-container">
            <div className="title">
                Manager User
            </div>
            <div className="users-content">
                <div>
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowModelCreateUser(true)}
                    >
                        Add new User
                    </button>
                </div>
                <div className="table-user-container">
                    table user

                </div>
                <ModelCreateUser show={showModelCreateUser} setShow={setShowModelCreateUser} />
            </div>
        </div>
    )
}

export default ManagerUser;