import React from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {


//stateless(component khoong co state) vs statefull (component co state) 
//stateless viet bang class co the chuyen no thanh mot cai function (goi la hook) 

//     constructor(props) {
//         console.log('>>> call constructor: ')
//         super(props);
//         this.state = {
//             isShowListUser: true
//         }
//     }

//     handleShowHide = () => {
//         this.setState({
//             isShowListUser: !this.state.isShowListUser
//         })
//     }

//     componentDidMount() {
//         console.log(">>> call me component did mount ")
//         setTimeout(() => {
//             document.title = "Home"
//         }, 3000);
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log('>>> call me component did update', this.props, prevProps)
//         if(this.props.listUser.length === 5) {
//             alert('You got 5 user');
//         }

//     }

//     render() {

//         const { listUser } = this.props;

//         console.log('>>>call me render')
//         //props => properties (tai san) dung de chuyen du lieu
//         //  tu component cha sang component con
//         return (
//             <div className="display-info-contaniner">
//                 {/* <img src={logo}/> */}
//                 <div>
//                     <span onClick={() => { this.handleShowHide() }}>

//                         {this.state.isShowListUser === true ? "Hide list users" : "Show list users"}
//                     </span>
//                 </div>
//                 {this.state.isShowListUser &&
//                     <div>
//                         {listUser.map((user) => {
//                             // console.log(user)

//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div className="red">My name's {user.name}</div>
//                                     <div className="green">My age's {user.age}</div>
//                                     <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     <hr />
//                                 </div>
//                             )


//                         })}

//                         {/* <div>My name's {this.props.name}</div>
//                 <div>My age's {this.props.age}</div> */}
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {

    const { listUser } = props;

    const [isShowHideListUser, setIsShowHideListUser] = React.useState(true);

    const handleShowHide = () => {
        setIsShowHideListUser(!isShowHideListUser)
    }

    return (
        <div className="display-info-contaniner">

            <div>
                <span onClick={() => { handleShowHide() }}>
                    {isShowHideListUser === true ? "Hide list users" : "Show list users"}
                </span>
            </div>

            {isShowHideListUser  &&
                <div>
                    {listUser.map((user) => {
                        // console.log(user)

                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div className="red">My name's {user.name}</div>
                                <div className="green">My age's {user.age}</div>
                                <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
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

export default DisplayInfor