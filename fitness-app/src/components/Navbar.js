import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Fitness from "../assets/images/Fitness.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        gap: { sm: "122px" },
        mt: { sm: "32px", xs: "20px" },
        mr: { xs: "36px" },
        width: "350px",
        justifyContent: { lg: "flex-start", sm: "space-between" },
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
      </Stack>
    </Stack>
  );
};

export default Navbar;
