import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import Header from "./Header";
import PageHeading from "./PageHeading";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <PageHeading name="Welcome to Dashboard" />
    </div>
  );
};

export default Dashboard;
