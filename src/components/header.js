import styled from "styled-components"
import logo from "./assets/TrackIt.png"

export default function Header() {
    return(       
        <Container>
            <Logo>TrackIt</Logo>
            <Img src="https://i.pinimg.com/originals/33/c7/1e/33c71e3cc14c20d85593d9e297f797da.jpg" alt="profilePicture" />
        </Container>    
    ) 
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

const Logo = styled.p`
    font-family: 'Playball', cursive;
    color: white;
    font-size: 40px;
`

const Img = styled.img`
    border-radius: 50%;
    width: 50px;
`
