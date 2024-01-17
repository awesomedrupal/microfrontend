import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Button, Grid, makeStyles } from "@material-ui/core";
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

const ChartComponent = () => {
  const classes = useStyles();
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the chart
    const data = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Monthly Sales",
          data: [12, 19, 3, 5, 2],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1
        }
      ]
    };

    // Chart configuration
    const config = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    // Create the chart
    const myChart = new Chart(chartRef.current, config);

    // Cleanup function
    return () => {
      myChart.destroy(); // Destroy the chart to avoid memory leaks
    };
  }, []);

  return (
    <>
      <canvas ref={chartRef} width="400" height="200" />{" "}
      <div className={classes.submit}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Link to="/home/first">
              <Button variant="contained" color="primary">
                Prev
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ChartComponent;
