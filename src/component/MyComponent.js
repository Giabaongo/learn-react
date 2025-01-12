//class component
// function component

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Bao',
        address: 'HCM',
        age: 20
    };

    // jsx (cho phep viet code js trong html)
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}

            </div>
        );
    }
}

export default MyComponent;