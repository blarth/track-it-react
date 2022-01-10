import  { useContext, useEffect , useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";
import dayjs from "dayjs";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import TodayHabit from "./TodayHabit";

export default function TodayPage() {
  const { infoUser , habitProgress, setHabitProgress } = useContext(UserContext);
  
  const [todayHabits, setTodayHabits] = useState(null)

  const config = {
    headers: {
      Authorization: `Bearer ${infoUser.token} `,
    },
  };

  
function handleHabitProgress(){
  let numHabitsDone = todayHabits.filter( (habit) => {
    if(habit.done === true){
      return habit.id
    }
  }
  )

  console.log(numHabitsDone)
  setHabitProgress(  numHabitsDone.length  / todayHabits.length)


}



  useEffect(() => {
    const promisse = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );
    promisse.then((response) => {
      setTodayHabits(response.data)
      
    })
    promisse.catch((error) => console.log(error.response));
  }, [todayHabits]);

  const dia = dayjs().format("dddd, DD/MM");

  return (
    <>
      <Header />
      <Container>
        <Title>{dia}</Title>
        
        {habitProgress === 0 ? <Paragraph>Nenhum hábito concluído ainda</Paragraph> : <Paragraph>{habitProgress}% dos habitos concluidos</Paragraph> }
        { todayHabits === null ? <h1>Carregando..</h1>
        : todayHabits.map((habit , i) => <TodayHabit  key={i} {...habit} handleHabitProgress={handleHabitProgress} />
        )
        }
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
  color: #bababa;
  padding-right: 60px;
  margin-bottom: 25px;
`;

