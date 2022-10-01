import React from "react";
import { useParams } from "react-router";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import SubmissionsPageData from "../component/SubmissionsPageData";
import SubmissionsData from "../data/SUBMISSION_DATA.json";
import { Container } from "@mui/material";

const Submissions = () => {
  const id = useParams();
  const images = ["/images/Kitten--coding.gif","/images/blue-cat.gif","/images/orange-cat.gif","/images/rabit.gif","/images/cute-cat.gif"];
  const imageIndex = Math.floor(Math.random() * images.length);
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
        <Grid item xs={12} sm={6}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <img src={images[imageIndex]} alt="" style={{ height: "250px", width: "250px" }} />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          {SubmissionsData.filter((dam) => dam.subID === id.id).map((data) => (
            <Box key={data.subID}>
              <SubmissionsPageData data={data} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Submissions;
