import React from 'react'
import Navbar from '../components/navbar/Navbar';
import MainButtons from '../components/mainButtons/MainButtons';
import "./page.css";

interface Position {
    position: number;
    team: {
        id: number;
        name: string;
        shortName: string;
        tla: string;
        crest: string;
    };
    won: number;
    draw: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    points: number;
}

const StandingsPage = async () => {
    let standings = [];

    const res = await fetch('https://api.football-data.org/v4/competitions/PL/standings?season=2023', {
        method: "GET",
        headers: {
            'X-Auth-Token': `${process.env.APIFootballKey}`
        }
    });
    if (res.ok) {
        standings = await res.json();
    } else {
        console.error("failed to fetch data:", res.statusText);
    }

    return (
        <>
            <Navbar/>
            {/* <MainButtons/> */}
            <div className="standingsTableContainer overflow-x-auto">
                <div className="compName">
                    <h1>{standings.competition.name}</h1>
                    <form className="standingsSeason max-w-sm mx-auto m-5">
                        <select id="season" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option key={2024} value={2024}>Season 2024</option>
                            <option key={2023} value={2024}>Season 2023</option>
                            <option key={2022} value={2024}>Season 2022</option>
                            <option key={2021} value={2024}>Season 2021</option>
                            <option key={2020} value={2024}>Season 2020</option>
                            <option key={2019} value={2024}>Season 2019</option>
                        </select>
                     </form>
                </div>
                <table className="standingsTable table border-separate border border-slate-500 h-3/6">
                    <thead>
                        <tr>
                            <th className="w-2">#</th>
                            <th className="w-40">Team</th>
                            <th className="p-0">W</th>
                            <th className="p-0">D</th>
                            <th className="p-0">L</th>
                            <th className="p-0">GF</th>
                            <th className="p-0">GA</th>
                            <th className="p-0">GD</th>
                            <th className="p-0">Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standings.standings[0].table.map((position: Position) => (
                            <tr className="hover">
                                <td className="p-0">{position.position}</td>
                                <td className="p-0">{position.team.shortName}</td>
                                <td className="p-0">{position.won}</td>
                                <td className="p-0">{position.draw}</td>
                                <td className="p-0">{position.lost}</td>
                                <td className="p-0">{position.goalsFor}</td>
                                <td className="p-0">{position.goalsAgainst}</td>
                                <td className="p-0">{position.goalDifference}</td>
                                <td className="p-0">{position.points}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default StandingsPage

