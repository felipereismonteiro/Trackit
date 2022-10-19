import styled from "styled-components"

export default function Habitos() {
    return(
        <Container>
            <Form onSubmit="">
                <ion-icon name="trash-outline"></ion-icon>
                <Nome>Ler 1 capítulo de livro</Nome>
                <Checkboxes>
                    <button type="button">D</button>
                    <button type="button">S</button>
                    <button type="button">T</button>
                    <button type="button">Q</button>
                    <button type="button">Q</button>
                    <button type="button">S</button>
                    <button type="button">S</button>
                </Checkboxes>
                
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

const Nome = styled.p`
    background: #FFFFFF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    box-sizing: border-box;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: -10px;
    position: relative;
    && ion-icon {
        position: absolute;
        right: 0;
        font-size: 15px;
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