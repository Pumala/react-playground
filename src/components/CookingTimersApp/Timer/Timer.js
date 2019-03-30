import React, { useState } from 'react';
import './Timer.css';

const Timer = ({ timer, startTimer, pauseTimer, resetTimer, increaseTime, decreaseTime, updateTimerName }) => {

    console.log('inside timer comp:', timer);

    const { id, name, min, sec, mode, intervalFuncName } = timer;

    const [timerName, setTimerName] = useState({
        updatedName: name,
        editNameMode: false
    });

    const editNameMode = (e) => {
        e.persist();
        console.log('editing name:', e);
        setTimerName({
            ...timerName,
            editNameMode: true
        });
    };

    const editNameChangeHandler = (e) => {

        e.persist();
        let updatedName = e.target.value;

        console.log('before:',timerName);

        setTimerName({
            ...timerName,
            updatedName: updatedName
        });

        console.log('updated Name change:', e);
        console.log('after:',timerName);
    };

    const submitNameChange = (e) => {
        e.persist();

        console.log('keycode e', e);

        let keyCode = e.keyCode;

        if (keyCode === 13) {
            console.log('ready to submit');
            updateTimerName(id, timerName.updatedName);

            setTimerName({
                ...timerName,
                editNameMode: false
            })
        }

        console.log('submitNameChange....', timerName.updatedName);
    }

    return (
        <div>
            <div>
                {
                    !timerName.editNameMode &&
                    <h4
                        onClick={(e) => editNameMode(e)}
                    >{name}</h4>
                }
                {
                    timerName.editNameMode && 
                    <input 
                        value={timerName.updatedName}
                        onChange={(e) => editNameChangeHandler(e)}
                        onKeyUp={(e) => submitNameChange(e)}
                    type="text" />
                }
            </div>
            <span>{min}:{sec < 10 ? 0 : ''}{sec}</span>
            {
                mode === 'paused' && <button
                    onClick={() => startTimer(timer) }    
                >Start</button>
            }
            {
                mode === 'started' && <button
                    onClick={() => pauseTimer(timer) }    
                >Pause</button>
            }
            <button
                onClick={() => resetTimer(timer)}
            >Reset</button>
            <button
                onClick={() => increaseTime(id)}
            >+30</button>
            <button
                onClick={() => decreaseTime(id)}
                disabled={mode === 'reset'}
            >-30</button>
        </div>
    )

};

export default Timer;