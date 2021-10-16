import logo from "./logo.svg";
import {
  Grid,
  IconButton,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import qs from "qs";
import { useLocation } from "react-router-dom";

import {
  FastForward,
  FastRewind,
  Pause,
  PlayArrow,
  SkipNext,
  SkipPrevious,
} from "@material-ui/icons";

const makeTimestamp = (sec) => new Date(sec * 1000).toISOString().substr(11, 8);
function App() {
  const { ep = "67" } = qs.parse(useLocation().search, {
    ignoreQueryPrefix: true,
  });
  let runtime = 4321;
  let title = "Knife to Meet You";
  const [isPlaying, setIsPlaying] = useState(false);
  const [playhead, setPlayhead] = useState(0);
  switch (ep) {
    case "67":
      break;
    case "68":
      title = "The Oro Valley Face Taker";
      runtime += 890;
      break;
    case "74":
      title = "Georgi Markov: A Chance of Rain";
      runtime += 440;
      break;
    default:
      break;
  }
  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setPlayhead((p) => p + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [setPlayhead, isPlaying]);
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Typography variant="h5">World Wide Murder Mysteries</Typography>
      <Typography variant="body1">
        Episode {ep}: {title}
      </Typography>
      <Typography variant="body2"></Typography>{" "}
      <div style={{ width: "100%" }}>
        <LinearProgress
          color="primary"
          value={(playhead / runtime) * 100}
          valueBuffer={100}
          variant="buffer"
        />
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: "18px 5px 0px" }}
        >
          <Typography style={{ fontSize: "10px" }}>
            {makeTimestamp(playhead)}
          </Typography>
          <Typography style={{ fontSize: "10px" }}>
            {makeTimestamp(runtime)}
          </Typography>
        </Grid>

        <Grid container justifyContent="space-between">
          <IconButton onClick={() => setPlayhead(0)}>
            <SkipPrevious color="primary" />
          </IconButton>{" "}
          <IconButton onClick={() => setPlayhead(341)}>
            <FastRewind color="primary" />
          </IconButton>
          <IconButton onClick={() => setIsPlaying((prev) => !prev)}>
            {isPlaying ? (
              <PlayArrow color="primary" style={{ fontSize: "52px" }} />
            ) : (
              <Pause color="primary" style={{ fontSize: "52px" }} />
            )}
          </IconButton>
          <IconButton>
            <FastForward color="primary" />
          </IconButton>{" "}
          <IconButton>
            <SkipNext color="primary" />
          </IconButton>
        </Grid>
      </div>
    </Grid>
  );
}

export default App;
