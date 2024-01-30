"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Stack,
  Typography,
  styled,
  Container as MContainer,
  Paper,
  Grid,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/lib/components/Form/Input";
import Button from "@/lib/components/Form/Button/Button";

const validate = z.object({
  email: z
    .string()
    .min(1, { message: "Ít nhất 1 kí tự" })
    .email({ message: "Định dạng email không chính xác" })
    .trim(),
  password: z.string().min(1, { message: "Ít nhất 1 kí tự" }).trim(),
});

const SignInForm = () => {
  const { control, handleSubmit } = useForm<any>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(validate),
  });

  const [isLoading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<any> = () => {
    setLoading(true);
  };
  return (
    <Container maxWidth="xs">
      <StyledPaper>
        <Stack alignItems="center">
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "'Comic Sans MS', cursive",
              color: "#007DFB",
              mb: 2,
            }}
          >
            Eve-ly
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
              controlProps={{
                sx: {
                  mb: 2,
                },
              }}
              control={control}
            />
            <Input
              fullWidth
              label="Mật khẩu"
              name="password"
              autoComplete="current-password"
              control={control}
            />
            <Grid container justifyContent="center" marginTop={3}>
              <Button
                title="Đăng nhập"
                type="submit"
                variant="contained"
                loading={isLoading}
                size="extra"
              />
            </Grid>
          </Box>
        </Stack>
      </StyledPaper>
    </Container>
  );
};

export default SignInForm;

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6, 4),
  borderRadius: theme.spacing(2),
}));

const Container = styled(MContainer)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
});