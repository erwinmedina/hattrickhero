import "./HomeInfo.css"
import { Sriracha } from "next/font/google"

const sriracha = Sriracha({
    weight: '400',
    subsets: ['latin'],
  })

export default function homePage() {
    return (
        <div className="homePage">

            {/* This covers the header portion */}
            <div className={`header ${sriracha.className} `}>
                <p>Welcome to Hat Trick Hero</p>
            </div>

            {/* This covers the frustrated girl - what we are section */}
            <div className="homePageFirst">
                <div className="firstLeft">
                    <img src="https://i.imgur.com/szY6tNV.jpeg" alt="" />
                </div>
                <div className="firstRight">
                    <p className={`firstRightHeader ${sriracha.className} text-2xl`}>What do we do here?</p>
                    <br/>
                    <p className={`firstRightText ${sriracha.className} font-thin`}>
                        Have you ever wanted to search for soccer/football leagues but forgot the league's name? Or have you ever felt like you 
                        wanted a dedicated sport application that shows you upcoming matchdays, current/previous scores, and the current/past 
                        standings? Then, you're at the right place! I created this application with the intention of making my life easier and
                        hopefully someone else's as well.</p>
                </div>
            </div>

            {/* This is the card section */}
            <div className="cardItems">
                {/* First Card */}
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src="https://i.imgur.com/pCRCyAG.png" alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Matches</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here you can check out upcoming games, previous results, filter by matchdays, and more (coming soon) !
                        </p>
                        <a href="/matches" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Check it out
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Second Card */}
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src="https://i.imgur.com/LQJfWU2.png" alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Teams</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            This is where you can filter by teams within a specific league. If, say, you only want to see Liverpool FC and all upcoming/past matchdays, then this is the spot to check out.
                        </p>
                        <a href="/matches" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Check it out
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Third Card */}
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src="https://i.imgur.com/6Ihl9mz.png" alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Standings</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Want to check out how the standings are for a specific league, then this is where you want to be. Previous years data is also available!
                        </p>
                        <a href="/matches" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Check it out
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}