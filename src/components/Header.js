import React, {useContext} from 'react'
import styled from 'styled-components'
import textlogo from "../assets/TrackIt.png"
import UserContext from './contexts/UserContext'


export default function Navbar() {

    const {infoUser} = useContext(UserContext)

    return (
        <>
        <Container>
            <ImageLogo src={textlogo} alt='erro'></ImageLogo>
            <ContainerAvatar>
                <Image src={infoUser.image} alt='imagem'></Image>
            </ContainerAvatar>
        </Container>

        </>
    )
}


const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #126BA5;
height: 70px;
width:100%;
box-shadow: 0px 4px 4px 0px #00000026;
position: fixed;
top:0px;
left: 0;
z-index: 2;

`;
const ContainerAvatar = styled.div`
display: flex;
align-items: center;
justify-content:center;
width: 50px;
height: 50px;
margin-right: 2px;
margin-left: 2px;
overflow: hidden;
border-radius: 100px;
background-color: white;
margin-right: 18px;

`;

const Image = styled.img`
    max-width: 55px;

`;

const ImageLogo = styled.img`
    margin-left: 18px;
`;

