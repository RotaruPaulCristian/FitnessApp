import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Statham from "../assets/images/Statham.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Stack
        sx={{
          width: "350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography color="#9b948e" fontSize="26px" fontWeight="600">
          Fitness Association
        </Typography>
        <Typography
          fontWeight="700"
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mb="23px"
          mt="30px"
        >
          Think, Eat <br /> and Lift
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
          Check out the most effective exercises
        </Typography>
        <Button
          variant="contained"
          color="error"
          sx={{ padding: "10px" }}
          href="#exercises"
        >
          Explore exercises
        </Button>
      </Stack>
      <img src={Statham} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
