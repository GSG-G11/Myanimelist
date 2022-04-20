import { Route, Routes } from 'react-router-dom';
import AnimePage from "./Pages/Anime Page/AnimePage";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
function App() {
  


  return (
      <div>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime/:animdID" element={<AnimePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
  );
}

export default App;
