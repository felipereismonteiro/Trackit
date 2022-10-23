import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components"
import logo from "../components/assets/Group.png"
import axios from "axios";
import { Contexto } from "../components/logadoContext";



export default function MainPage() {
    const navigate = useNavigate()
    const [disable, setDisable] = useState(false)
    const [emailSenha, setEmailSenha] = useState({email: "", senha: ""})
    const { setLogado } = useContext(Contexto)

    function handleSubmit(e) {
        e.preventDefault();
        setDisable(true);

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
            email: e.target.email.value,
            password: e.target.password.value
        }).then((res) => {   
            navigate("/hoje")
            setLogado(res.data)
        }).catch((e) => {
            alert(e.response.data.message);
            setDisable(false)
            setEmailSenha({email: "", senha: ""})
        });

    }

    function loading() {
        if(disable === false) {
            return <button type="submit" >Entrar</button>
        } else {
            return <button type="submit" ><ThreeDots
                        height="80" 
                        width="80" 
                        radius="9"
                        color="white" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    /></button>
        }
    }

    function handleEmail(e) {
        setEmailSenha({...emailSenha, email: e.target.value})
    }

    function handlePassword(e) {
        setEmailSenha({...emailSenha, senha: e.target.value})
    }

    return (
        <Container>
            <img src={logo} alt="logo" />
            <Form onSubmit={handleSubmit}>
                <input name="email" value={emailSenha.email} type="email" placeholder="email" required onChange={handleEmail} disabled={disable} />
                <input name="password" value={emailSenha.senha} type="password" placeholder="senha" required onChange={handlePassword} disabled={disable} />
                {loading()}
            </Form>
                <Link to="/cadastro">
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    && img {
        width: 200px;
        margin-top: 50px;
    }
    && p{
        color: #52B6FF;
        margin: 30px;
        text-decoration: underline;
        font-family: 'Lexend Deca';
        font-size: 15px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    position: relative;
    && input{
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        height: 45px;
        box-sizing: border-box;
        padding: 10px;
        font-family: 'Lexend Deca';
        font-size: 20px;
        margin: 5px 0px;
    }
    && button{
        border: none;
        background-color: #52B6FF;
        height: 45px;
        font-size: 20px;
        color: white;
        font-family: 'Lexend Deca';
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`