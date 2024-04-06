import React from 'react'
import Navbar from '../components/navbar/Navbar';
import MainButtons from '../components/mainButtons/MainButtons';
import TeamSelector from '../components/teamSelector/TeamSelector';
import "./page.css"
import MatchesCard from '../components/matchesCard/MatchesCard';

const TeamsPage = async () => {
    let teams = [];
    let teamMatches = [];

    const res = await fetch('https://api.football-data.org/v4/competitions/PL/teams', {
        method: "GET",
        headers: {
            'X-Auth-Token': `${process.env.APIFootballKey}`
        }
    });
    if (res.ok) {
        teams = await res.json();
    } else {
        console.error("failed to fetch data:", res.statusText);
    }

    const resMatches = await fetch('https://api.football-data.org/v4/teams/64/matches', {
        method: "GET",
        headers: {
            'X-Auth-Token': `${process.env.APIFootballKey}`
        }
    });
    if (resMatches.ok) {
        teamMatches = await resMatches.json();
    } else {
        console.error("failed to fetch data:", resMatches.statusText);
    }


  return (
    <div className="teamsPage">    
        <Navbar/>
        <MainButtons/>
        <TeamSelector teams={teams}/>
        <MatchesCard matches={teamMatches}/>
    </div>
  )
}

export default TeamsPage
