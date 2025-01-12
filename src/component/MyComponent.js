//class component
// function component

import React from 'react';
import UserInfo from './UserInfo2';

class MyComponent extends React.Component {



    // jsx (cho phep viet code js trong html)
    render() {
        return (
            <div>
                hello

                <UserInfo />
            </div>
        );
    }
}

export default MyComponent;