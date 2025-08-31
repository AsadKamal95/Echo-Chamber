import "./Installation.css"
import breathing from "./Breathing.webm"

const Installation = () => {
    return ( <>
        <div className="Installation-container" id="Installation">
            <div className="Installation-content">
                <div className="left">
                    <p>The Echo Chamber is an intimate, interactive space designed for stillness
                        and reflection. Visitors enter a softly lit environment where sound and light
                        respond to breath and voice. A microphone invites you to speak an
                        intention, a word, or a whisper into the quiet. This offering transforms into
                        ambient echoes—stretched, layered, and diffused—becoming part of a
                        living soundscape. Subtle visuals, pulsing in time with the breath, surround
                        the participant, creating a meditative ritual that unfolds between the body
                        and the system.
                    </p>
                    <p>The Echo Chamber is a response to the noise and acceleration of digital life
                        —a sanctuary for grounding in the midst of constant connectivity. It
                        reimagines an “echo chamber” not as a trap of repetition, but as a
                        meditative space for presence and care. Through breath, voice, and sound,
                        the installation invites participants to slow down, speak an intention, and
                        feel it return as resonance—softened, stretched, and transformed. This act
                        becomes a digital ritual for well-being: a moment to listen inward, release
                        tension, and find stillness through interaction. The project asks how
                        technology can nurture rather than demand, offering not feedback loops of
                        anxiety, but gentle cycles of reflection and calm.
                    </p>    
                </div>
                <div className="right">
                    <video src={breathing} autoPlay loop muted playsInline controls={false} style={{ opacity:"0.5" }}/>
                </div>
                
            </div>
        </div>
    </> );
}
 
export default Installation;