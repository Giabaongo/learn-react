import './App.scss';
import Header from './component/Header/Header';
import { Outlet, Link } from "react-router-dom";


// class App extends React.Component {
//   render() {
//     return (
//       <div className='app-container'>

//         <MyComponent>

//         </MyComponent>
//       </div>
//     )
//   }
// }



const App = () => {

  return (
    <div className="app-container">
      <Header />
      <div>
        Test link
        <div>
          <button>
            <Link to="/user">go to user page</Link>
          </button>
          <button>
            <Link to="/admin">go to admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
