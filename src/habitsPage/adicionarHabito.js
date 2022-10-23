import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import { Contexto } from "../components/logadoContext"
import { ThreeDots } from "react-loader-spinner";

export default function AddHabito({buscarHabitos, setBuscarHabitos, adicionarHabito, setAdicionarHabito, criarHabito, setCriarHabito}) {
    const diasSemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]
    
    const [loading, setLoading] = useState(false)
    const {logado} = useContext(Contexto)
    

    function handleSubmit(e) {
        e.preventDefault() 

        const config = {
            headers: {
                "Authorization": `Bearer ${logado.token}`
            }
        }

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", criarHabito, config).then((res) => {
            setBuscarHabitos(!buscarHabitos)
            setCriarHabito({name: "", days: []})
            setAdicionarHabito(!adicionarHabito)
            setLoading(false)
        }).catch((err) => {
            console.log(err.response.data);
            alert("Insira os dados corretamente!!!")
            setLoading(false)
        })
        
        
    }

    function adicionarNome(e) {
        setCriarHabito({...criarHabito, name: e.target.value})
    }   

    function adicionarDia(dia) {
        if(criarHabito.days.includes(dia)) {
            setCriarHabito({...criarHabito, days: criarHabito.days.filter((d) => d !== dia)})
        } else {
            setCriarHabito({...criarHabito, days: [...criarHabito.days, dia]})
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Nome value={criarHabito.name} onChange={adicionarNome} type="text" name="nome" placeholder="nome do hábito" disabled={loading} />
                <Checkboxes>
                    {diasSemana.map((d, index) => 
                    <button disabled={loading} className={criarHabito.days.includes(index) ? "marcado" : "desmarcado"} key={index} onClick={() => adicionarDia(index)} type="button" name={d}>{d.split("")[0].toUpperCase()}</button>
                    )}
                </Checkboxes>
                <Enviar>
                    <input disabled={loading} onClick={() => setAdicionarHabito(!adicionarHabito)} type="button" value="Cancelar" className="cancelar" />
                    <button type="submit" onClick={() => setLoading(true)} className="enviar" value="Salvar">{loading ? <ThreeDots
                        height="40" 
                        width="40" 
                        radius="9"
                        color="white" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                        transition="1s"
                    /> : "Salvar"}</button>
                </Enviar>
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

const Nome = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    box-sizing: border-box;
    padding: 10px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: -10px;
`

const Enviar = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: -10px;
    && .cancelar {
        border: none;
        background-color: #FFFFFF;
        color: #52B6FF;
    }
    && .enviar {
        background: #52B6FF;
        color: white;
        border: none;
        width: 84px;
        height: 35px;
        border-radius: 5px;
    }
    && button {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s;
    }
`

const Checkboxes = styled.div`  
    margin: 10px 0;
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