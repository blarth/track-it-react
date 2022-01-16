import { useContext, useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt"
import axios from "axios";
import UserContext from "../contexts/UserContext";
import TodayHabit from "./TodayHabit";

export default function TodayPage() {
  const { infoUser, habitProgress, setHabitProgress } = useContext(UserContext);

  const [todayHabits, setTodayHabits] = useState(null);

  const config = {
    headers: {
      Authorization: `Bearer ${infoUser.token} `,
    },
  };

  function handleHabitProgress() {

    let numHabitsDone = todayHabits?.filter(habit => habit.done === true)
    setHabitProgress(numHabitsDone?.length / todayHabits?.length);
  }
  function getTodayHabits(){
    const promisse = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );
    promisse.then((response) => {
      setTodayHabits(response.data);
    });
    promisse.catch((error) => console.log(error.response));

  }
  
  useEffect(() => {
    getTodayHabits()
    // eslint-disable-line react-hooks/exhaustive-deps
  }, []);

  const dia = dayjs().locale("pt").format("dddd, DD/MM").replace("-feira" , "");

  useEffect(() => {
    handleHabitProgress()
  }, [])


  return (
    <>
      <Header />
      <Container>
        <Title>{dia}</Title>

        {isNaN(habitProgress) ? (
          <Paragraph>Nenhum hábito concluído ainda</Paragraph>
        ) : (
          <Paragraph habitProgress={habitProgress}>{(habitProgress*100).toFixed(2)}% dos habitos concluidos</Paragraph>
        )}
        {todayHabits === null ? (
          <h1>Carregando..</h1>
        ) : (
          todayHabits.map((habit, i) => (
            <TodayHabit
              key={i}
              {...habit}
              getTodayHabits={getTodayHabits}
            />
          ))
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
  padding-right: 170px;
  margin-top: 25px;
`;

const Paragraph = styled.p`
  height: 22px;
  width: fit-content;
  font-family: Lexend Deca;
  font-size: 18px;
  text-align: left;
  color: ${(props) => (!props.habitProgress ? "#bababa" : "#8FC549")};
  padding-right: 60px;
  margin-bottom: 25px;
`;
