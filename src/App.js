// import logo from './logo.svg';
// import './App.css';
//MY IMPORT AND EXPORT
import Allroutes from './routes/Allroutes';
import Header from "./Components/day_1/Header"

function App() {

  return (
    <>
      <Header />
      <Allroutes />
    </>
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
