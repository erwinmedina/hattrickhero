import React from 'react'
import "./matchesCard.css"

interface Match {
    matchday: number;
    homeTeam: {
        id: number;
        name: string;
        shortName: string;
        tla: string;
        crest: string;
    },
    awayTeam: {
        id: number;
        name: string;
        shortName: string;
        tla: string;
        crest: string;
    },
    score: {
        winner: string;
        fullTime: {
            home: number;
            away: number;
        }
        halfTime: {
            home: number;
            away: number;
        }
    }
}

interface MatchesCardProps {
    matches: any;
}

const MatchesCard: React.FC<MatchesCardProps> = ({ matches }) => {
  return (
    <div>
    {matches.matches.map((match: Match) => (
        <div className="matchesCard flex w-full p-3">
            <div className="matchesCardLeft grid h-20 card rounded-box place-items-center">
                <div className="matchesCardLeftContent flex">
                    <img src={`${match.homeTeam.crest}`} alt="" />
                    <p>{match.homeTeam.shortName}</p>
                </div>
                <div className="matchesCardScore MCS_Left">
                    <p>{match.score.fullTime.home}</p>
                </div>
            </div>
            <div className="divider divider-horizontal">vs</div>
            <div className="matchesCardRight grid h-20 card rounded-box place-items-center">
                <div className="matchesCardScore MCS_Right">
                    <p>{match.score.fullTime.away}</p>
                </div>
                <div className="matchesCardRightContent flex">
                    <p>{match.awayTeam.shortName}</p>
                    <img src={`${match.awayTeam.crest}`} alt="" />
                </div>
            </div>
        </div>  
    ))}
  </div>
  )
}

export default MatchesCard
