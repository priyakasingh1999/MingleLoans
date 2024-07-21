import React from "react";
import { Container, Grid, Typography } from "@mui/material";

const PageHeading = ({ name }) => {
  return (
    <Container maxWidth="lg">
      <Grid item xs={12} sx={{ my: "25px" }}>
        <Typography
          variant="h5"
          sx={{
            color: "black",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            my: "10px",
            height: 1,
          }}
        >
          {name}
        </Typography>
      </Grid>
    </Container>
  );
};

export default PageHeading;
