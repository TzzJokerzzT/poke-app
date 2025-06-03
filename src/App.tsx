import { Routes, Route } from "react-router-dom";
import Home from "@features/home/HomePage";
import InformationPage from "@features/info/InformationPage";
import FavoritesPage from "@features/favorites/FavoritesPage";
import { AnimatePresence } from "motion/react";
import Register from "@features/register/RegisterPage";

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon/:name" element={<InformationPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
