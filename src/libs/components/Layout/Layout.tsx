import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Banner from "../Slider/Banner/Banner";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function LayoutAuthenticate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
      </Container>
      <Banner />
      <Container maxWidth="xl">
        <Stack gap={10} flexDirection="row" minHeight="80vh" bgcolor="#E1FCE3">
          {children}
        </Stack>
      </Container>
      <Box>
        <Footer />
      </Box>
    </>
  );
}
