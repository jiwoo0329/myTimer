'use client';

import React, { useState } from 'react';
import { increment, decrement } from '../redux/features/contentSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../redux/store';

const BoxType = [
    { type: 'timer', name: '타이머' },
    { type: 'stopWatch', name: '스톱워치' },
    { type: 'alerm', name: '알람' },
];

export default function Title() {
    const firstContentTypeNum = useAppSelector(
        (state) => state.contentSlice.value
    );
    const [typeNum, setTypeNum] = useState(firstContentTypeNum);

    const dispatch = useDispatch<AppDispatch>();

    const preTitle = () => {
        if (typeNum > 0 && 0 <= typeNum - 1) setTypeNum(typeNum - 1);

        dispatch(decrement());
    };
    const nextTitle = () => {
        if (typeNum < 3 && BoxType.length > typeNum + 1)
            setTypeNum(typeNum + 1);

        dispatch(increment());
    };
    return (
        <h2 className="flex justify-between">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={() => {
                    preTitle();
                }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                />
            </svg>
            {BoxType[typeNum].name}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={() => {
                    nextTitle();
                }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
            </svg>
        </h2>
    );
}
