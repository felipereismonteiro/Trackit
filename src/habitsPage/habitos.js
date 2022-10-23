import axios from "axios";
import { useContext } from "react";
import styled from "styled-components"
import { Contexto } from "../components/logadoContext";

export default function Habitos({ buscarHabitos, setBuscarHabitos, idHabito, nome, dias }) {
    const diasSemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]

    const {logado} = useContext(Contexto)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e);
    }

    function excluirHabito() {
        if(window.confirm("Você esta prestes a excluir um hábito")){
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}`, {
                headers: {
                    "Authorization" : `Bearer ${logado.token}`
                }
            }).then((res) => {
                setBuscarHabitos(!buscarHabitos)
            }).catch((err) => {
                console.log(err.response.data)
            }) 
        } else {
            alert("Cancelado")
        }
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <ion-icon onClick={excluirHabito} name="trash-outline"></ion-icon>
                <Nome>{nome}</Nome>
                <Checkboxes>
                    {diasSemana.map((d, index) => <button className={dias.includes(index) ? "marcado" : "desmarcado"} key={index} type="button" name={d}>{d.split("")[0].toUpperCase()}</button>)}
                </Checkboxes>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    margin: 10px 10px;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 30px;
`

const Nome = styled.p`
    background: #FFFFFF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    box-sizing: border-box;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: -10px;
    position: relative;
    && ion-icon {
        position: absolute;
        right: 0;
        font-size: 15px;
    }
`

const Checkboxes = styled.div`  
    margin: 10px 0px -2px 0px;
    && button {
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        font-size: 20px;
        margin-right: 5px;
        border-radius: 5px;
    }
    && .marcado {
        color: #FFFFFF;
        background: #CFCFCF;
    }
    && .desmarcado {
        background: #FFFFFF;
        color: #DBDBDB;
    }
`