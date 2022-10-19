import styled from "styled-components"

export default function AddHabito() {
    return(
        <Container>
            <Form onSubmit="">
                    <Nome type="text" placeholder="nome do hábito"/>
                <Checkboxes>
                    <button type="button">D</button>
                    <button type="button">S</button>
                    <button type="button">T</button>
                    <button type="button">Q</button>
                    <button type="button">Q</button>
                    <button type="button">S</button>
                    <button type="button">S</button>
                </Checkboxes>
                <Enviar>
                    <input type="button" value="Cancelar" className="cancelar" />
                    <input type="submit" className="enviar" value="Salvar" />
                </Enviar>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    margin: 10px 10px;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 30px;
`

const Nome = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    box-sizing: border-box;
    padding: 10px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: -10px;
`

const Enviar = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: -10px;
    && .cancelar {
        border: none;
        background-color: #FFFFFF;
        color: #52B6FF;
    }
    && .enviar {
        background: #52B6FF;
        color: white;
        border: none;
        width: 84px;
        height: 35px;
        border-radius: 5px;
    }
`

const Checkboxes = styled.div`  
    margin: 10px 0;
    && button {
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        background: #FFFFFF;
        color: #DBDBDB;
        font-size: 20px;
        margin-right: 5px;
        border-radius: 5px;
    }
    && button:active {
        color: #FFFFFF;
        background: #CFCFCF;
    }
`