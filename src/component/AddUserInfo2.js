import React, { useState } from "react";

const AddUserInfo = (props) => {
    // state = {
    //     name: '',
    //     address: 'HCM',
    //     age: ''
    // };

    const [name, setName] = useState('');
    const [address, setAddress] = useState('HCM');
    const [age, setAge] = useState('');


    const handleOnChangeInput = (event) => {
        // this.setState({
        //     name: event.target.value
        // })
        setName(event.target.value);
        // console.log(event,event.target.value)
    }

    const handleOnChangeAge = (event) => {
        // this.setState({
        //     age: event.target.value
        // })
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: name,
            age: age
        });


    }

    return (
        <div className="display-info-contaniner">
            My name is {name} and I'm {age}
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <label>Name: </label>
                <input
                    value={name}
                    type='text'
                    onChange={(event) => { handleOnChangeInput(event) }} />
                <label>Age: </label>
                <input
                    value={age}
                    type='text'
                    onChange={(event) => { handleOnChangeAge(event) }} />
                <button>submit</button>
            </form>
        </div>
    );

}

export default AddUserInfo