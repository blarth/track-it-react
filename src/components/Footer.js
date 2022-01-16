import React, { useContext } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import UserContext from "./contexts/UserContext";

export default function Footer() {
  const { habitProgress } = useContext(UserContext);

  return (
    <Container>
      <Link to="/habits">
        <Paragraph>Hábitos</Paragraph>
      </Link>
      
      <ContentProgressbar>

        <Circle>
        <Link to="/today">
          
            <CircularProgressbar
              value={isNaN(habitProgress) ? 0 : habitProgress * 100}
              
              text={"Hoje"}
              background
              
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
                textFamily: "Lexend Deca",
              })}
            />
          
          </Link>
        </Circle>
      </ContentProgressbar>
      
      <Link to="/record">
        <Paragraph>Histórico</Paragraph>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding-left: 36px;
  padding-right: 36px;
  z-index: 2;
`;
const Paragraph = styled.p`
  height: 22px;
  width: 68px;
  font-family: Lexend Deca;
  font-size: 18px;
  color: #52b6ff;
`;
const ContentProgressbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const Circle = styled.div`
  width: 90px;
  height: 90px;

  position: absolute;
  top: -40px;
  
`;
