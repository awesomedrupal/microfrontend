import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  submit: {
    margin: theme.spacing(10, 0, 2)
  }
}));

const ClientComponent = () => {
  const classes = useStyles();

  const [firstDropdownValue, setFirstDropdownValue] = useState("");
  const [secondDropdownValue, setSecondDropdownValue] = useState("");

  const firstDropdownOptions = ["Option 1", "Option 2", "Option 3"];

  const getSecondDropdownOptions = () => {
    switch (firstDropdownValue) {
      case "Option 1":
        return ["Option A", "Option B", "Option C"];
      case "Option 2":
        return ["Option X", "Option Y", "Option Z"];
      case "Option 3":
        return ["Option I", "Option II", "Option III"];
      default:
        return [];
    }
  };

  const handleFirstDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setFirstDropdownValue(selectedValue);
    setSecondDropdownValue("");
  };

  const handleSecondDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSecondDropdownValue(selectedValue);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        {/* First Dropdown */}
        <FormControl className={classes.formControl}>
          <InputLabel id="firstDropdown-label">First Dropdown</InputLabel>
          <Select
            labelId="firstDropdown-label"
            id="firstDropdown"
            value={firstDropdownValue}
            onChange={handleFirstDropdownChange}
          >
            <MenuItem value="">Select an option</MenuItem>
            {firstDropdownOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Second Dropdown */}
        <FormControl className={classes.formControl}>
          <InputLabel id="secondDropdown-label">Second Dropdown</InputLabel>
          <Select
            labelId="secondDropdown-label"
            id="secondDropdown"
            value={secondDropdownValue}
            onChange={handleSecondDropdownChange}
          >
            <MenuItem value="">Select an option</MenuItem>
            {getSecondDropdownOptions().map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className={classes.submit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Link to="/home/second">
                <Button variant="contained" color="primary">
                  Next
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default ClientComponent;
