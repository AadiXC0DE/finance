import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import MenuButtons from "./components/MenuButtons";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <div className="menu_nav">
        <Menu />
        <Navbar />
      </div>
      <div className="menu_data">
        <MenuButtons></MenuButtons>
        <Main />
      </div>
    </div>
  );
}

export default App;
