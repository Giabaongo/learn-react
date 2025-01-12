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

    handleOnChangeAge(event) {
        this.setState({
            age: event.target.value
        })
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
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <label>Name: </label>
                    <input
                        value={this.state.name}
                        type='text'
                        onChange={(event) => { this.handleOnChangeInput(event) }} />
                    <label>Age: </label>
                    <input
                        value={this.state.age}
                        type='text'
                        onChange={(event) => { this.handleOnChangeAge(event) }} />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfo