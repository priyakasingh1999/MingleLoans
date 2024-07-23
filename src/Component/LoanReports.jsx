import React from "react";
import Header from "./Header";
import PageHeading from "./PageHeading";
import { Box, Button, Grid } from "@mui/material";
import CustomCard from "./CustomCard";
import FormField from "./FormField";
import LoanReportForm from "./LoanReportForm";

export const LoanReports = () => {
  return (
    <div>
      <Header />
      <PageHeading name="Loan Reports" />

      <Grid container maxWidth="lg" sx={{ margin: "auto" }}>
        <Grid item xs={12} md={6} lg={4}>
          <CustomCard cardname="Progress Loan Application" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CustomCard cardname="Submitted Loan Application" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box sx={{ boxShadow: 3, borderRadius: "5px", padding: "10px",minHeight:"290px" }}>
            <LoanReportForm/>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
