import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              MicroFrontends
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Microfrontends is an architectural approach that involves breaking
              down a frontend monolith into smaller, independently deployable
              and manageable units. Each unit, or microfrontend, represents a
              specific feature or functionality of the application. These
              microfrontends can be developed, tested, deployed, and scaled
              independently, allowing for greater flexibility and agility in
              frontend development. The goal is to enable different teams to
              work on separate parts of the user interface, promoting faster
              development cycles, easier maintenance, and improved collaboration
              across diverse development teams.
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
}
