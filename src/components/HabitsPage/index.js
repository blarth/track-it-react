import { useState, useContext, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import Habits from "./Habits";
import NewHabit from "./NewHabit";

export default function HabitsPage() {
  const [habits, setHabits] = useState(null);
  const [formsCount, setFormsCount] = useState(false);
  const [isSelectedDay, setIsSelectedDay] = useState([]);

  const { infoUser } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${infoUser.token} `,
    },
  };

  useEffect(() => {
    getHabits()
  }, []);
  function getHabits() {
    const promisse = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );
    promisse.then((response) => {
      setHabits(response.data);
      setIsSelectedDay(
        response.data.map((habit) => ({ ...habit, isSelectedDay: false }))
      );
    });

    promisse.catch((error) => console.log(error.response));
  }
  function handleNewHabit() {
    setFormsCount(true);
    
  }

  return (
    <>
      <Header />
      <Container>
        <ContainerAddHabits>
          <Title>Meus hábitos</Title>
          <Button onClick={handleNewHabit}>
            <Plus>+</Plus>
          </Button>
        </ContainerAddHabits>
        {formsCount === true && (
          <NewHabit
            setFormsCount={setFormsCount}
            isSelectedDay={isSelectedDay}
            setIsSelectedDay={setIsSelectedDay}
            getHabits={getHabits}
          />
        )}
        {habits?.length === 0 || habits === null ? (
          <Paragraph>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </Paragraph>
        ) : (
          habits.map((habit, i) => <Habits {...habit} key={i} />)
        )}
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ContainerAddHabits = styled.div`
width 100%;
display: flex;
height: 70px;
background-color: #E5E5E5;
display:flex;
align-items:center;
justify-content: space-between;

`;

const Button = styled.button`
  height: 35px;
  width: 40px;
  border-radius: 4.636363506317139px;
  background-color: #52b6ff;
  margin-right: 15px;
  position: relative;
  border: none;
`;

const Plus = styled.p`
  height: 34px;
  width: 16px;
  font-family: Lexend Deca;
  font-size: 27px;
  text-align: center;
  margin: auto auto;
  color: #ffffff;
`;
