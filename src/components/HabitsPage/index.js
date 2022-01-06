import React, { useContext } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import button from "../../assets/buttonAdd.png";

export default function HabitsPage() {
  function handleNewHabit() {
    console.log("hello");
  }

  return (
    <>
      <Header />
      <Container>
        <ContainerNewHabits>
          <Title>Meus hábitos</Title>
          <Button onClick={handleNewHabit}>
            <img src={button}></img>
          </Button>
        </ContainerNewHabits>
        <Paragraph>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </Paragraph>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  min-height: 597px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
`;

const Title = styled.p`
  height: 29px;
  width: fit-content;
  font-family: Lexend Deca;
  font-size: 23px;
  text-align: left;
  color: #126ba5;
  padding-left: 15px;
  margin-top: 25px;
`;

const Paragraph = styled.p`
  height: 22px;
  width: fit-content;
  font-family: Lexend Deca;
  font-size: 18px;
  text-align: left;
  color: #666666;
  padding-left: 10px;
  margin-bottom: 25px;
  margin-top: 15px;
  padding-right: 10px;
`;

const ContainerNewHabits = styled.div`
width 100%;
display: flex;
height: 70px;
background-color: #E5E5E5;
display:flex;
align-items:center;
justify-content: space-between;

`;

const Button = styled.button`
  width: 40px;
  height: 35px;
  margin-right: 15px;
`;
