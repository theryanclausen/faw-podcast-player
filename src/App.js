import logo from "./logo.svg";
import "./App.css";
import {
  Grid,
  IconButton,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { Pause, PlayArrow } from "@material-ui/icons";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Typography variant="h5">World Wide Murder Mysteries</Typography>
      <IconButton onClick={() => setIsPlaying((prev) => !prev)}>
        {isPlaying ? (
          <PlayArrow style={{ fontSize: "52px" }} />
        ) : (
          <Pause style={{ fontSize: "52px" }} />
        )}
      </IconButton>
      <LinearProgress style={{ width: "100%" }} />
    </Grid>
  );
}

export default App;
