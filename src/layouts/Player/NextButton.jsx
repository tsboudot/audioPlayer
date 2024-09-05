import React from 'react';
import nextIcon from '../../assets/next-Icon.svg'

import { useSelector, useDispatch } from 'react-redux';
import { nextSong } from '../../features/playlist'

const NextButton = () => {
    const playlist = useSelector(state => state.playlist)
    const dispatch = useDispatch()
    function handleClick() {
        if (playlist.songs) {
            const nextIndex = playlist.songs.findIndex(songs => songs.id === playlist.currentMusicId) + 1
            dispatch(nextSong(nextIndex))
        }
    }
    return (
        <button className='w-9 h-9 bg-slate-400 ml-4  rounded-full flex justify-center items-center'
            onClick={handleClick}>
            <img src={nextIcon} alt="" className='w-5 h-5' /></button>
    );
};

export default NextButton;