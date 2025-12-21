import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import HeroSection from "./components/HeroSection/HeroSection";
//@ts-ignore
import NavBar from "./components/NavBar/NavBar";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./components/api/api";
import Section from "./components/Sections/Section";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songsData, setSongsData] = useState([]);

  // Fetch all APIs on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const topAlbums = await fetchTopAlbums();
        setTopAlbumData(topAlbums);

        const newAlbums = await fetchNewAlbums();
        setNewAlbumData(newAlbums);

        const songs = await fetchSongs();
        setSongsData(songs);
      } catch (err) {
        console.error("API fetch error:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HeroSection />

      <div className="sectionWrapper">
        <Section type="album" title="Top Albums" data={topAlbumData} />
        <Section type="album" title="New Albums" data={newAlbumData} />
        <Section type="song" title="Songs" data={songsData} />
      </div>
    </div>
  );
}

export default App;