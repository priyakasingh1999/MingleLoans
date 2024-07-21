import React from "react";
import Header from "./Header";
import PageHeading from "./PageHeading";
import { Grid, Typography, Box, Button } from "@mui/material";
import FormField from "./FormField";

const LoanApplicationForm = () => {
  return (
    <div>
      <Header />
      <Grid container maxWidth="lg" sx={{ margin: "auto" }} spacing={2}>
        <Grid item xs={12}>
          <PageHeading name="Personal Loan Application" />
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                textDecoration: "underline",
                textUnderlineOffset: "7px",
                marginBottom: "15px",
              }}
            >
              Applicant personal details
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <FormField
            name=" Name"
            id="name"
            type="text"
            style={{ marginBottom: "15px" }}
          />
        </Grid>
        <Grid item xs={6}>
          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
              for="gender"
            >
              Select a Gender
            </label>
            <select
              name="Gender Select"
              id="gender"
              style={{ minWidth: "100%", padding: "5px 0px" }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </Grid>
        <Grid item xs={6}>
          <FormField
            name=" Date of Birth"
            style={{ margin: "0px 0px 15px 0" }}
            id="Date of Birth"
            type="date"
          />
        </Grid>
        <Grid item xs={6}>
          <FormField
            name=" PAN Card."
            style={{ margin: "0px 0px 15px 0" }}
            id="pancard"
            type="pancard"
          />
        </Grid>
        <Grid item xs={6}>
          <FormField
            name=" Aadhaar Card"
            style={{ margin: "0px 0px 15px 0" }}
            id="aadhaar card"
            type="aadhaar card"
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <Button variant="contained" disabled sx={{ mt: 2 }}>
              Back
            </Button>
            <Button
              variant="contained"
              href="/application-details"
              sx={{ mt: 2 }}
            >
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoanApplicationForm;
