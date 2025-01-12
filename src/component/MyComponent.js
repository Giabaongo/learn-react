//class component
// function component

import React from 'react';
import UserInfo from './UserInfo2';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {


    state = {
        listUser: [
            {id: 1, name: 'Bao ngo', age: 20},
            {id: 2, name: 'gia huy', age: 16},
            {id: 3, name: 'duc tai', age: 22}
        ]
    }


    // jsx (cho phep viet code js trong html)
    render() {
        return (
            <div>
                <UserInfo />
                <br/>
                <DisplayInfor listUser={this.state.listUser}/>
            </div>
        );
    }
}

export default MyComponent;