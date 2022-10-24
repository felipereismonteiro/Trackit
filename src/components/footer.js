import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer({percentual}) {
    

    return(
        <>
            <Container>
                <Link to="/habitos" style={{textDecoration: "none"}}>
                    <p>Hábitos</p>
                </Link>
                    <Link to="/hoje" style={{textDecoration: "none"}}>
                    <ImgDiv>
                        <CircularProgressbar 
                        value={Number(percentual)} 
                        text="Hoje"
                        styles={buildStyles({
                            textSize: "25",
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: Number(percentual) < 100 ? "#fff" : "#8FC549",
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

//#8FC549

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
    margin-top: 20px;
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