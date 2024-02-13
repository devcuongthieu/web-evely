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
import anime from "animejs";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { z } from "zod";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const { control, handleSubmit } = useForm<SignIn>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(validate),
  });

  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    function animateText() {
      var textWrapper = document.querySelector(".ml6 .letters");
      // @ts-ignore
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".ml6 .letter",
          translateY: [0, -20, 0],
          translateZ: 0,
          opacity: [0, 1],
          duration: 850,
          easing: "easeOutExpo",
          delay: (el, i) => 50 * i,
        })
        .add(
          {
            targets: ".ml6 .letter",
            translateY: [0, 20, 0],
            translateZ: 0,
            opacity: [1, 0],
            duration: 750,
            easing: "easeInExpo",
            delay: (el, i) => 50 * i,
          },
          "+=2000"
        );
    }

    // Call the function to animate text
    animateText();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (response?.ok) {
      router.push("/");
    }
    setLoading(false);
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {!isMobile && (
        <Box
          sx={{
            backgroundSize: "contain",
            backgroundPosition: "center",
            objectFit: "contain",
            width: "60%",
            height: "100vh",
          }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            slidesPerGroupSkip={1}
          >
            <SwiperSlide>
              <Box
                sx={{
                  backgroundImage: `url(https://img.freepik.com/premium-vector/cinema-movie-time-banner-with-flat-icons-transparent-film-popcorn-signboard-masks-award-tickets-vector-illustration_108855-2649.jpg?w=1380)`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  objectFit: "contain",
                  width: "100%",
                  height: "100vh",
                }}
              ></Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  backgroundImage: `url(https://img.freepik.com/premium-vector/business-man-woman-using-gadget-modern-devices-arrow-finance-success-concept_48369-11583.jpg?w=1480)`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  objectFit: "contain",
                  width: "100%",
                  height: "100vh",
                }}
              ></Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  backgroundImage: `url(https://img.freepik.com/free-vector/super-deal-banner-template-design_87202-1098.jpg?w=1380&t=st=1706610295~exp=1706610895~hmac=5a9a07a6e94575a52a60fd7f9d0ad227b3eb676c7bed396e169e49b49b5d673e)`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  objectFit: "contain",
                  width: "100%",
                  height: "100vh",
                }}
              ></Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      )}
      <Box
        sx={{
          width: isMobile ? "100%" : "40%",
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
            <h1 className="ml6">
              <span className="text-wrapper">
                <span
                  className="letters"
                  style={{
                    fontSize: "44px",
                    fontWeight: "bold",
                    fontFamily: "'Comic Sans MS', cursive",
                    color: "#007DFB",
                    marginBottom: 2,
                  }}
                >
                  Eve-ly
                </span>
              </span>
            </h1>
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
              sx={{
                color: "#000",
                fontSize: "16px",
                fontFamily: "Roboto, sans-serif",
              }}
              textAlign="center"
            >
              hoặc tiếp tục với email
            </Divider>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={onSubmit}>
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
