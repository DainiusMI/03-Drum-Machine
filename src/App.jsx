import React from 'react'


import "./assets/styles/css/index.css"

import audioSamples from "./samples"

export default function App() {


  const [displayScreen, setDisplayScreen] = React.useState("DISPLAY SCREEN")

  function triggerSample(event) {
    setDisplayScreen(event.target.id)
    event.target.firstChild.play()
  }

  document.addEventListener("keypress", handleKeyPress)
  function handleKeyPress(event) {
    audioSamples.find(sample => {
     if (sample.triggerKey === event.key) {
        document.getElementById(event.key).play()
        setDisplayScreen(sample.id)
     }
    })
  }

  return (
    <div className="App" id="drum-machine">
      <div className="sample-grid">
        {
          audioSamples.map((sample, idx) => {
            return (
              <div
                key={idx}
                id={sample.id}
                className="drum-pad"
                onClick={triggerSample}
              >
                <audio 
                  id={sample.triggerKey}
                  src={sample.url} 
                  className="clip"
                />
              {sample.triggerKey}</div>
            )
          })
        }
      </div>
      <div className="controls-container">

        <div id="display">{displayScreen}</div>  

      </div>
    </div>
  )
}
