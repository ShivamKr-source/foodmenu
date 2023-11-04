import Navbar from "./components/Navbar/navbar";
import Home from "./components/Intro/intro";
import About from "./components/About/about"
import Menu from './components/Menu/menu'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
    </div>
  );
}

export default App;
