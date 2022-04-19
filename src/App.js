import AnimeCard from "./Component/Anime/AnimeCard";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AnimePage from "./Component/Anime Page/AnimePage";
import NotFound from "./Component/NotFound";
function App() {
  console.log("App.js is running");
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path="/" element={<AnimeCard title="one-piece" />} />
            <Route path="/anime/" element={<AnimePage id="222" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
