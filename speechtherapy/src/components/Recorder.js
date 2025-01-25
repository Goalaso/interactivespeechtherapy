import React, { useState, useEffect, useRef } from "react";
import VolumeMeter from "./VolumeMeter";

const Recorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    useEffect(() => {
        const handleDataAvailable = (event) => {
            audioChunksRef.current.push(event.data);
        };

        const startRecording = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
            mediaRecorderRef.current.start();
        };

        if (isRecording) {
            startRecording();
        } else if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.addEventListener("stop", () => {
                const blob = new Blob(audioChunksRef.current, { type: "audio/wav" });
                setAudioBlob(blob);
                audioChunksRef.current = [];
            });
        }
    }, [isRecording]);

    const handleStartRecording = () => {
        setIsRecording(true);
    };

    const handleStopRecording = () => {
        setIsRecording(false);
    };

    return (
        <div>
            <h2>Audio Recorder</h2>
            <button onClick={handleStartRecording} disabled={isRecording}>
                Start Recording
            </button>
            <button onClick={handleStopRecording} disabled={!isRecording}>
                Stop Recording
            </button>
            {isRecording && <VolumeMeter />}
            {audioBlob && (
                <audio controls>
                    <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
};

export default Recorder;