import { useContext } from "react"
import styled from "styled-components"
import Footer from "../components/footer"
import Header from "../components/header"
import { Contexto } from "../components/logadoContext"

export default function HistoryPage() {
    const {habitosConcluidos, habito} = useContext(Contexto);

    return(
        <>
            <Header />
                <Historico>
                    <h1>Histórico</h1>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </Historico>
            <Footer percentual={((habitosConcluidos.length / habito.length) * 100).toFixed()}/>
        </>
    )
}

const Historico = styled.div`
    margin: 100px 10px 0 10px;
    font-weight: bold;
    && h1 {
        font-size: 23px;
        color: #126BA5; 
    }
    && p {
        margin-top: 20px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
`