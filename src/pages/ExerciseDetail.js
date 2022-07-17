import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercise from "../components/SimilarExercise";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";

function ExerciseDetail() {
  const { id } = useParams();
  const [ExerciseDetail, setExerciseDetail] = React.useState({});
  const [exerciseVideos, setExerciseVideos] = React.useState([]);
  const [targetMuscleExercisesData, settargetMuscleExercisesData] =
    React.useState([]);
  const [equimentExercisesData, setequimentExercisesData] = React.useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      settargetMuscleExercisesData(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setequimentExercisesData(equimentExercisesData);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Details ExerciseDetail={ExerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={ExerciseDetail.name}
      />
      <SimilarExercise
        targetMuscleExercisesData={targetMuscleExercisesData}
        equimentExercisesData={equimentExercisesData}
      />
    </Box>
  );
}

export default ExerciseDetail;
