import "./App.scss"
import Header from "./conponents/header/Header";
import Main from "./conponents/Main/Main";
import Navbar from "./conponents/navbar/Navbar";
// import data from "./helper/Data"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
