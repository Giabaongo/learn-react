import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'Bao',
        address: 'HCM',
        age: 20
    };


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
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>click me</button>
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input
                        type='text'
                        onChange={(event) => { this.handleOnChangeInput(event) }} />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfo