import React from "react";
import Header from "./Header";
import PageHeading from "./PageHeading";
import { Grid, Typography, Box, Button } from "@mui/material";
import FormField from "./FormField";

const ApplicationContactDetails = () => {
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
              Applicant contact details
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <FormField
            name=" Mobile Number"
            id="Mobile Number"
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
              for="state"
            >
              Select a State
            </label>
            <select
              name="Tate Select"
              id="state"
              style={{ minWidth: "100%", padding: "5px 0px" }}
            >
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Bihar">Bihar</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nade ">Tamil Nadu</option>
            </select>
          </div>
        </Grid>
        <Grid item xs={6}>
          <FormField
            name=" City"
            style={{ margin: "0px 0px 15px 0" }}
            id="City"
            type="text"
          />
        </Grid>
        <Grid item xs={6}>
          <FormField
            name=" Other Number"
            style={{ margin: "0px 0px 15px 0" }}
            id="other number"
            type="number"
          />
        </Grid>
        <Grid item xs={6}>
          <FormField
            name=" Other Details"
            style={{ margin: "0px 0px 15px 0" }}
            id="Other Details"
            type="text"
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <Button variant="contained" href="/loan-application" sx={{ mt: 2 }}>
              Back
            </Button>
            <Button variant="contained" href="/document-upload" sx={{ mt: 2 }}>
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ApplicationContactDetails;
