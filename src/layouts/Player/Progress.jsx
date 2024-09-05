import React from 'react';
import { useSelector } from 'react-redux'
const Progress = () => {

    const progressData = useSelector(state => state.progress)
    function formatValue(val) {
        const currentMin = Math.trunc(val / 60)
        let currentSec = Math.trunc(val % 60)
        if (currentSec < 10) { currentSec = `0${currentSec}` }
        return `${currentMin}:${currentSec}`
    }
    const handleProgressClick = (e) => {
        const player = document.getElementById('audio-player')
        const rect = e.target.getBoundingClientRect(e)
        const width = rect.width
        const x = e.clientX - rect.left
        player.currentTime = (x / width) * progressData.totalDuration
    }

    return (
        <div className='max-w-[800px] mx-auto'>
            <div className="bg-slate-900 h-2 rounded cursor-pointer overflow-hidden"
                onClick={handleProgressClick}
            >
                <div className="bg-indigo-400 origin-left h-full pointer-events-none"
                    style={{ transform: `scaleX(${progressData.current / progressData.totalDuration})` }}>
                </div>
            </div>
            <div className="flex justify-between">
                <span>{formatValue(progressData.current)}</span>
                <span>{formatValue(progressData.totalDuration)}</span>
            </div>
        </div>
    );
};

export default Progress;