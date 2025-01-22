import React, { useEffect, useRef, useState } from "react";

const VolumeMeter = ({ stream }) => {
    const [volume, setVolume] = useState(0);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const dataArrayRef = useRef(null);

    useEffect(() => {
        if (stream) {
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            analyserRef.current = audioContextRef.current.createAnalyser();
            const source = audioContextRef.current.createMediaStreamSource(stream);
            source.connect(analyserRef.current);
            analyserRef.current.fftSize = 2048;
            dataArrayRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);

            const getVolume = () => {
                analyserRef.current.getByteFrequencyData(dataArrayRef.current);
                const sum = dataArrayRef.current.reduce((a, b) => a + b, 0);
                const average = sum / dataArrayRef.current.length;
                setVolume(average);
                requestAnimationFrame(getVolume);
            };

            getVolume();
        }

        return () => {
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, [stream]);

    return (
        <div>
            <h2>Volume Meter</h2>
            <p>Volume: {volume}</p>
            <div style={{ height: '20px', width: `${volume}px`, backgroundColor: 'green' }} />
        </div>
    );
};

export default VolumeMeter;