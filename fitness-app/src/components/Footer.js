import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Fitness from "../assets/images/Fitness.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Fitness} alt="logo" width="200px" height="200px" />
        <Typography variant="h6" pb="40px" mt="5px">
          Never give up on a dream just because of the time it will take to
          accomplish it. The time will pass anyway
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
