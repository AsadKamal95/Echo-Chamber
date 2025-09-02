import "./Footer.css"

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const sendEmail = () => {
        window.location.href = "mailto:echochambertheexperience@gmail.com"
    }
    const goToInstagram = () => {
        
        window.open("https://www.instagram.com/echo.chamber.the.experience?igsh=MTNwZXIwMHVhZXc4dQ%3D%3D&utm_source=qr", "_blank", "noopener,noreferrer")
    };
    const goToEcho = () => {
        window.open("https://medium.com/@ridakamaldesign", "_blank", "noopener,noreferrer")
    }

    return ( <>
        <div className="footer-container">
            <div className="footer-content">
                <div className="top">
                    <div className="left">
                        <p>Send an Echo</p>
                        <p>The echo doesn't end here. Your words, your thoughts they can join the resonance.</p>
                        <div className="contact">
                            <button onClick={sendEmail} >Email</button>
                            <button onClick={goToInstagram}>Instagram</button>
                        </div>  
                    </div>
                    <div className="right">
                        <div className="bubble-l"></div>
                        <div className="bubble-r"></div>
                        <button onClick={goToEcho} >Enter the Archive of Echoes</button>
                    </div>
                </div>
                <div className="bottom">
                    <button id="ScrollToTop" onClick={scrollToTop}>&uarr;</button>
                    <p>MA Interactive Media Practice - Final Project</p>
                </div>
            </div>
        </div>
    </> );
}
 
export default Footer;