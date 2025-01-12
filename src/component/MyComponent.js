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
        console.log("My name is", this.state.name)

        this.setState({
            name: 'Ngo'
        })

        this.setState({
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    handleOnMouseOver(event) {
        console.log(event)
    }

    handleOnChangeInput(event) {
        this.setState({
            name: event.target.value
        })
        // console.log(event,event.target.value)
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        alert(this.state.name)
    }

    // jsx (cho phep viet code js trong html)
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>click me</button>
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input
                        type='text'
                        onChange={(event) => { this.handleOnChangeInput(event) }}/>
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;