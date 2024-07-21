import { Link } from "@mui/material";
import React from "react";

const Menu = ({ href, name, sx }) => {
  return (
    <Link href={href} underline="hover" sx={sx}>
      {name}
    </Link>
  );
};

export default Menu;
