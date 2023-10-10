'use client';

import React, { useState } from 'react';
import { getTimeList } from '../utils/Time';
import AlermListRow from './AlermListRow';

interface addTimeType {
    hours: string;
    minutes: string;
    seconds: string;
}

export default function Alerm() {
    const timeList = getTimeList();

    const [addAlermList, setAlermList] = useState<addTimeType[]>([]);

    const addAlerm = (e: any) => {
        e.preventDefault();

        let time: addTimeType = {
            hours: e.target['hours'].value,
            minutes: e.target['minutes'].value,
            seconds: e.target['seconds'].value,
        };
        setAlermList([...addAlermList, time]);
        e.target.reset();
    };

    return (
        <section className="text-center">
            {/* 숫자 선택 */}
            <form className="py-8" onSubmit={addAlerm}>
                <select name="hours" className="px-2 py-1 border rounded">
                    {timeList.hour.map((item, idx) => (
                        <option key={idx} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <span className="mx-1">:</span>
                <select name="minutes" className="px-2 py-1 border rounded">
                    {timeList.minute.map((item, idx) => (
                        <option key={idx} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <span className="mx-1">:</span>
                <select name="seconds" className="px-2 py-1 border rounded">
                    {timeList.minute.map((item, idx) => (
                        <option key={idx} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                    className="ms-1 border rounded px-6 py-2 bg-blue-500 text-white"
                >
                    Add
                </button>
            </form>

            {/* 리스트 */}
            <div className="flex-col">
                <table className="w-full">
                    <tbody>
                        {addAlermList.map((item, idx) => (
                            <React.Fragment key={idx}>
                                <AlermListRow
                                    time={`${item.hours}:${item.minutes}:${item.seconds}`}
                                    index={idx}
                                    addAlermList={addAlermList}
                                    setAlermList={setAlermList}
                                />
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
