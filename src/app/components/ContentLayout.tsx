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
            {typeNum === 0 &&<Timer/>}
            {typeNum === 1 &&<StopWatch/>}
            {typeNum === 2 && <Alerm/>}
        </>
    );
}
