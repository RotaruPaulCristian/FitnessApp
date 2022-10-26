import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";
import { useReducer } from "react";
import { FavoritesContext } from "./store/Favorites/context";
import { initialState, favoritesReducer } from "./store/Favorites/reducer";

const App = () => {
  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    initialStatebbb
  );

  const favoritesContextValue = {
    favoritesState,
    favoritesDispatch,
  };

  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <FavoritesContext.Provider value={favoritesContextValue}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </FavoritesContext.Provider>
    </Box>
  );
};

export default App;
