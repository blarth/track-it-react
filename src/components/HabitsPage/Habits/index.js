import React from "react";
import styled from "styled-components";
import trash from "../../../assets/Group.png";
import { useContext} from "react";
import Swal from 'sweetalert2'
import axios from "axios";
import UserContext from "../../contexts/UserContext";


export default function Habits({ id, name, days }) {

  const { infoUser } = useContext(UserContext);
    
  const daysWeek = [
    { name: "D", id: 0 },
    { name: "S", id: 1 },
    { name: "T", id: 2 },
    { name: "Q", id: 3 },
    { name: "Q", id: 4 },
    { name: "S", id: 5 },
    { name: "S", id: 6 },
  ];

  function handleDelete(){
  
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Se deletar este hábito, não poderá voltar atrás!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim! Apague meu hábito por favor!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {
        headers: {
          Authorization: `Bearer ${infoUser.token} `,
        },
        data: {
          id : id
        },
      });
      }
    })
}  

 

  return (
    <>
      <Container>
        <TrashIcon onClick={handleDelete} src={trash} alt="erro trash"></TrashIcon>
        <Paragraph>{name}</Paragraph>
        <ContainerWeekDays>
          {daysWeek.map((day , i) => {
            
            return (
              <ContainerDay  key={i} id={day.id} isHabitDay={days.includes(day.id) ? true : false} >
                <p>{day.name}</p>
              </ContainerDay>
            );
          })}
        </ContainerWeekDays>
      </Container>
    </>
  );
}

const Container = styled.div`
  min-height: 90px;
  width: 90%;
  border-radius: 5px;
  background-color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 80px;
  }
`;
const TrashIcon = styled.img`
  height: 15px;
  width: 13px;
  position: absolute;
  top: 11px;
  right: 10px;
`;

const Paragraph = styled.p`
height: 25px;
width: fit-content:
font-family: Lexend Deca;
font-size: 20px;
text-align: left;
color: #666666;
margin-top: 13px;
margin-left: 15px;

`;

const ContainerDay = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  background-color: ${(props) => (props.isHabitDay ? "#CFCFCF" : "#FFFFFF")};
  border: 1px solid #d4d4d4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  p {
    height: 25px;
    width: 15px;
    font-family: Lexend Deca;
    font-size: 20px;
    text-align: left;
    color: ${(props) => (props.isHabitDay ? "#ffffff" : "#DBDBDB")};
  }

  &:first-child {
    margin-left: 15px;
  } 
`;

const ContainerWeekDays = styled.div`
  width: 70%;
  height: 40px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  position: relative;
`;
