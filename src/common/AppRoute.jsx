import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../component/Header";
import ScoreBoard from "../page/ScoreBoard";
import Submissions from "../page/Submissions";

const AppRoute = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/*" element={<ScoreBoard/>}></Route>
          <Route exact path="/" element={<ScoreBoard />}></Route>
          <Route exact path="/submissions/:id" element={<Submissions />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoute;
