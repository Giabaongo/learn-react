import React from "react";

class AddUserInfo extends React.Component {
    state = {
        name: '',
        address: 'HCM',
        age: ''
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
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: this.state.name,
            age: this.state.age
        });
    }
    render() {
        return (
            <div className="display-info-contaniner">
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

export default AddUserInfo