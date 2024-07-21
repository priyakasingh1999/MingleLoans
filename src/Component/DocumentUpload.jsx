import React, { useState } from "react";
import Header from "./Header";
import PageHeading from "./PageHeading";
import { Grid, Typography, Box, Button, Modal, Link } from "@mui/material";
import FormField from "./FormField";

const DocumentUpload = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header />
      {open && (
        <div
          style={{
            backgroundColor: "rgba(0 ,0 ,0, 0.4)",
            position: "fixed",
            width: "100%",
            minHeight: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "white",
              p: 3,
              borderRadius: 2,
              minWidth: "300px",
              minHeight: "100px",
              position: "relative",
            }}
          >
            <Typography
              sx={{ position: "absolute", top: "5px", right: "10px" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
              onClick={() => setOpen(false)}
            >
              <Link underline="none" href="#">
                X
              </Link>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  minHeight: "100%",
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                Success
              </Typography>
            </Box>
          </Box>
        </div>
      )}
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
              Document upload form
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
              for="adharfile"
            >
              Aadhaar Upload
            </label>
            <input type="file" id="adharfile"></input>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
              for="panfile"
            >
              PAN Card Upload
            </label>
            <input type="file" id="panfile"></input>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: "flex", gap: "15px", marginTop: "25px" }}>
            <Button
              variant="contained"
              href="/application-details"
              sx={{ mt: 2 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={() => setOpen(true)}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DocumentUpload;
