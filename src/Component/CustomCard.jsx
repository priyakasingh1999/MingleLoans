import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const CustomCard = ({ cardname }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 2 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          {cardname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          vitae ea ad temporibus impedit, culpa totam ut quia perspiciatis et
          qui cum nam id delectus voluptate, dignissimos repellat mollitia quae
          facere esse? Dolore quibusdam, sint vero possimus eaque ipsam delectus
          repudiandae cumque! Officia quibusdam optio culpa quo tempore magnam
          quis!
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
