import React, { useState } from 'react';
import './Timer.scss';

const Timer = ({ timer, startTimer, pauseTimer, resetTimer, increaseTime, decreaseTime, updateTimerName }) => {

    const { id, name, min, sec, mode, intervalFuncName } = timer;

    const [timerName, setTimerName] = useState({
        updatedName: name,
        editNameMode: false
    });

    const editNameMode = (e) => {
        e.persist();

        setTimerName({
            ...timerName,
            editNameMode: true
        });
    };

    const editNameChangeHandler = (e) => {

        e.persist();
        let updatedName = e.target.value;

        setTimerName({
            ...timerName,
            updatedName: updatedName
        });

    };

    const submitNameChange = (e) => {
        e.persist();

        let keyCode = e.keyCode;

        if (keyCode === 13) {
            updateTimerName(id, timerName.updatedName);

            setTimerName({
                ...timerName,
                editNameMode: false
            })
        }

    }

    return (
        <div 
            className="timer-group"
        >
            <div>
                {
                    !timerName.editNameMode &&
                    <h4
                        className="timer-name"
                        onClick={(e) => editNameMode(e)}
                    >{name}</h4>
                }
                {
                    timerName.editNameMode && 
                    <input 
                        className="timer-name-edit"
                        value={timerName.updatedName}
                        onChange={(e) => editNameChangeHandler(e)}
                        onKeyUp={(e) => submitNameChange(e)}
                        maxlength="17"
                    type="text" />
                }
                <span
                    className="timer-clock"
                >{min}:{sec < 10 ? 0 : ''}{sec}</span>
            </div>
            <div 
                className="buttons-timer-group"
            >
            {
                mode === 'paused' && <button
                    className="button-timer-adj start"
                    onClick={() => startTimer(timer) }    
                >Start</button>
            }
            {
                mode === 'started' && <button
                    className="button-timer-adj pause"
                    onClick={() => pauseTimer(timer) }    
                >Pause</button>
            }
            <button
                className="button-timer-adj reset"
                onClick={() => resetTimer(timer)}
            >Reset</button>
            <button
                className="button-timer-adj increase"
                onClick={() => increaseTime(id)}
            >+30s</button>
            <button
                className="button-timer-adj decrease"
                onClick={() => decreaseTime(id)}
                disabled={mode === 'reset'}
            >-30s</button>
            </div>
        </div>
    )

};

export default Timer;