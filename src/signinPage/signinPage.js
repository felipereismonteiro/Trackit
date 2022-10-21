import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import logo from "../components/assets/Group.png"

export default function SigninPage() {
    const [disable, setDisable] = useState(false)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email: e.target.email.value,
            name: e.target.name.value,
            image: e.target.url.value,
            password: e.target.password.value
        }).then(
            navigate("/")
        ).catch((e) => {
            alert(e.response.data.message);
            setDisable(false)
        }) 

    }

    function loading() {
        if(disable === false) {
            return <button type="submit" >Cadastrar</button>
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

    return(
        <Container>
            <img src={logo} alt="logo" />
            <Form onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="email" required disabled={disable} />
                <input name="password" type="password" placeholder="senha" required disabled={disable} />
                <input name="name" type="text" placeholder="nome" required disabled={disable} />
                <input name="url" type="text" placeholder="foto" required disabled={disable} />
                {loading()}
            </Form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
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
    }
`