import React from "react";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import { useState } from "react";
import {Link , useNavigate} from "react-router-dom"
import axios from "axios"
import Loader from "react-loader-spinner";




export default function SignUpPage() {
    const [isWaiting , setIsWaiting] = useState(false)
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
      });

    function handleLogin(event) {

        event.preventDefault();
        setIsWaiting(true)


        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', 
      formData
    );
        promise.then(response => {

            
            setIsWaiting(false)
            navigate("/")
            
        }
        )
        promise.catch(error => {console.log(error.response)
            setIsWaiting(false)
            alert("Cadastro não concluido, tente novamente")
        
        });
  }
      

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
      }
    

  return (
    <Container>
      <Image src={logo} alt="imagem logo"></Image>
      <Form onSubmit={handleLogin} isWaiting={isWaiting} setIsWaiting={setIsWaiting} >
        <Input
          disabled={isWaiting}
          isWaiting={isWaiting}
          type="email"
          required
          placeholder="email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
        />
        <Input
          disabled={isWaiting}
          isWaiting={isWaiting}
          type="password"
          required
          placeholder="senha"
          value={formData.password}
          onChange={handleInputChange}
          name="password"
        />
        <Input
          isWaiting={isWaiting}
          disabled={isWaiting}
          type="text"
          required
          placeholder="name"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
        />
        <Input
        isWaiting={isWaiting}
        disabled={isWaiting}
          type="url"
          required
          placeholder="foto"
          value={formData.image}
          onChange={handleInputChange}
          name="image"
        />
        {isWaiting ? <Button><Loader type="ThreeDots" color="#FFFFFf" height={45} width={60}></Loader></Button> : <Button disabled={isWaiting} type="submit">Cadastrar</Button> }
        
      </Form>
      <Link to="/">
        <PLink>Já tem uma conta? Faça login!</PLink>
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
  background-color: ${(props) => props.isWaiting ? "#F2F2F2" : "#ffffff"};
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
