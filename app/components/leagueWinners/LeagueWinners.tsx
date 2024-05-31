import "./LeagueWinners.css"
import { Sriracha } from "next/font/google"

const sriracha = Sriracha({
    weight: '400',
    subsets: ['latin'],
})

interface Season {
    startDate: string;
    endDate: string;
    winner: {
        name: string;
        shortName: string;
        tla: string;
        crest: string;

    }
}

interface WinnersResponse {
    seasons: Season[];
}

export default async function leagueWinners() {
    const res = await fetch('https://api.football-data.org/v4/competitions/PL/', {
        method: "GET",
        headers: {
            'X-Auth-Token': `${process.env.APIFootballKey}`
        }
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`)
    }
    const winnersResponse: WinnersResponse = await res.json();
    const currentYear = new Date().getFullYear();

    const filteredSeasons = winnersResponse.seasons.filter((season: Season) => {
        const endDateYear = new Date(season.endDate).getFullYear();
        return endDateYear < currentYear;
    })
    const sortedSeasons = filteredSeasons.sort((a: Season, b: Season) => {
        return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
    })
    const last10Seasons = sortedSeasons.slice(0,10);

    return (
        <div className="winners">
            <table className="scorersTable table">
                <caption className={`${sriracha.className}`}> League Winners</caption>
                <thead className="winnersHeader bg-white border-b sticky top-0">
                    <tr>
                        <th>Season Start</th>
                        <th>Season End</th>
                        <th>Winner</th>
                    </tr>
                </thead>
                <tbody>
                    {last10Seasons.map((season: Season) => (
                        <tr className="winnerRows">
                            <td>{season.startDate}</td>
                            <td>{season.endDate}</td>
                            <td className="winnerTeam"><img className="winnerCrest" src={season.winner.crest} alt="" /> <p className="winnerShortName">{season.winner.shortName}</p></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}