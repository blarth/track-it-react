import React from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

export default function Footer() {
  const porcentage = 0;

  return (
    <Container>
      <Link to="/habits">
        <Paragraph>Hábitos</Paragraph>
      </Link>
      <Link to="/today">
        <ContainerProgressBar>
          <CircularProgressbar
            value={porcentage}
            text={"Hoje"}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#fff",
              textSize: "18px",
              textMargin: "10px",
              pathColor: "#fff",
              trailColor: "transparent",
              textFamily: "Lexend Deca",
            })}
          />
          ;
        </ContainerProgressBar>
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
`;
const Paragraph = styled.p`
  height: 22px;
  width: 68px;
  font-family: Lexend Deca;
  font-size: 18px;
  text-align: center;
  color: #52b6ff;
`;

const ContainerProgressBar = styled.div`
  height: 91px;
  width: 91px;
  margin-bottom: 30px;
`;
