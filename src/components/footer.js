import { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Contexto } from "./logadoContext";
export default function Footer() {
    
    const { porcentagem, setPorcentagem } = useContext(Contexto)

    return(
        <>
            <Container>
                <Link to="/habitos" style={{textDecoration: "none"}}>
                    <p>Hábitos</p>
                </Link>
                    <Link to="/hoje" style={{textDecoration: "none"}}>
                    <ImgDiv>
                        <CircularProgressbar 
                        value={porcentagem} 
                        text="Hoje"
                        styles={buildStyles({
                            textSize: "25",
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                            
                        })}
                        /> 
                    </ImgDiv>
                    </Link>
                <Link to="/historico" style={{textDecoration: "none", color: "52B6FF"}}>
                    <p>Histórico</p>
                </Link>
            </Container>
            <Box></Box>
        </>
    );
};

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    font-family: 'Lexend Deca', sans-serif;
    color: #52B6FF;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    && p {
        color: #52B6FF;
    }
`

const Box = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    opacity: 0;
`

const ImgDiv = styled.div`
    color: #FFFFFF;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 50%;
    padding: 7px;
`