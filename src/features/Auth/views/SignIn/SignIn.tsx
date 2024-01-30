import React from "react";
import { Box, Paper } from "@mui/material";
import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <Box sx={{ ...styledBoxContainer }}>
      <Paper elevation={0}>
        <SignInForm />
      </Paper>
    </Box>
  );
};

export default SignIn;

const styledBoxContainer = {
  height: "100%",
  width: "100%",
};
