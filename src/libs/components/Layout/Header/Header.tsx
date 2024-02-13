import { Box } from "@mui/material";
import React from "react";
import AccountMenu from "./AccountMenu";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>Header</Box>
        <AccountMenu />
      </Box>
    </>
  );
};

export default Header;
