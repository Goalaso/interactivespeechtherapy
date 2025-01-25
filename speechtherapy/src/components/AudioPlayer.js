import React, { useRef } from "react";

const AudioPlayer = ({ audioBlob }) => {
    const audioRef = useRef(null);

    return (
        <div>
            <h2>Playback Recorded Audio</h2>
            {audioBlob && (
                <audio ref={audioRef} controls>
                    <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
};

export default AudioPlayer;