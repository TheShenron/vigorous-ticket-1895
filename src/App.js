// import logo from './logo.svg';
// import './App.css';
//MY IMPORT AND EXPORT
import Allroutes from './routes/Allroutes';
import Header from "./Components/day_1/Header"
import store from './store/store';
import { Provider } from "react-redux"

function App() {

  return (
    <Provider store={store}>
      <Header />
      <Allroutes />
    </Provider>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
