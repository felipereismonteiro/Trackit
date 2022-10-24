import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { Contexto } from "../components/logadoContext";
import AddHabito from "./adicionarHabito";
import Habitos from "./habitos";
import NenhumHabito from "./nenhumHabito";

export default function HabitsPage() {
    const {logado, habito, habitosConcluidos} = useContext(Contexto)
    const [habitos, setHabitos] = useState([])
    const [adicionarHabito, setAdicionarHabito] = useState(false)
    const [buscarHabitos, setBuscarHabitos] = useState(false)
    const [criarHabito, setCriarHabito] = useState({
        name: "",
        days: [] 
    })

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{
            headers: {
                "Authorization": `Bearer ${logado.token}`
            }
        }).then((res) => {
            setHabitos(res.data)
        }).catch((err) => {
            console.log(err.response.data)
        })
    }, [buscarHabitos])

    useEffect(() => {

    }, [])

    return(
        <>
            <Header />

                <Add>
                    <p>Meus hábitos</p>
                    <button onClick={() => setAdicionarHabito(!adicionarHabito)}><ion-icon name="add-outline"></ion-icon></button>
                </Add>

                {adicionarHabito === true && <AddHabito buscarHabitos={buscarHabitos} 
                                                        setBuscarHabitos={setBuscarHabitos}
                                                        adicionarHabito={adicionarHabito}
                                                        setAdicionarHabito={setAdicionarHabito} 
                                                        criarHabito={criarHabito}
                                                        setCriarHabito={setCriarHabito}
                                                        />}

                {habitos.length === 0 ? <NenhumHabito /> : habitos.map((h) => <Habitos  key={h.id} 
                                                                                        buscarHabitos={buscarHabitos} 
                                                                                        setBuscarHabitos={setBuscarHabitos} 
                                                                                        idHabito={h.id}
                                                                                        nome={h.name}
                                                                                        dias={h.days} />)} 

            <Footer percentual={((habitosConcluidos.length / habito.length) * 100).toFixed()}/>
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


