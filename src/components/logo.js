import styled from "styled-components"
import group from "./assets/Group.jpg"

export default function Logo() {
    return(
        <Container>
            <img src={group} alt="logoImg" />
        </Container>
    )
};

const Container = styled.div`   
    display: flex;
    justify-content: center;
    align-items: center;
`