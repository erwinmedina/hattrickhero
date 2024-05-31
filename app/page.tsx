import Navbar from "./components/navbar/Navbar";
import HomeInfo from "./components/homeInfo/HomeInfo"
import "./page.css"

export default async function Home() {

  return (
    <main className="main">
      <Navbar/>
      <HomeInfo/>
    </main>
  );
}
