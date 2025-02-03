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
      <div className='header-container'>
        <Header />
      </div>

      <div className='main-container'>
        <div className='navsidebar-container'>

        </div>
        <div className='app-container'>
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default App;
