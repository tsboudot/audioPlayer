import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fillDurationVariables, updateProgress } from "../features/progress";

import React from 'react';

const Player = () => {
    const dispatch = useDispatch();
    const playlist = useSelector(state => state.playlist);
    const audioRef = useRef();

    function handleLoadedData(e) {
        if (playlist.songs) {
            dispatch(fillDurationVariables({
                currentTime: e.target.currentTime,
                totalDuration: e.target.duration
            }));
        }
    }

    function handleTimeUpdate(e) {
        dispatch(updateProgress(e.target.currentTime));
    }

    useEffect(() => {
        if (playlist.songs && playlist.play) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [playlist]);

    return (
        <audio
            id="audio-player"
            src={playlist.songs?.find(obj => obj.id === playlist.currentMusicId).url}
            ref={audioRef}
            onLoadedData={handleLoadedData}  // Utilise le bon événement HTML5
            onTimeUpdate={handleTimeUpdate}  // Idem ici
        />
    );
};

export default Player;
