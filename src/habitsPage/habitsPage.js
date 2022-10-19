import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import AddHabito from "./adicionarHabito";
import Habitos from "./habitos";
import NenhumHabito from "./nenhumHabito";

export default function HabitsPage() {
    return(
        <>
            <Header />
                <Add>
                    <p>Meus hábitos</p>
                    <button><ion-icon name="add-outline"></ion-icon></button>
                </Add>

                <AddHabito />

                <Habitos />

                <NenhumHabito />
            <Footer />
        </>
    );
};

const Add = styled.div`
    display: flex;
    margin: 100px 10px 0 10px;
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
    && p {
        font-size: 23px;
        color: #126BA5; 
    }
    && button {
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px; 
        border: none; 
        display: flex;
        justify-content: center;
        align-items: center;
    }
    && button:active {
        transform: translatey(1px);
    }
    && ion-icon {
        color: white;
        font-size: 20px;
    }
`


