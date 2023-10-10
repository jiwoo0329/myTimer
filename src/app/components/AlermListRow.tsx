'use client';

import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';

interface addTimeType {
    hours: string;
    minutes: string;
    seconds: string;
}

interface PropsType {
    time: string;
    index: number;
    addAlermList: addTimeType[];
    setAlermList: Dispatch<SetStateAction<addTimeType[]>>;
}

export default function AlermListRow({
    time,
    index,
    addAlermList,
    setAlermList,
}: PropsType) {
    const [currentTime, setCurrentTime] = useState<Array<number>>([]);

    const SettingTime = time.split(':'); // [시, 분, 초] 스트링

    // let getCurrentTime = setInterval(() => {
    //     let today = new Date();
    //     setCurrentTime([
    //         today.getHours(),
    //         today.getMinutes(),
    //         today.getSeconds(),
    //     ]);
    // }, 1000);

    // useEffect(() => {
    //     console.log(currentTime, SettingTime);
    //     clearInterval(getCurrentTime);
    //     if (
    //         Number(SettingTime[0]) === currentTime[0] &&
    //         Number(SettingTime[1]) === currentTime[1] &&
    //         Number(SettingTime[2]) === currentTime[2]
    //     ) {
    //         clearInterval(getCurrentTime);
    //         console.log('알람울리기!!!');
    //     }
    // }, [currentTime]);

    const clickDelete = () => {
        addAlermList.splice(index, 1);
        setAlermList([...addAlermList]);
    };

    return (
        <tr className="border-b">
            <td className="text-start py-2">{time}</td>
            <td className="text-end py-2">
                <button
                    type="button"
                    className="border rounded px-2 py-1 bg-red-500 text-white"
                    onClick={()=>clickDelete()}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}
