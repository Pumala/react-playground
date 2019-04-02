import React, { useState } from 'react';
import Timers from '../Timers/Timers.js';
import uuid from 'uuid';
import './CookingTimers.scss';

const CookingTimersPage = () => {

    const title = 'Cooking Timers';

    // modes: started, paused, reset
    const initialState = [
        {
            id: uuid(),
            name: 'eggs',
            min: 5,
            sec: 30,
            originalMin: 5,
            originalSec: 30,
            mode: 'paused',
            intervalFuncName: ''
        },
        {
            id: uuid(),
            name: 'grits',
            min: 3,
            sec: 0,
            originalMin: 3,
            originalSec: 0,
            mode: 'paused',
            intervalFuncName: ''
        },
        {
            id: uuid(),
            name: 'bacon',
            min: 2,
            sec: 15,
            originalMin: 2,
            originalSec: 15,
            mode: 'paused',
            intervalFuncName: ''
        }
    ];

    const [timers, setTimers] = useState(initialState);

    const startTimer = ({ id, name, min, sec, mode }) => {

        if (name) {
            console.log('starting timer....', name);

            let setIntervalId = setInterval(() => {
                setTimers(cookingTimers => {
                    
                    const timers = cookingTimers.map(timer => {
                        if (timer.id === id) {
                            const { sec, min } = timer;
                            if (min === 0 && sec === 0) {
                                console.log('MATCH!!');
                                clearTimer(timer.intervalFuncName);
                                return {
                                    ...timer,
                                    mode: 'reset',
                                    intervalFuncName: ''
                                };
                            }
                            return {
                                ...timer,
                                min: sec === 0 && min >= 1 ? min - 1 : min,
                                sec: sec === 0 && min === 0 ? 0 : sec === 0 ? 59 : sec - 1,
                                mode: 'started',
                                intervalFuncName: setIntervalId
                            }
                        }
                        return timer;
                    })
                    return timers;
                });

            }, 1000);

        }

    }

    const updateTimerName = (id, name) => {
        console.log('setting timer name...', name);
        setTimers(cookingTimers => {
            const timers = cookingTimers.map(timer => {
                if (timer.id === id) {
                    return {
                        ...timer,
                        name
                    }
                }
                return timer;
            });
            return timers;
        });
    };

    const addTimer = () => {
        console.log('adding new timer...');

        setTimers(cookingTimers => {
            console.log('PAST TIMERS', cookingTimers);
            const timers = [
                ...cookingTimers,
                {
                    id: uuid(),
                    name: 'Edit Name',
                    min: 5,
                    sec: 0,
                    originalMin: 5,
                    originalSec: 0,
                    mode: 'paused',
                    intervalFuncName: ''
                }
            ]

            return timers;
        });
    }

    const clearTimer = (intervalFuncName) => {
        console.log('clearing timer....', intervalFuncName);
        clearInterval(intervalFuncName);
    };

    const resetTimer = ({id, intervalFuncName}) => {
        console.log('resetting timer....', intervalFuncName);
        clearInterval(intervalFuncName);

        setTimers(cookingTimers => {
            const timers = cookingTimers.map(timer => {
                if (timer.id === id) {
                    return {
                        ...timer,
                        min: timer.originalMin,
                        sec: timer.originalSec,
                        mode: 'paused',
                        intervalFuncName: ''
                    }
                }
                return timer;
            })
            return timers;
        });


    };

    const pauseTimer = ({id, intervalFuncName}) => {
        console.log('pausing timer....', intervalFuncName);
        clearInterval(intervalFuncName);

        setTimers(cookingTimers => {
            const timers = cookingTimers.map(timer => {
                if (timer.id === id) {
                    return {
                        ...timer,
                        mode: 'paused'
                    }
                }
                return timer;
            })
            return timers;
        });

    };

    const increaseTime = (timerId) => {
        console.log('increasing time....');
        setTimers(cookingTimers => {
            const timers = cookingTimers.map(timer => {
                const { id, min, sec } = timer;
                if (id === timerId) {
                    return {
                        ...timer,
                        min: sec >= 30 ? min + 1 : min,
                        sec: sec + 30 > 59 ? sec - 30 : sec + 30
                    }
                }
                return timer;
            })
            return timers;
        });
    };

    const decreaseTime = (timerId) => {
        console.log('decreasing time....');
        setTimers(cookingTimers => {
            const timers = cookingTimers.map(timer => {
                const { id, min, sec } = timer;
                if (id === timerId) {
                    return {
                        ...timer,
                        min: min === 0 ? 0 : sec <= 29 ? min - 1: min,
                        sec: min === 0 && sec <= 29 ? 0 : sec - 30 < 0 ? 60 - (30 - sec) : sec - 30
                    }
                }
                return timer;
            })
            return timers;
        });
    }

    return (
        <div className="cooking-timers-app">
            <div className="content">
                <h1>{title}</h1>
                <button
                    onClick={() => addTimer()}
                >
                <span>+</span>
                </button>
                <Timers
                timers={timers}
                startTimer={startTimer}
                pauseTimer={pauseTimer}
                resetTimer={resetTimer}
                increaseTime={increaseTime}
                decreaseTime={decreaseTime}
                updateTimerName={updateTimerName}
            />
            </div>
        </div>
    )
};

export default CookingTimersPage;