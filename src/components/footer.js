import styled from "styled-components";
import elipse from "./assets/Ellipse.png"
import vector from "./assets/Vector.png"

export default function Footer() {
    return(
        <>
            <Container>
                <p>Hábitos</p>
                    <ImgDiv>
                        <img src={elipse} alt="" />
                        <p>Hoje</p>
                        <Img src={vector} alt="" />
                    </ImgDiv>
                <p>Histórico</p>
            </Container>
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
`

const Img = styled.img`
    position: absolute;
    margin-left: 10px;
`

const ImgDiv = styled.div`
    color: #FFFFFF;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    && p {
        position: absolute;
    }
`