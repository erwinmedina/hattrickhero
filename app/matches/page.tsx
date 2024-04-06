import React from 'react'
import Navbar from '../components/navbar/Navbar';
import MainButtons from '../components/mainButtons/MainButtons';
import MatchdaySelector from '../components/matchdaySelector/MatchdaySelector';
import MatchesCard from '../components/matchesCard/MatchesCard';
import "./page.css";

const matchesPage = async () => {
    let matches = [];

    const res = await fetch('https://api.football-data.org/v4/competitions/PL/matches?matchday=31', {
        method: "GET",
        headers: {
            'X-Auth-Token': `${process.env.APIFootballKey}`
        }
    });
    if (res.ok) {
        matches = await res.json();
    } else {
        console.error("failed to fetch data:", res.statusText);
    }

  return (
    <div className="matchPage">
        <Navbar/>
        <MainButtons/>
        <MatchdaySelector/>
        <MatchesCard matches={matches}/>
    </div >
  )
}

export default matchesPage
