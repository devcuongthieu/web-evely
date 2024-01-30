"use client";

import Button from "@/libs/components/Form/Button/Button";
import { Input } from "@/libs/components/Form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Box,
  Button as ButtonMUI,
  Checkbox,
  Divider,
  Grid,
  Container as MContainer,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import BannerCinema from "public/assets/images/bannercinema.jpg";

interface SignIn {
  email: string;
  password: string;
}

const validate = z.object({
  email: z
    .string()
    .min(1, { message: "Email chứa ít nhất 1 kí tự" })
    .email({ message: "Định dạng email không chính xác" })
    .trim(),
  password: z.string().min(1, { message: "Ít nhất 1 kí tự" }).trim(),
});

const SignInForm = () => {
  const { control, handleSubmit } = useForm<SignIn>({
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          backgroundColor: "blue",
          backgroundImage: `url(https://images.unsplash.com/photo-1631702825172-a9a848c473ad?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "60%",
          height: "100vh",
        }}
      ></Box>
      <Box
        sx={{
          width: "40%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "80%",
            width: "98%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "34px",
                fontWeight: "bold",
                fontFamily: "'Comic Sans MS', cursive",
                color: "#007DFB",
                mb: 2,
              }}
            >
              Eve-ly
            </Typography>
            <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
              Đăng nhập vào tài khoản của bạn
            </Typography>
            <Typography sx={{ fontSize: "16px", color: "#999" }}>
              Chào mừng bạn đã trở lại! Vui lòng họn phương thức đăng nhập:
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "space-between",
                paddingY: 2,
              }}
            >
              <ButtonMUI
                fullWidth
                startIcon={<GoogleIcon />}
                variant="outlined"
              >
                Google
              </ButtonMUI>
              <ButtonMUI
                fullWidth
                startIcon={<FacebookIcon />}
                variant="outlined"
              >
                Facebook
              </ButtonMUI>
            </Box>
            <Divider
              sx={{ color: "#000", fontSize: "16px" }}
              textAlign="center"
            >
              hoặc tiếp tục với email
            </Divider>
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <Checkbox defaultChecked sx={{ padding: 0 }} />
                  <Typography sx={{ fontSize: "16px", color: "#000" }}>
                    Lưu tài khoản
                  </Typography>
                </Box>
                <Typography
                  sx={{ fontSize: "16px", color: "#007DFB", cursor: "pointer" }}
                >
                  Quên mật khẩu?
                </Typography>
              </Box>
              <Grid container justifyContent="center" marginTop={3}>
                <Button
                  title="Đăng nhập"
                  type="submit"
                  variant="contained"
                  loading={isLoading}
                  sx={{ width: "100%", height: "42px" }}
                />
              </Grid>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 2,
              }}
            >
              <Typography sx={{ fontSize: "16px", color: "#000" }}>
                Bạn đã có tài khoản chưa?
              </Typography>
              <Typography
                sx={{ fontSize: "16px", color: "#007DFB", cursor: "pointer" }}
              >
                Tạo tài khoản
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
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
