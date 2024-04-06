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

    const res = await fetch('https://api.football-data.org/v4/competitions/PL/standings', {
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
            <MainButtons/>
            <h1>{standings.competition.name}</h1>
            <table className="table table-fixed border-separate border border-slate-500 max-w-sm h-3/6">
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
                        <tr className='hover'>
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
        </>
    )
}

export default StandingsPage

