import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getMusicsData } from '../features/playlist';
import { changeSong } from "../features/playlist";
const Playlist = () => {
    const playlist = useSelector(state => state.playlist)
    const dispatch = useDispatch()
    if (!playlist.songs) { dispatch(getMusicsData()) }
    return (
        <ul className="mt-4 pb-[300px]">
            {playlist?.songs?.length && playlist.songs.map(song => (
                <li
                    onClick={() => dispatch(changeSong(song.id))}
                    key={song.id} className='p-2 border-2 font-semibold bg-indigo-100 hover:bg-indigo-200 text-slate-800 mb-3 cursor-pointer'>
                    <span>{song.title} -</span>
                    <span>{song.artist} </span>

                </li>
            ))
            }
        </ul >
    );
};

export default Playlist;