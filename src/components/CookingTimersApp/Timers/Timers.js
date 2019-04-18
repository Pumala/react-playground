import React from 'react';
import Timer from '../Timer/Timer';

const Timers = ({ timers = [], startTimer, pauseTimer, resetTimer, increaseTime, decreaseTime, updateTimerName }) => {

    return (
        <div>
            {
                timers.length > 0 && timers.map((timer, idx) => (
                    <Timer 
                        key={idx}
                        timer={timer}
                        startTimer={startTimer}
                        pauseTimer={pauseTimer}
                        resetTimer={resetTimer}
                        increaseTime={increaseTime}
                        decreaseTime={decreaseTime}
                        updateTimerName={updateTimerName}
                    />
                ))
            }
        </div>
    )
};

export default Timers;