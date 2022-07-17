import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";

function SimilarExercise({ targetMuscleExercisesData, equimentExercisesData }) {
  // console.log(targetMuscleExercisesData);
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercisesData.length !== 0 ? (
          <HorizontalScrollbar data={targetMuscleExercisesData} />
        ) : (
          <div>Loading....</div>
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          ml: "20px",
          mt: { lg: "100px", xs: "60px" },
        }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Equipment
        </span>
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {equimentExercisesData.length !== 0 ? (
          <HorizontalScrollbar data={equimentExercisesData} />
        ) : (
          <div>Loading....</div>
        )}
      </Stack>
    </Box>
  );
}

export default SimilarExercise;
