import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  const { id, bodyPart, gifUrl, name, target } = exercise;

  return (
    <Link to={`/exercise/${id}`} className="exercise-card">
      <img src={gifUrl} alt={name} loading="lazy" />
      <Stack direction="row" justifyContent="center">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            ":hover": { backgroundColor: "#ffa9a9" },
          }}
        >
          {bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            ":hover": { backgroundColor: "#fcc757" },
          }}
        >
          {target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
        textAlign="center"
      >
        {name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
