import AnimeCard from "./Component/Anime/AnimeCard";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AnimePage from "./Component/Anime Page/AnimePage";
const id = 0; 
function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path="/" element={<AnimeCard title="one-piece" />} />
            <Route path="/anime/:animeID" element={<AnimePage id={id} />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
