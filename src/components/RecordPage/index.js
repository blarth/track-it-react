import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styled from 'styled-components'

export default function RecordPage() {
    return (
        <>
            <Header />
            <Container>
                <Title>Histórico</Title>
                <Paragraph>Em breve você poderá ver o histórico dos seus hábitos aqui!</Paragraph>
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
padding-right: 230px;
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

