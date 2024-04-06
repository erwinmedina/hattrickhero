import React from 'react'
import Link from "next/link";
import "./MainButtons.css";

const MainButtons = () => {
  return (
    <div className="mainButtonContainer">
        <div className="px-5 max-w-md grid grid-cols-3 gap-3 justify-center min-w-fit">
        <button className="btn btn-primary"><Link href="/matches">Matches</Link></button>
        <button className="btn btn-primary"><Link href="/teams">Teams</Link></button>
        <button className="btn btn-primary"><Link href="/standings">Standings</Link></button>
        </div>
    </div>
  )}

export default MainButtons
