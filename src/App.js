import Navbar from "./components/Navbar/navbar";
import Home from "./components/Intro/intro";
import About from "./components/About/about"
import Menu from './components/Menu/menu'
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
