import React from 'react'
import DrumPad from './assets/components/DrumPad'
import "./assets/styles/css/index.css"
import audioSamples from "./samples"



export default function App() {

  const [displayScreen, setDisplayScreen] = React.useState("")

  function triggerSample(event) {
    setDisplayScreen(event.target.id)
    event.target.firstChild.play()
  }

  
  document.addEventListener("keypress", handleKeyPress)
  function handleKeyPress(event) {
    audioSamples.find(sample => {
     if (sample.triggerKey === event.key) {
        document.getElementById(sample.id).click()

     }
    })
  }
  
  function handleKeyPress(event) {
    console.log(event.key)
    audioSamples.find(sample => {
      if (sample.triggerKey === event.key) {
         document.getElementById(sample.id).click()
      }
     })
  }
  return (
    <div className="App" id="drum-machine">

      <div className="controls-container">

        <p id="display">{displayScreen}</p>  

      </div>

      <div className="sample-grid">
        {
          audioSamples.map((sample, idx) => {
            return <DrumPad 
                      key={idx} 
                      sample={sample} 
                      triggerSample={triggerSample}
                      handleKeyPress={handleKeyPress}
                    />
            
          })
        }
      </div>

    </div>
  )
}
