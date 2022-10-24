import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Fitness from "../assets/images/Fitness.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img src={Fitness} alt="logo" className={styles.img} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" className={styles.item}>
          Home
        </Link>
        <a href="#exercises" className={styles.item}>
          Exercises
        </a>
        <Link to="/favorites" className={styles.item}>
          Favorites
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
