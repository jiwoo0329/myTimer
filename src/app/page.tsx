import React from 'react';
import Title from './components/Title';
import Content from './components/ContentLayout';

export default function Home() {
    return (
        <main className="relative w-full h-screen bg-gray-200">
            <div className="absolute p-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-1/3  rounded-xl">
                <Title />
                <Content />
            </div>
        </main>
    );
}
