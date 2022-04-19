import AnimeCard from "./Component/Anime/AnimeCard";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path="/" element={<AnimeCard title="one-piece" />} />
            <Route path="/anime/:animeID" element={<AnimeCard title="naruto" />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
