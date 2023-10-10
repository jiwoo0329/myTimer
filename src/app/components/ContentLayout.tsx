'use client';

import React from 'react';
import { useAppSelector } from '../redux/store';
import Alerm from './Alerm';
import Timer from './Timer';
import StopWatch from './StopWatch';

export default function ContentLayout() {

    let typeNum = useAppSelector((state)=>state.contentSlice.value);

    return (
        <>
            {typeNum === 0 && <Alerm/>}
            {typeNum === 1 &&<Timer/>}
            {typeNum === 2 &&<StopWatch/>}
        </>
    );
}
