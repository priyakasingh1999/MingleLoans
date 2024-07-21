import { Container, Grid, Link } from "@mui/material";
import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        padding: "0",
        border: "1px solid blue",
      }}
    >
      <Container sx={{ bgcolor: "blue" }} maxWidth="lg">
        <Grid container sx={{ my: 1 }}>
          <Grid item xs={4}>
            <Link
              sx={{ fontWeight: "bold", color: "white", fontSize: "25px" }}
              href="/dashboard"
              underline="none"
            >
              Logo
            </Link>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Menu
              href="/dashboard"
              name="Dashboard"
              sx={{ color: "white", fontWeight: "bold" }}
            />
            <Menu
              href="/loan-application"
              name="Loan Application"
              sx={{ mx: "15px", color: "white", fontWeight: "bold" }}
            />
            <Menu
              href="/loan-reports"
              name="Loan Reports"
              sx={{ color: "white", fontWeight: "bold" }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
