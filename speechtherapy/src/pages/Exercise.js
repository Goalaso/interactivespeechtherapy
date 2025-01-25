import React, { useState, useEffect } from "react";
import Recorder from "../components/Recorder";
import AudioPlayer from "../components/AudioPlayer";
import VolumeMeter from "../components/VolumeMeter";

const Exercise = () => {
    const [audioBlob, setAudioBlob] = useState(null);
    const [stream, setStream] = useState(null);

    const handleRecordingComplete = (blob) => {
        setAudioBlob(blob);
    };

    useEffect(() => {
        const getMedia = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                setStream(stream);
            } catch (error) {
                console.error("Error accessing media devices.", error);
            }
        };

        getMedia();
    }, []);

    return (
        <div className="App">
            <h1>Audio Recorder</h1>
            <Recorder onRecordingComplete={handleRecordingComplete} stream={stream} />
            {audioBlob && <AudioPlayer audioBlob={audioBlob} />}
            {stream && <VolumeMeter stream={stream} />}
        </div>
    );
};

export default Exercise;