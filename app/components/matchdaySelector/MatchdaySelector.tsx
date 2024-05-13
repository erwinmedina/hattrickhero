"use client"
import React, { useState } from 'react';
import { redirect } from 'next/navigation';

const MatchdaySelector = () => {

    const handleMatchdayChange = (e: any) => {
        const newMatchday = e.target.value;
        console.log(newMatchday);
        redirect(`{/matches?matchday=${newMatchday}}`)
    };

    return (
        <form className="max-w-sm mx-auto m-5">
            <select id="matchday" onChange={handleMatchdayChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {[...Array.from(Array(38).keys())].map((matchday) => (
                    <option key={matchday + 1} value={matchday + 1}>Matchday {matchday + 1}</option>
                ))}
            </select>
        </form>
    );
};

export default MatchdaySelector
