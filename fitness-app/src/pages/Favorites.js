import React, { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { FavoritesContext } from "../store/Favorites/context";
import ExerciseCard from "../components/ExerciseCard";

const Favorites = () => {
  const { favoritesState } = useContext(FavoritesContext);
  const { products } = favoritesState;

  return (
    <Box>
      <Typography>Your favorite exercises</Typography>
      {products.length === 0 ? (
        <p>Momentan nu ai nicio știre favorită.</p>
      ) : (
        <ExerciseCard exercise={products} />
      )}
    </Box>
  );
};

export default Favorites;
