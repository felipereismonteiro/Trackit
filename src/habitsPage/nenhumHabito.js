import styled from "styled-components"

export default function Nenhum() {
    return(
        <Container>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </Container>
    )
}

const Container = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
    margin: 30px 10px;
`