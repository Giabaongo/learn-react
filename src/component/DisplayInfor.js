import React from "react";

class DisplayInfor extends React.Component {


    render() {

        const {listUser} = this.props;

        console.log(this.props)
        //props => properties (tai san) dung de chuyen du lieu
        //  tu component cha sang component con
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age}</div>
                            <hr/>
                        </div>
                    )
                })}

                {/* <div>My name's {this.props.name}</div>
                <div>My age's {this.props.age}</div> */}
            </div>
        )
    }
}

export default DisplayInfor