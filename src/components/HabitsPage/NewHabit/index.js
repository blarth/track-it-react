import styled from "styled-components";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import Loader from "react-loader-spinner";

export default function NewHabit({
  setFormsCount,
  isSelectedDay,
  setIsSelectedDay,
  getHabits
}) {
  const { infoUser } = useContext(UserContext);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const daysWeek = [
    { name: "D", id: 0 },
    { name: "S", id: 1 },
    { name: "T", id: 2 },
    { name: "Q", id: 3 },
    { name: "Q", id: 4 },
    { name: "S", id: 5 },
    { name: "S", id: 6 },
  ];
  const [formNewHabit, setFormsNewHabit] = useState({
    name: "",
    days: []
  });
  const config = {
    headers: {
      Authorization: `Bearer ${infoUser.token} `,
    },
  };

  function handleNewHabit(event) {
    event.preventDefault();
    setIsWaiting(true);
    if(formNewHabit.days.length === 0) return

    
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      formNewHabit,
      config
    );
    promise.then((response) => {
      getHabits();
      setIsWaiting(false);
      setFormsCount(false);
    });
    promise.catch((error) => {
      console.log(error.response);
      setIsWaiting(false);
      alert("Cadastro de hábito não concluido, tente novamente");
    });
  }

 
  function handleSelectedDay(id) {

    if(formNewHabit.days.includes(id)){
      const newArray = formNewHabit.days.filter(day => day !== id )
      setFormsNewHabit({...formNewHabit, days : newArray  })
      
    }else{
      const newArray = [...formNewHabit.days, id]
      setFormsNewHabit({...formNewHabit, days : newArray  })
    }
    
  }

  return (
    <Container>
      <Form onSubmit={handleNewHabit}>
        <Input
          disabled={isWaiting}
          isWaiting={isWaiting}
          type="text"
          required
          placeholder="nome do hábito"
          value={formNewHabit.name}
          onChange={(e) => {
            setFormsNewHabit({ ...formNewHabit, name: e.target.value });
          }}
          name="name"
        />

        <ContainerWeekDays>
          {daysWeek.map((day, i) => {
            return (
              <ContainerDay
              key={i}
              onClick={() => {
                handleSelectedDay(day.id)
              }}
              isSelected={formNewHabit.days.includes(day.id) ? true : false}
              >
                <p>

                  {day.name}
                </p>
              </ContainerDay>
            );
          })}
        </ContainerWeekDays>

        {isWaiting ? (
          <ContainerButtons>
            <Button
              disabled={isWaiting}
              onClick={() => {
                setFormsCount(false);
              }}
            >
              Cancelar
            </Button>

            <Button disabled={isWaiting} type="submit">
              <Loader
                type="ThreeDots"
                color="#FFFFFf"
                height={40}
                width={60}
              ></Loader>
            </Button>
          </ContainerButtons>
        ) : (
          <ContainerButtons>
            <Button
              disabled={isWaiting}
              onClick={() => {
                setFormsCount(false);
              }}
            >
              Cancelar
            </Button>

            <Button disabled={isWaiting} type="submit">
              Salvar
            </Button>
          </ContainerButtons>
        )}
      </Form>
    </Container>
  );
}

const Container = styled.div`
  min-height: 180px;
  width: 90%;
  border-radius: 5px;
  background: #ffffff;
  margin-bottom: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
  align-items: center;
`;

const Button = styled.button`
  height: 35px;
  width: 84px;
  border-radius: 4.6px;
  border: none;
  background-color: #52b6ff;
  font-family: Lexend Deca;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  &:first-child {
    margin-right: 15px;
  }
`;
const Input = styled.input`
  margin-top: 18px;
  border: 1px solid #d4d4d4;
  height: 45px;
  width: 90%;
  border-radius: 5px;
  background-color: ${(props) => (props.isWaiting ? "#F2F2F2" : "#ffffff")};
  color: #666666;
;
  font-family: Lexend Deca;
  font-size: 20px;
  text-align: left;
  padding-left: 10px;
  ::placeholder {
    color: #dbdbdb;
    font-family: Lexend Deca;
    font-size: 20px;
    text-align: left;
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
const ContainerDay = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  background-color: ${(props) => (props.isSelected ? "#CFCFCF" : "#FFFFFF")};
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
    color: ${(props) => (props.isSelected ? "#ffffff" : "#DBDBDB")};
  }

  &:first-child {
    margin-left: -30px;
  }
`;
const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 55px;
  width: 90%;
  border: none;
  background-color: #ffffff;
  font-family: Lexend Deca;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 30px;
`;
