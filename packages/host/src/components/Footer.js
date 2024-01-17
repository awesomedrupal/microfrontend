import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        My MicroFrontend
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <Box mt={8}>
        <Copyright />
      </Box>
    </>
  );
}
