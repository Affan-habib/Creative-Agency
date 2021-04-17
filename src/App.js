import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import AOS from 'aos'
import './App.css'
import Testimonials from "./components/Testimonials/Testimonials";


function App() {
  AOS.init()
  return (
    <div className="App">
     <Home />
      <Skills />
      <Services />
      <Team />
      <Pricing />
      <Testimonials/>
      <Footer/>
     
    </div>
  );
}

export default App;
