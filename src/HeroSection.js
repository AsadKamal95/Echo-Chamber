import "./HeroSection.css"
import { useEffect, useState } from "react";
import final_cosmos from "./cosmos_2.webm"

const HeroSection = () => {

      const [opacity, setOpacity] = useState(0.5);

    useEffect(() => {
      let ticking = false;

      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            let newOpacity = 0.5 - window.scrollY / 1500;
            if (newOpacity < 0) newOpacity = 0;
            setOpacity(newOpacity);
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // scroll to installation
    const handleScroll = ()=>{
      const element = document.getElementById("Installation");
      if (element){
        const yoffset = 200;
        const y = element.getBoundingClientRect().top + window.scrollY + yoffset;
        
        window.scrollTo({top: y, behavior: "smooth"})
      }
    }

    const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    };

    return ( <>
        <div className="container">
            <video src={final_cosmos} autoPlay loop muted playsInline controls={false} style={{ opacity }}/>
            <button id="ScrollToBottom" onClick={scrollToBottom}>↓</button>
            <div className="content">
                <p>Echo <br></br> Chamber</p>
                <p>A reflective skyscape for breath and intention.</p>
                <button onClick={handleScroll} >Enter</button>
            </div>
        </div>
            
    </> );
}
 
export default HeroSection;