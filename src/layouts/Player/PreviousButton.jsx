import React from 'react';
import prevIcon from '../../assets/prev-Icon.svg'
import { useDispatch, useSelector } from 'react-redux';
import { previousSong } from '../../features/playlist';
const PreviousButton = () => {

    const playlist = useSelector(state => state.playlist)
    const dispatch = useDispatch()
    function handleClick() {
        if (playlist.songs) {
            const nextIndex = playlist.songs.findIndex(songs => songs.id === playlist.currentMusicId) - 1
            dispatch(previousSong(nextIndex))
        }
    }
    return (
        <button className='w-9 h-9 bg-slate-400 mr-4 rounded-full flex justify-center items-center'
            onClick={handleClick}>
            <img src={prevIcon} alt="" className='w-5 h-5' /></button>
    );
};

export default PreviousButton;