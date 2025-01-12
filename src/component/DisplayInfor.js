import React from "react";

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {

        const { listUser } = this.props;

        console.log(listUser)
        //props => properties (tai san) dung de chuyen du lieu
        //  tu component cha sang component con
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        
                        {this.state.isShowListUser ===true ? "Hide list users" : "Show list users"}
                        </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUser.map((user) => {
                            console.log(user)

                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            )


                        })}

                        {/* <div>My name's {this.props.name}</div>
                <div>My age's {this.props.age}</div> */}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor