'use client';

import React, { useState, useRef } from 'react';
import { changeTimerForm } from '../utils/Time';
interface addTimeType {
    hours: number;
    minutes: number;
    seconds: number;
}

export default function StopWatch(){

    const timerRef = useRef<any>(null);
    const [currentTime, setCurrentTime] = useState<addTimeType>({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [wrapList, setWrapList] = useState<addTimeType[]>([]);
    const [isStart, setIsStart] = useState(false);

    const clickStart = () => {
        setIsStart(true);

        let seconds = 0;
        timerRef.current = setInterval(() => {
            seconds += 1;

            let newObj = {
                hours: Math.floor((seconds / (60 * 60)) % 24),
                minutes: Math.floor((seconds / 60) % 60),
                seconds: Math.floor(seconds % 60),
            };

            setCurrentTime(newObj);
        }, 1000);
    };
    const clickStop = () => {
        setIsStart(false);
        setCurrentTime({
            hours: 0,
            minutes: 0,
            seconds: 0,
        })
        clearInterval(timerRef.current);
    };
    const clickWrap = () => {
        setWrapList([...wrapList, currentTime]);
    };


    return(
         <>
            <section className="text-center">
                {/* 숫자 선택 */}
                <form className="py-8">
                    <div className="flex mb-10">
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
                    </div>
                    <div className="flex justify-around">
                        {isStart ? (
                            <>
                                <button
                                    type="button"
                                    className="ms-1 border rounded px-6 py-2 bg-yellow-400 text-white"
                                    onClick={() => clickWrap()}
                                >
                                    Wrap
                                </button>
                                <button
                                    type="button"
                                    className="ms-1 border rounded px-6 py-2 bg-red-500 text-white"
                                    onClick={() => clickStop()}
                                >
                                    Stop
                                </button>
                            </>
                        ) : (
                            <button
                                type="button"
                                className="ms-1 border rounded px-6 py-2 bg-blue-500 text-white"
                                onClick={() => clickStart()}
                            >
                                Start
                            </button>
                        )}
                    </div>
                </form>

                {/* 리스트 */}
                {wrapList.length > 0 && (
                    <div className="flex-col">
                        <table className="w-full">
                            <thead className="border-b">
                                <tr>
                                    <td>No.</td>
                                    <td>time</td>
                                </tr>
                            </thead>
                            <tbody>
                                {wrapList.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>
                                            {`${
                                                changeTimerForm(
                                                    item.hours,
                                                    item.minutes,
                                                    item.seconds
                                                ).hours
                                            }:${
                                                changeTimerForm(
                                                    item.hours,
                                                    item.minutes,
                                                    item.seconds
                                                ).minutes
                                            }:${
                                                changeTimerForm(
                                                    item.hours,
                                                    item.minutes,
                                                    item.seconds
                                                ).seconds
                                            }`}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </>
    )
}