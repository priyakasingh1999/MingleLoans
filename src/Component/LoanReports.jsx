import React from "react";
import Header from "./Header";
import PageHeading from "./PageHeading";
import { Box, Button, Grid } from "@mui/material";
import CustomCard from "./CustomCard";
import FormField from "./FormField";

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
          <Box sx={{ boxShadow: 3, borderRadius: "5px", padding: "23px" }}>
            <form>
              <FormField
                name=" Application No."
                style={{ margin: "0px 0px 15px 0" }}
                id="number"
                type="number"
              />
              <FormField
                name=" Application Date"
                style={{ margin: "0px 0px 15px 0" }}
                id="Application Date"
                type="date"
              />
              <FormField
                name=" Application Status"
                style={{ margin: "0px 0px 15px 0" }}
                id="status"
                type="text"
              />
              <div>
                <Button variant="contained" type="submit" sx={{ mt: 1 }}>
                  Submit
                </Button>
              </div>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
