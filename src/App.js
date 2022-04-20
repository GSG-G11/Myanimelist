import AnimeCard from "./Component/Anime/AnimeCard";
import { Route, Routes } from 'react-router-dom';
import AnimePage from "./Pages/Anime Page/AnimePage";
import NotFound from "./Pages/NotFound";

import { Navbar } from "./Component/Navbar/Navbar";
import { useState } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  


  return (
      <div>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Routes>
            <Route path="/" element={<AnimeCard title={searchTerm} />} />


            <Route path="/anime/:animdID" element={<AnimePage />} />
        
          
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
  );
}

export default App;
