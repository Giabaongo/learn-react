//class component
// function component

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Bao',
        address: 'HCM',
        age: 20
    };

    handleClick(event) {
        console.log(">> click me by button")
        console.log("My name is " , this.state.name)
    }

    handleOnMouseOver(event) {
        console.log(event)
    }

    // jsx (cho phep viet code js trong html)
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>hover me</button>
                <button onClick={this.handleClick}>click me</button>
            </div>
        );
    }
}

export default MyComponent;