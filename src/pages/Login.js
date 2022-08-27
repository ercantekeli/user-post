import * as React from "react";
import Button from "@mui/material/Button";
import { Grid, OutlinedInput, Stack, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../assets/Logo";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../features/auth/authSlice';
import { validEmail, validPassword } from '../utils/Regex';
import "./LoginStyle.css"



export default function LogIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (validEmail.test(email)) {
      setEmailErr(false);
    }
    if (validPassword.test(password)) {
      setPwdError(false);
    }
  }, [email, password])




  const { user } = useSelector((state) => state.auth);

  const handleClickShowPassword = () => {
    setPassword({
      ...password,
      showPassword: !password.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validEmail.test(email)) {
      setEmailErr(true);
      setEmail("")
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
      setPassword("")
    }
    if (validEmail.test(email) && validPassword.test(password)) {
      dispatch(setUser({ email, password }));
      navigate('/users');
      console.log(user)
    }
    setEmail('');
    setPassword('');
  };

  const themeDark = createTheme({
    palette: {
      background: {
        default: "#363740",
      }
    },
  })

  // const style = {
  //     backgroundColor: "#363740"
  // }

  return (
    <ThemeProvider theme={themeDark}>
      <Container
        sx={{
          minHeight: "70vh",
          borderRadius: "8px",
          marginTop: "3rem",
          backgroundColor: "#FFFFFF",
        }}
        component="main"
        maxWidth="xs"
      >
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <div style={{ marginTop: "2rem" }}>
              <Logo />
            </div>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "19px",
                lineHeight: "24px",
                textAlign: "center",
                letterSpacing: "0.4px",
                color: "#A4A6B3",
                opacity: "0.7",
                mb: "2rem",
                mt: "0.9rem",
              }}
            >
              Dashboard Kit
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant="h4">Log In to Dashboard Kit</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "20px",
                textAlign: "center",
                letterSpacing: "0.3px",
                color: "#9FA2B4",
                mt: "0.9rem",
                mb: "2rem",
              }}
            >
              Enter your email and password below
            </Typography>
          </Stack>
        </Grid>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <div>
              <p
                style={{
                  textAlign: "start",
                  fontFamily: "Mulish",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "15px",
                  letterSpacing: "0.3px",
                  color: "#9FA2B4",
                }}
              >
                EMAIL
              </p>
              <TextField
                placeholder="Email address"
                id="filled-start-adornment"
                sx={{
                  mb: "1",
                  width: "24rem",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "10px",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailErr && <p style={{ marginTop: 0, color: "red", fontSize: "0.8rem" }}>Your email is invalid. Sample format: example@example.com</p>}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  marginTop: "1.3rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "15px",
                    textAlign: "center",
                    letterSpacing: "0.3px",
                    color: "#9FA2B4",
                    marginBottom: "0.9rem"
                  }}
                >
                  PASSWORD
                </span>
                <span
                  style={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "10px",
                    lineHeight: "13px",
                    letterSpacing: "0.1px",
                    color: "#9FA2B4",
                  }}
                >
                  Forgot password?
                </span>
              </div>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
                <OutlinedInput
                  sx={{
                    width: "24rem",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "4px",
                  }}
                  value={password}
                  placeholder="Password"
                  id="outlined-adornment-password"
                  type={password.showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {password.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {pwdError && <p style={{ marginTop: 0, color: "red", fontSize: "0.8rem" }}>Password must contain both letters and numbers.(min 6 char)</p>}
            </div>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{
                color: "#FFFFFF",
                letterSpacing: "0.2px",
                textAlign: "center",
                lineHeight: "20px",
                fontSize: "1rem",
                fontWeight: "600",
                fontStyle: "normal",
                fontFamily: "Mulish",
                textTransform: "capitalize",
                height: "3.7rem",
                boxShadow: "0px 4px 12px rgba(55, 81, 255, 0.24)",
                borderRadius: "8px",
                backgroundColor: "#3751FF",
                marginTop: "1.3rem",
                width: "24rem"
              }}
            >
              Log In
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent:"center", alignItems:"baseline"}}>
            <Stack direction="row" justifyContent="center" alignItems="baseline">
              <Typography
                sx={{
                  letterSpacing: "0.3.px",
                  mt: "1.8rem",
                  mb: "2.2rem",
                  color: "#9FA2B4",
                  fontSize: "14px",
                  fontWeight: "400",
                  fontStyle: "normal",
                  lineHeight: "20px",
                  fontFamily: "Mulish",
                }}
                variant="span"
              >
                Dont have an account?
              </Typography>
              <Typography
                component={Link}
                to=""
                variant="span"
                sx={{
                  textDecoration: "none",
                  color: "#3751FF",
                  fontWeight: "600",
                  fontStyle: "normal",
                  fontFamily: "Mulish",
                  marginLeft: "5px",
                }}
              >
                Sign Up
              </Typography>
            </Stack>
          </Box>

        </Box>
      </Container>
    </ThemeProvider>
  );
}
