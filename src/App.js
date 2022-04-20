import AnimeCard from "./Component/Anime/AnimeCard";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AnimePage from "./Component/Anime Page/AnimePage";
import NotFound from "./Component/NotFound";
import { Navbar } from "./Component/Navbar/Navbar";
import { useState } from "react";
function App() {
  console.log("App.js is running");
  const [searchTerm, setSearchTerm] = useState("");
  

  return (
    <BrowserRouter>
      <div>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Routes>
            <Route path="/" element={<AnimeCard title={searchTerm} />} />
            <Route path="/anime/" element={<AnimePage id="222" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
