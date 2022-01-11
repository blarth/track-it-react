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
      <Link to="/today">
        <Circle>
          {
            <CircularProgressbar
              value={isNaN(habitProgress) ? 0 : habitProgress * 100}
              text={"Hoje"}
              background
              minValue={0}
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
                textFamily: "Lexend Deca",
              })}
            />
          }
        </Circle>
      </Link>
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

const Circle = styled.div`
  height: 91px;
  width: 91px;
  margin-bottom: 35px;
`;
