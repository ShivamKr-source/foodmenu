import Navbar from "./components/Navbar/navbar";
import Home from "./components/Intro/intro";
import About from "./components/About/about"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
