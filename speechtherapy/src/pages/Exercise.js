import React, { useState } from "react";
import Recorder from "../components/Recorder";
import AudioPlayer from "../components/AudioPlayer";
import VolumeMeter from "../components/VolumeMeter";

const Exercise = () => {
    const [audioBlob, setAudioBlob] = useState(null);
    const [stream, setStream] = useState(null);
    const [volume, setVolume] = useState(0);

    const handleRecordingComplete = (blob) => {
        console.log("Recording complete, audioBlob:", blob);
        setAudioBlob(blob);
    };

    const handleStream = (stream) => {
        console.log("Stream in Exercise component:", stream);
        setStream(stream);
    };

    const handleVolumeChange = (volume) => {
        setVolume(volume);
    };

    return (
        <div className="Exercise">
            <Recorder onRecordingComplete={handleRecordingComplete} onStream={handleStream} onVolumeChange={handleVolumeChange} />
            <VolumeMeter volume={volume} stream={stream}/>
            {audioBlob && <AudioPlayer audioBlob={audioBlob} />}
        </div>
    );
};

export default Exercise;