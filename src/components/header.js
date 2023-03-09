import styled from "styled-components"

export default function Header() {
    const userPhoto = localStorage.getItem("photo");

    return(       
        <Container>
            <Logo>TrackIt</Logo>
            <Img src={userPhoto} alt="profilePicture" />
        </Container>    
    ) 
}

const Container = styled.div`
    z-index: 1;
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
    width: 51px;
    height: 51px;
    background-position: cover;
`
