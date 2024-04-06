import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar/Navbar";
import MainButtons from "./components/mainButtons/MainButtons";
import "./page.css"

export default async function Home() {

  return (
    <main className="main">
      <Navbar/>
      <MainButtons/>
      <h1>Hello world</h1>
    </main>
  );
}
