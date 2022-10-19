import styled from "styled-components"

export default function Desc() {
    return(
        <DescHabito>
            <h1>Segunda, 17/05</h1>
            <p>Nenhum hábito concluído ainda</p>
        </DescHabito>
    )
}

const DescHabito = styled.div`
    margin: 95px 0 0 10px;
    && h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;


        color: #126BA5;
    }
    && p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #BABABA;
    }
`