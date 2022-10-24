import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import { Contexto } from "../components/logadoContext"

export default function Habito({id, name, currentSequence, done, highestSequence, carregar, setCarregar}) {
    
    const [concluido, setConcluido] = useState(done)
    const {logado} = useContext(Contexto)


    function enviar() {
        if(done) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {id}, {
                headers: {
                    "Authorization": `Bearer ${logado.token}`
                }
            }).then((res) => {
                setConcluido(!concluido)
                setCarregar(!carregar)
            }).catch((err) => {
                console.log(err.response.data);
            })
        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{id} , {
                headers: {
                    "Authorization": `Bearer ${logado.token}`
                }
            }).then((res) => {
                setConcluido(!concluido)
                setCarregar(!carregar)
            }).catch((err) => {
                console.log(err.response.data);
            })
        }   
    }

    function verificarAtual() {
        if(currentSequence >= 1) {
            return "verde"
        } else {
            return "#666666"
        }
    }

    function verificarRecorde() {
        if(currentSequence >= 1 && currentSequence === highestSequence) {
            return "verde"
        } else {
            return "#666666"
        }
    }

    return(
        <Habitos>
            <h1>{name}</h1>
            <Contain>
            <p>Sequência atual:</p> <p className={verificarAtual()} >{` ${currentSequence} dias`}</p>
            </Contain>
            <Contain>
            <p>Seu recorde:</p> <p className={verificarRecorde()}>{` ${highestSequence} dias`}</p>
            </Contain>
            <button onClick={enviar} className={concluido === true ? "feito" : ""}>
                <ion-icon name="checkmark-outline"></ion-icon>
            </button>
        </Habitos>
    )
}

const Contain = styled.div`
    display: flex;
    && p {
        margin-right: 2px;
    }
    && .verde {
        color: #8FC549;
    }
`

const Habitos = styled.div`
    background: #FFFFFF;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 340px;
    height: 94px;
    margin: 20px 0 0 10px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    && .verde {
        color: #8FC549;
    }
    && .feito {
        background-color: #8FC549;
    }
    && h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
    && p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;

        color: #666666;
    }
    && button {
        right: 0;
        width: 69px;
        height: 69px;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        background-color: #E7E7E7;
        color: #FFFFFF;
        font-size: 40px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
    }
`