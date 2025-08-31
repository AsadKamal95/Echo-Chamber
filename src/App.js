import "./App.css"
import DevelopmentJourney from "./Development-journey";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Installation from "./Installation";

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Installation/>
      <DevelopmentJourney/>
      <Footer/>
    </div>
  );
}

export default App;
