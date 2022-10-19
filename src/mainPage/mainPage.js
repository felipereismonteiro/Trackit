import styled from "styled-components"
import logo from "../components/assets/Group.png"

export default function MainPage() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }

    return(
        <Container>
            <img src={logo} alt="logo" />
            <Form onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="email" required />
                <input name="password" type="password" placeholder="senha" required/>
                <button type="submit">Entrar</button>
            </Form>
            <p>Não tem uma conta? Cadastre-se!</p>
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