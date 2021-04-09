import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar.js";
import Header from "./Components/Header.js";
import View1 from "./Components/View1.js";
import Particles from "react-particles-js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <>
    <Particles 
      params= {{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          }
        }
      }} />

    <Navbar />
    <Header />
    <View1 />
    <Footer />
    </>
  );
}

export default App;
