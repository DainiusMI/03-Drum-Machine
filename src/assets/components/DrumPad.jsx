import React from "react";

export default function DrumPad(props) {
    const sample = props.sample
    return (
        <div
            id={sample.id}
            className="drum-pad"
            onClick={props.triggerSample}
        >
                <audio 
                    id={sample.triggerKey}
                    src={sample.url} 
                    className="clip"
                />

        {sample.triggerKey}</div>
    )
}