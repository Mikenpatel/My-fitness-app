import { Box } from "@mui/material";
import React from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercise";
import Exercises from "../components/Exercises";

function Home() {
  const [exercises, setExercises] = React.useState([]);
  const [bodyPart, setBodyPart] = React.useState([]);

  console.log(bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
}

export default Home;
