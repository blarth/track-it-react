import React, { useContext, useEffect } from 'react'
import Header from '../Header'
import Footer from "../Footer"
import styled from 'styled-components'
import dayjs from "dayjs"
import axios from 'axios'
import UserContext from '../contexts/UserContext'


export default function TodayPage() {

    const {infoUser} = useContext(UserContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${infoUser.token} `
        }
    }

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today" , config

        )
        promisse.then(response => console.log(response))
        promisse.catch(error => console.log(error.response))


    }, [])
    
    

    const dia = dayjs().format('dddd, DD/MM')

    return (
        <>
        <Header />
        <Container>
            <Title>{dia}</Title>
            <Paragraph>Nenhum hábito concluído ainda</Paragraph>
        </Container>
        <Footer />
        </>
    )
}


const Container = styled.div`
    background-color: #E5E5E5;
    width: 100%;
    display:flex;
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
color: #126BA5;
padding-right: 140px;
margin-top: 25px;


`;


const Paragraph = styled.p`
height: 22px;
width: fit-content;
font-family: Lexend Deca;
font-size: 18px;
text-align: left;
color: #BABABA;
padding-right: 40px;
margin-bottom: 25px;

`;