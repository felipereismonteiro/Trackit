import styled from "styled-components"
import Footer from "../components/footer"
import Header from "../components/header"

export default function HistoryPage() {
    return(
        <>
            <Header />

                <Historico>
                    <h1>Histórico</h1>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </Historico>
            <Footer /> 
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