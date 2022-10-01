import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DataTable from "../component/DataTable";
import contestMockData from "../data/MOCK_DATA.json";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container } from "@mui/material";

const ScoreBoard = () => {
  const [contestData, setContestData] = useState([]);

  const [sortValue, setSortValue] = React.useState(0);
  const [filterValue, setFilterValue] = React.useState(null);
  const [filterProblem, setFilterProblem] = React.useState("");
  const [filterName, setFilterName] = React.useState("");

  const filterOptions = ["Filter By Name", "Filter By Problem"];

  useEffect(() => {
    if (sortValue === 0) {
      const initialData = [...contestMockData].sort((a, b) => a.rank - b.rank);
      setContestData(initialData);
    } else {
      const initialData = [...contestMockData].sort((a, b) => b.rank - a.rank);
      setContestData(initialData);
    }
  }, [sortValue]);

  useEffect(() => {
    if (filterProblem === 1) {
      const initialData1 = [...contestMockData].filter(
        (a) => a.scoreA.status === "All Test Case Pass"
      );
      const initialData = [...initialData1].sort((a, b) => a.rank - b.rank);
      setContestData(initialData);
    } else if (filterProblem === 2) {
      const initialData1 = [...contestMockData].filter(
        (a) => a.scoreB.status === "All Test Case Pass"
      );
      const initialData = [...initialData1].sort((a, b) => a.rank - b.rank);
      setContestData(initialData);
    } else if (filterProblem === 3) {
      const initialData1 = [...contestMockData].filter(
        (a) => a.scoreC.status === "All Test Case Pass"
      );
      const initialData = [...initialData1].sort((a, b) => a.rank - b.rank);
      setContestData(initialData);
    } else if (filterProblem === 4) {
      const initialData1 = [...contestMockData].filter(
        (a) => a.scoreD.status === "All Test Case Pass"
      );
      const initialData = [...initialData1].sort((a, b) => a.rank - b.rank);
      setContestData(initialData);
    } else if (filterProblem === 5) {
      const initialData1 = [...contestMockData].filter(
        (a) => a.scoreE.status === "All Test Case Pass"
      );
      const initialData = [...initialData1].sort((a, b) => a.rank - b.rank);
      setContestData(initialData);
    }
  }, [filterProblem]);

  useEffect(() => {
    if (filterValue == null) {
      const initialData = [...contestMockData].sort((a, b) => a.rank - b.rank);
      setContestData(initialData);
      setFilterName("");
      setSortValue(0);
      setFilterProblem("");
      setFilterName("");
    }
    setSortValue(0);
  }, [filterValue]);

  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        sx={{ marginTop: "80px" }}
      >
        <img
          src="/images/html.gif"
          alt=""
          style={{ maxHeight: "100px", maxWidth: "100px" }}
        />
        <img
          src="/images/coding.gif"
          alt=""
          style={{ maxHeight: "100px", maxWidth: "100px" }}
        />
        <img
          src="/images/html.gif"
          alt=""
          style={{ maxHeight: "100px", maxWidth: "100px" }}
        />
      </Stack>
      <Grid container spacing={2} sx={{ marginTop: "40px" }}>
        <Grid item xs={12} sm={4}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortValue}
              onChange={(event) => {
                setSortValue(event.target.value);
              }}
            >
              <MenuItem value={0}>From Higher To Lower Rank</MenuItem>
              <MenuItem value={1}>From Lower To Higher Rank</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Autocomplete
            sx={{ width: "100%" }}
            value={filterValue}
            onChange={(event, newValue) => {
              setFilterValue(newValue);
            }}
            options={filterOptions}
            renderInput={(params) => (
              <TextField {...params} label="Filter Data by" />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          {filterValue === "Filter By Name" && (
            <TextField
              sx={{ width: "100%" }}
              value={filterName}
              onChange={(event) => {
                setFilterName(event.target.value);
              }}
              label="Enter Name"
              variant="outlined"
            />
          )}

          {filterValue === "Filter By Problem" && (
            <FormControl sx={{ width: "100%" }}>
              <InputLabel>Select Problem</InputLabel>
              <Select
                value={filterProblem}
                onChange={(event) => {
                  setFilterProblem(event.target.value);
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Problem A</MenuItem>
                <MenuItem value={2}>Problem B</MenuItem>
                <MenuItem value={3}>Problem C</MenuItem>
                <MenuItem value={4}>Problem D</MenuItem>
                <MenuItem value={5}>Problem E</MenuItem>
              </Select>
            </FormControl>
          )}
        </Grid>
      </Grid>

      {filterName.length === 0 && <DataTable data={contestData} />}
      {filterName.length > 0 && (
        <DataTable data={contestData} searchText={filterName} />
      )}
    </Container>
  );
};

export default ScoreBoard;
