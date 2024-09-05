import React from 'react';
import play from "../../assets/play-icon.svg";
import pause from "../../assets/pause-icon.svg";
import { useSelector, useDispatch } from 'react-redux'
import { toggleLecture } from '../../features/playlist';
const TogglePlayButton = () => {
    const playlist = useSelector(state => state.playlist)
    const dispatch = useDispatch();
    return (
        <button
            onClick={() => dispatch(toggleLecture())}
            className='bg-slate-50 w-14 h-14 shadow-md rounded-full flex items-center justify-center outline-none'>
            <img className='w-20 h-20' src={playlist.play ? pause : play} alt="togglePLay" />
        </button>
    );
};

export default TogglePlayButton;