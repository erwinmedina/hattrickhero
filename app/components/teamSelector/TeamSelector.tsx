"use client"
import React from 'react'

interface Team {
    id: number;
    name: string;
    shortName: string;
    tls: string;
    crest: string;
}

interface TeamSelectorProps {
    teams: any;
}

const TeamSelector: React.FC<TeamSelectorProps> = ({ teams }) => {
    const handleTeamChange = (e: any) => {
        const newTeam = e.target.value;
        console.log(newTeam)
    };

    return (
        <form className="max-w-sm m-5 mx-auto">
            <select id="matchday" onChange={handleTeamChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                {teams.teams.map((team: Team) => (
                    <option key={team.id} value={team.id}>{team.name}</option>
                ))}
            </select>
        </form>
    );
}

export default TeamSelector
