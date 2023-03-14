import React from "react";
import styled from "styled-components";
import Mainpage from "../Components/Partials/Mainpage";
import MainTemplate from "../Styles/Templates/MainTemplate";

const Home = () => {
  return (
    <Mainpage title="Velkommen til cornpub" description="siden med lækkerier">
      <MainTemplate>
        <header>min fede header A</header>
        <div>min B section</div>
        <div>min C </div>
        <aside>min D</aside>
        <footer>min fede footer E</footer>
      </MainTemplate>
    </Mainpage>
  );
};

export default Home;
