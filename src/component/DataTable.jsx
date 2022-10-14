import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function DataTable(props) {
  return (
    <TableContainer component={Paper} sx={{marginTop:'30px'}}>
      <Table sx={{ width: '100%' }} aria-label="caption table">
        <caption>Scoreboard</caption>
        <TableHead>
          <TableRow>
            <TableCell><b>Rank</b></TableCell>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Score</b></TableCell>
            <TableCell><b>Problem A Result</b></TableCell>
            <TableCell><b>Problem B Result</b></TableCell>
            <TableCell><b>Problem C Result</b></TableCell>
            <TableCell><b>Problem D Result</b></TableCell>
            <TableCell><b>Problem E Result</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!props.searchText &&
            props.data.map((row) => (
              <TableRow key={row.id}>
                <TableCell><b>{row.rank}</b></TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell><b>{row.score}</b></TableCell>
                <TableCell>
                  <Link
                    style={{
                      textDecoration: "none",
                      color:
                        row.scoreA.status === "All Test Case Pass"
                          ? "green"
                          : "red",
                    }}
                    to={`/submissions/${row.scoreA.subID}`}
                  >
                    {row.scoreA.status}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    style={{
                      textDecoration: "none",
                      color:
                        row.scoreB.status === "All Test Case Pass"
                          ? "green"
                          : "red",
                    }}
                    to={`/submissions/${row.scoreB.subID}`}
                  >
                    {row.scoreB.status}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    style={{
                      textDecoration: "none",
                      color:
                        row.scoreC.status === "All Test Case Pass"
                          ? "green"
                          : "red",
                    }}
                    to={`/submissions/${row.scoreC.subID}`}
                  >
                    {row.scoreC.status}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    style={{
                      textDecoration: "none",
                      color:
                        row.scoreD.status === "All Test Case Pass"
                          ? "green"
                          : "red",
                    }}
                    to={`/submissions/${row.scoreD.subID}`}
                  >
                    {row.scoreD.status}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    style={{
                      textDecoration: "none",
                      color:
                        row.scoreE.status === "All Test Case Pass"
                          ? "green"
                          : "red",
                    }}
                    to={`/submissions/${row.scoreE.subID}`}
                  >
                    {row.scoreE.status}
                  </Link>
                </TableCell>
              </TableRow>
            ))}

          {props.searchText &&
            props.data
              .filter((dam) =>
                dam.name.toLowerCase().includes(props.searchText.toLowerCase())
              )
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell><b>{row.rank}</b></TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell><b>{row.score}</b></TableCell>
                  <TableCell>
                    <Link
                      style={{
                        textDecoration: "none",
                        color:
                          row.scoreA.status === "All Test Case Pass"
                            ? "green"
                            : "red",
                      }}
                      to={`/submissions/${row.scoreA.subID}`}
                    >
                      {row.scoreA.status}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      style={{
                        textDecoration: "none",
                        color:
                          row.scoreB.status === "All Test Case Pass"
                            ? "green"
                            : "red",
                      }}
                      to={`/submissions/${row.scoreB.subID}`}
                    >
                      {row.scoreB.status}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      style={{
                        textDecoration: "none",
                        color:
                          row.scoreC.status === "All Test Case Pass"
                            ? "green"
                            : "red",
                      }}
                      to={`/submissions/${row.scoreC.subID}`}
                    >
                      {row.scoreC.status}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      style={{
                        textDecoration: "none",
                        color:
                          row.scoreD.status === "All Test Case Pass"
                            ? "green"
                            : "red",
                      }}
                      to={`/submissions/${row.scoreD.subID}`}
                    >
                      {row.scoreD.status}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      style={{
                        textDecoration: "none",
                        color:
                          row.scoreE.status === "All Test Case Pass"
                            ? "green"
                            : "red",
                      }}
                      to={`/submissions/${row.scoreE.subID}`}
                    >
                      {row.scoreE.status}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
