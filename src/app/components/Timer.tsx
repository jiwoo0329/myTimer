'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getTimeList, changeTimerForm } from '../utils/Time';
interface addTimeType {
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Timer() {
    const timerRef = useRef<any>(null);
    const [currentTime, setCurrentTime] = useState<addTimeType>({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const timeList = getTimeList();
    const [isStart, setIsStart] = useState(false);

    const clickStop = () => {
        clearInterval(timerRef.current);
    };

    const clickReset = () => {
        setIsStart(false);
        setCurrentTime({
            hours: 0,
            minutes: 0,
            seconds: 0,
        });
        clearInterval(timerRef.current);
    };

    const submitForm = (e: any) => {
        e.preventDefault();

        let time: addTimeType = {
            hours: e.target['hours'].value,
            minutes: e.target['minutes'].value,
            seconds: e.target['seconds'].value,
        };
        setIsStart(true);

        let seconds =
            Number(time.hours) * 60 * 60 +
            Number(time.minutes) * 60 +
            Number(time.seconds);

        timerRef.current = setInterval(() => {
            seconds -= 1;

            if (seconds > 0) {
                let newObj = {
                    hours: Math.floor((seconds / (60 * 60)) % 24),
                    minutes: Math.floor((seconds / 60) % 60),
                    seconds: Math.floor(seconds % 60),
                };

                setCurrentTime(newObj);
            } else {
                setIsStart(false);
                clearInterval(timerRef.current);
                alert('시간초과!');
            }
        }, 1000);
    };

    return (
        <>
            <section className="text-center">
                {/* 숫자 선택 */}
                <form className="py-8" onSubmit={(e) => submitForm(e)}>
                    <div className="flex mb-10">
                        {isStart ? (
                            <>
                                <input
                                    name="hours"
                                    className="text-center w-1/3"
                                    value={
                                        changeTimerForm(
                                            currentTime.hours,
                                            currentTime.minutes,
                                            currentTime.seconds
                                        ).hours
                                    }
                                    readOnly
                                />
                                <span className="mx-1">:</span>
                                <input
                                    name="minutes"
                                    className="text-center w-1/3"
                                    value={
                                        changeTimerForm(
                                            currentTime.hours,
                                            currentTime.minutes,
                                            currentTime.seconds
                                        ).minutes
                                    }
                                    readOnly
                                />
                                <span className="mx-1">:</span>
                                <input
                                    name="seconds"
                                    className="text-center w-1/3"
                                    value={
                                        changeTimerForm(
                                            currentTime.hours,
                                            currentTime.minutes,
                                            currentTime.seconds
                                        ).seconds
                                    }
                                    readOnly
                                />
                            </>
                        ) : (
                            <>
                                <select
                                    name="hours"
                                    className="w-1/3 px-2 py-1 border rounded"
                                >
                                    {timeList.hour.map((item, idx) => (
                                        <option key={idx} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                                <span className="mx-1">:</span>
                                <select
                                    name="minutes"
                                    className="w-1/3 px-2 py-1 border rounded"
                                >
                                    {timeList.minute.map((item, idx) => (
                                        <option key={idx} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                                <span className="mx-1">:</span>
                                <select
                                    name="seconds"
                                    className="w-1/3 px-2 py-1 border rounded"
                                >
                                    {timeList.minute.map((item, idx) => (
                                        <option key={idx} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </>
                        )}
                    </div>
                    <div className="flex justify-around">
                        {isStart && (
                            <>
                                <button
                                    type="button"
                                    className="ms-1 border rounded px-6 py-2 bg-red-500 text-white"
                                    onClick={() => clickStop()}
                                >
                                    Stop
                                </button>
                                <button
                                    type="reset"
                                    className="ms-1 border rounded px-6 py-2 bg-green-600 text-white"
                                    onClick={() => clickReset()}
                                >
                                    Reset
                                </button>
                            </>
                        )}
                        <button
                            type="submit"
                            className="ms-1 border rounded px-6 py-2 bg-blue-500 text-white"
                        >
                            Start
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}
