import { useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import check from "../../../assets/Vector.png";

export default function TodayHabit({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
  handleHabitProgress,
}) {
  const { infoUser } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${infoUser.token} `,
    },
  };

  return (
    <Container>
      <ContainerParagraph>
        <Paragraph>{name}</Paragraph>
        <InfoHabit done={done}>
          Sequencia atual: {currentSequence} dias
        </InfoHabit>
        <InfoHabitRecord
          done={done}
          currentSequence={currentSequence}
          highestSequence={highestSequence}
        >
          Seu record: {highestSequence} dias{" "}
        </InfoHabitRecord>
      </ContainerParagraph>
      {!done ? (
        <Button
          done={done}
          onClick={(e) => {
            const promisse = axios.post(
              `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
              {},
              config
            );
            promisse.then(handleHabitProgress);
            promisse.catch((error) => console.log(error.response));
          }}
        >
          {" "}
          <Image src={check}></Image>
        </Button>
      ) : (
        <Button
          done={done}
          onClick={(e) => {
            const promisse = axios.post(
              `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
              {},
              config
            );
            promisse.then(handleHabitProgress);
            promisse.catch((error) => console.log(error.response));
          }}
        >
          {" "}
          <Image src={check}></Image>
        </Button>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 94px;
  width: 340px;
  left: 18px;
  top: 177px;
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  margin-bottom: 10px;
`;
const ContainerParagraph = styled.div`
  width: 70%;
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

const InfoHabit = styled.p`
  height: 16px;
  width: 156px;
  border-radius: nullpx;
  font-family: Lexend Deca;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => (props.done ? "#8FC549" : "#666666")};
  margin-left: 15px;
`;
const InfoHabitRecord = styled.p`
  height: 16px;
  width: 156px;
  border-radius: nullpx;
  font-family: Lexend Deca;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) =>
    props.highestSequence === props.currentSequence ? "#8FC549" : "#666666"};
  margin-left: 15px;
`;

const Button = styled.button`
  height: 69px;
  width: 69px;
  border-radius: 5px;
  background-color: ${(props) => (props.done ? "#8FC549" : "#EBEBEB")};
  border: 1px solid #e7e7e7;
  margin: 13px 13px;
`;

const Image = styled.img`
  height: 28px;
  width: 35px;
  color: #ffffff;
`;
