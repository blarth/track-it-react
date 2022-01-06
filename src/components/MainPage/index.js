import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";
import Loader from "react-loader-spinner";
import UserContext from "../contexts/UserContext";


export default function MainPage() {
  const [isWaiting , setIsWaiting] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setInfoUser} = useContext(UserContext)


  
  function handleLogin(event) {

    event.preventDefault();
    setIsWaiting(true)

    const objectLogin = {
      email: email,
      password: password
    }
    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', 
  objectLogin
);
    promise.then(response => {
        setInfoUser(response.data)
        setIsWaiting(false)
        navigate("/today")
        
    }
    )
    promise.catch(error => {
        setIsWaiting(false)
        alert("Login não concluido, tente novamente")
    
    });
}
  


  return (
    <Container>
      <Image src={logo} alt="imagem logo"></Image>
      <Form onSubmit={handleLogin} isWaiting={isWaiting} setIsWaiting={setIsWaiting}>
        <Input
        disabled={isWaiting}
        isWaiting={isWaiting}
          type="email"
          required
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
        disabled={isWaiting}
        isWaiting={isWaiting}
          type="password"
          required
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isWaiting ? <Button><Loader type="ThreeDots" color="#FFFFFf" height={45} width={60}></Loader></Button> : <Button disabled={isWaiting} type="submit">Entrar</Button> }
      </Form>
      <Link to="/signup">
        <PLink>Não tem uma conta? Cadastre-se!</PLink>
      </Link>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  max-width: 50%;
  max-height: 180px;
  margin-top: 18%;
`;

const Input = styled.input`
  border: 1px solid #d4d4d4;
  height: 45px;
  width: 90%;
  border-radius: 5px;

  ::placeholder {
    color: #dbdbdb;
    font-family: Lexend Deca;
    font-size: 20px;
    text-align: left;
  }
`;
const Button = styled.button`

height: 45px;
width: 90%;
border-radius: 4.6px;
background: #52B6FF;
color:#FFFFFF;
font-size: 21px;
border: none;

`;

const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
gap: 6px;
align-items:center;
`;

const PLink = styled.p`

height: 17px;
width: content;
font-family: Lexend Deca;
font-size: 14px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
margin-top: 25px;


`;

/* 
const requisicao = axios.post("https://minha-api.com/login", {
			email: email,
			senha: senha
		}); */
