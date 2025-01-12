//class component
// function component

import React from 'react';
import AddUserInfo from './AddUserInfo2';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {


    state = {
        listUser: [
            { id: 1, name: 'Bao ngo', age: 20 },
            { id: 2, name: 'gia huy', age: 16 },
            { id: 3, name: 'duc tai', age: 22 }
        ]
    }

    handleAddNewUser = (userObj) => {
        // cach 1
        this.setState({
            listUser:[userObj,...this.state.listUser]
        })

        //cach 2
        // let listUserClone = [...this.state.listUser];

    }


    // jsx (cho phep viet code js trong html)
    render() {
        return (
            <div>
                <AddUserInfo
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br />
                <DisplayInfor
                    listUser={this.state.listUser}
                />
            </div>
        );
    }
}

export default MyComponent;