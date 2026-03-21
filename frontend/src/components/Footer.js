import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", p: 2, mt: 4, textAlign: "center" }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} My E-Commerce. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;