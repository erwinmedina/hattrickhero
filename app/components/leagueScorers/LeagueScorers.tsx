import "./LeagueScorers.css"
import { Sriracha } from "next/font/google"

const sriracha = Sriracha({
    weight: '400',
    subsets: ['latin'],
})

interface Scorer {
    player: {
        name: string
        nationality: string
    },
    team: {
        shortName: string;
        crest: string;
    }
    playedMatches: number
    goals: number;
    assists: number;
    penalties: number;
    goalsRatio: number;
}

export default async function leagueScorers() {
    let scorers = []
    const res = await fetch('http://api.football-data.org/v4/competitions/PL/scorers?season=2023', {
        method: "GET",
        headers: {
            'X-Auth-Token': `${process.env.APIFootballKey}`
        }
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`)
    }
    scorers = await res.json();

    return (
        <div className="scorers">
            <table className="winnersTable table-sm">
                <caption className={`${sriracha.className}`}>League Scorers</caption>
                <thead className="winnersHeader bg-white border-b sticky top-0">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Nationality</th>
                        <th>Matches Played</th>
                        <th>Goals</th>
                        <th>Penalties</th>
                        <th>Assists</th>
                        <th>Goals Ratio</th>
                    </tr>
                </thead>
                <tbody>
                    {scorers.scorers.map((scorer: Scorer, index: number) => {
                        const goalsRatio = scorer.playedMatches != 0 ? 
                            scorer.goals / scorer.playedMatches : 0;
                       
                        return(
                       <tr className="winnerRows">
                            <td>{index + 1}</td>
                            <td>{scorer.player.name}</td>
                            <td>{scorer.team.shortName}</td>
                            <td>{scorer.player.nationality}</td>
                            <td>{scorer.playedMatches}</td>
                            <td>{scorer.goals}</td>
                            <td>{scorer.penalties}</td>
                            <td>{scorer.assists}</td>
                            <td>{goalsRatio.toFixed(2)}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}