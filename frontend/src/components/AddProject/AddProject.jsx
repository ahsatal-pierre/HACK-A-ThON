/* eslint-disable */
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { StepContent } from "@mui/material";

import Navbar from "@components/Navbar/Navbar";
const steps = [
  "General Information",
  "Project Timeline",
  "Client Details",
  "Partne Details",
  "Project Description",
];

export default function AddProject() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function ActiveStepComponent() {
    switch (activeStep) {
      case 0:
        return (
          <>
            <Box
              sx={{
                mt: "10px",
                mb: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#DDE7F6",
                height: "100px",
              }}
            >
              <h1>General Information</h1>
            </Box>
            <Grid container spacing={2}>
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  varient="outlined"
                  placeholder="Project Name ..."
                  id="projectName"
                  size="medium"
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  varient="outlined"
                  placeholder="Category ..."
                  id="category"
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  varient="outlined"
                  placeholder="Location..."
                  id="location"
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  varient="outlined"
                  placeholder="open Positions ..."
                  id="openPosition"
                />
              </Grid>
              <Grid item lg={12}>
                <TextField
                  fullWidth
                  varient="outlined"
                  placeholder="Tech Stack ..."
                  id="techStack"
                />
              </Grid>
            </Grid>
          </>
        );
        break;
      case 1:
        return (
          <>
            <Box
              sx={{
                mt: "10px",
                mb: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#DDE7F6",
                height: "100px",
              }}
            >
              <h1>Project Timeline</h1>
            </Box>
            <Grid container spacing={2}>
              <Grid item lg={12}>
                <TextField
                  fullWidth
                  varient="outlined"
                  placeholder="Start Date ..."
                  id="projectName"
                  size="medium"
                />
              </Grid>
              <Grid item lg={12}>
                <TextField
                  fullWidth
                  varient="outlined"
                  placeholder="Category ..."
                  id="category"
                />
              </Grid>
            </Grid>
          </>
        );
        break;

      case 2:
        return (
          <>
            <Box
              sx={{
                mt: "10px",
                mb: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#DDE7F6",
                height: "100px",
              }}
            >
              <h1>Client Details</h1>
            </Box>
            <Grid container spacing={2}>
              <Grid item lg={12}>
                <TextField
                  fullWidth
                  varient="outlined"
                  placeholder="Client Name ..."
                  id="clientName"
                  size="medium"
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  varient="outlined"
                  placeholder="Phone ..."
                  id="category"
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  varient="outlined"
                  placeholder="E-Mail ..."
                  id="category"
                />
              </Grid>
            </Grid>
          </>
        );
        break;

      case 3:
        return (
          <>
            <Box
              sx={{
                mt: "10px",
                mb: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#DDE7F6",
                height: "100px",
              }}
            >
              <h1>Partner Details</h1>
            </Box>
            <Grid container spacing={2}>
              <Grid item lg={12}>
                <TextField
                  fullWidth
                  varient="outlined"
                  placeholder="Client Name ..."
                  id="clientName"
                  size="medium"
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  varient="outlined"
                  placeholder="Phone ..."
                  id="partnerPhone"
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  varient="outlined"
                  placeholder="E-Mail ..."
                  id="patnerEmail"
                />
              </Grid>
            </Grid>
          </>
        );
        break;

      case 4:
        return (
          <Card sx={{ my: "20px" }}>
            <CardContent>
              <Box
                sx={{
                  mt: "10px",
                  mb: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#DDE7F6",
                  height: "100px",
                }}
              >
                <h1>Project Description</h1>
              </Box>
              <Grid container spacing={2}>
                <Grid item lg={12}>
                  <TextField
                    fullWidth
                    varient="outlined"
                    placeholder="Project Description ..."
                    id="clientName"
                    size="medium"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
    }
  }
  return (
    <>
      <Container>
        <Card sx={{ py: "50px" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <div sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <div sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </div>
            </>
          ) : (
            <>
              <Container sx={{ color: "#000" }}>
                {ActiveStepComponent()}
              </Container>

              {/* BOTTOM BUTTONS */}

              <Box sx={{ display: "flex", flexDirection: "row", p: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: "auto" }}
                >
                  Back
                </Button>
                <div sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </Card>
      </Container>
      <Navbar />
    </>
  );
}
