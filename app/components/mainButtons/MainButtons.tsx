import React from 'react'
import Link from "next/link";
import styles from "./MainButtons.module.css";

const MainButtons = () => {
  return (
    <div className={`${styles.mainButtons} px-5 max-w-md grid grid-cols-3 gap-3 justify-center min-w-fit`}>
      <button className="btn btn-primary">Matches</button>
      <button className="btn btn-primary">Teams</button>
      <button className="btn btn-primary"><Link href="/standings">Standings</Link></button>
    </div>
  )}

export default MainButtons
