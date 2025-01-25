import './App.scss';
import Header from './component/Header/Header';


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
      hello world
    </div>
  );
}

export default App;
