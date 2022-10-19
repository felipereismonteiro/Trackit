import styled from "styled-components"

export default function habito() {
    return(
        <Habito>
            <h1>Ler 1 capítulo de livro</h1>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
            <button>
                <ion-icon name="checkmark-outline"></ion-icon>
            </button>
        </Habito>
    )
}


const Habito = styled.div`
    background: #FFFFFF;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 340px;
    height: 94px;
    margin: 20px 0 0 10px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    && h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
    && p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;

        color: #666666;
    }
    && button {
        right: 0;
        width: 69px;
        height: 69px;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        background-color: #E7E7E7;
        color: #FFFFFF;
        font-size: 40px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
    }
    && button:active {
        background-color: #8FC549;
    }
`