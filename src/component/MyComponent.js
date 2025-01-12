//class component
// function component

import React from 'react';
import UserInfo from './UserInfo2';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {



    // jsx (cho phep viet code js trong html)
    render() {
        return (
            <div>
                <UserInfo />
                <br/>
                <DisplayInfor name="Ngo Gia Bao" age="20"></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;