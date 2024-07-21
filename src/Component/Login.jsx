import React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Link,
} from "@mui/material";

const Login = () => {
  return (
    <div>
      <Grid container alignContent={"center"} justifyContent={"center"} my={5}>
        <Grid
          item
          xs={7}
          md={6}
          lg={4}
          sx={{ borderRadius: "10px", boxShadow: 4, bgcolor: "white" }}
        >
          <Box component="form" sx={{ p: 3 }}>
            <Typography
              variant="h5"
              color="primary"
              sx={{
                fontWeight: "bold",
                marginBottom: "3 5px",
                textAlign: "center",
              }}
            >
              Login
            </Typography>
            <Box>
              <TextField
                placeholder="Email"
                type="email"
                sx={{ width: "100%", marginBottom: "35px" }}
              />
              <TextField
                placeholder="Password"
                type="password"
                sx={{ width: "100%", marginBottom: "25px" }}
              />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button variant="contained" sx={{ mb: 2 }}>
                <Link
                  href="/dashboard"
                  underline="none"
                  sx={{ color: "white" }}
                >
                  Sign In
                </Link>
              </Button>
              <Typography sx={{ fontSize: "14px", my: 1 }}>
                Forgot{" "}
                <Link href="#" underline="none" sx={{ color: "green" }}>
                  Username/Password?
                </Link>
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Dont't have an account?{" "}
                <Link href="#" underline="none" sx={{ color: "green" }}>
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
