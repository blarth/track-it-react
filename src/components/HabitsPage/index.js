import {useState,  useContext, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import Habits from "./Habits";

export default function HabitsPage() {

  const [habits , setHabits] = useState(null)

  const {infoUser} = useContext(UserContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${infoUser.token} `
        }
    }

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits" , config

        )
        promisse.then(response => setHabits(response.data))
        promisse.catch(error => console.log(error.response))


    }, [])
    
    
    console.log(habits)
    
    
    function handleNewHabit() {
      
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
        {habits === null ? <Paragraph>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </Paragraph> : 
        habits.map(habit => (
          
          <Habits
          {...habit}
          />
          ))
          
        }
        
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  background-color: #e5e5e5;
  width: 100%;
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
  background-color: #52B6FF;
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
position: absolute;
right: 9px;
bottom: 1px;
color: #FFFFFF;


`;



/* useEffect(() => {
  const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits" ,{
    name: "Primeiro Hábito",
    days: [0, 3, 6] 
  } ,config

  )
  promisse.then(response => console.log(response.data))
  promisse.catch(error => console.log(error.response))


}, []) */