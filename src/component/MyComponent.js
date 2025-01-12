//class component
// function component

import React from 'react';

class MyComponent extends React.Component {
    // jsx (cho phep viet code js trong html)
    render() {
        return (
            <div>
                My first component
                {Math.random()}
            </div>
        );
    }
}

export default MyComponent;