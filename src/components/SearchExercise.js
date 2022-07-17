import { Button, Stack, TextField, Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

function SearchExercise({ setExercises, setBodyPart, bodyPart }) {
  const [bodyParts, setBodyParts] = React.useState([]);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      //console.log(bodyPartsData);
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExerciseData();
  }, []);

  //console.log(bodyParts);

  const handleSearch = async () => {
    if (search) {
      const excerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = excerciseData.filter(
        (item) =>
          item.bodyPart.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      setSearch("");
      console.log(searchedExercises);
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fondtSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You
        <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          placeholder="Search Exercise"
          type="text"
          onChange={(event) => setSearch(event.target.value)}
          value={search}
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
}

export default SearchExercise;
