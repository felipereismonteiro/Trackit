import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { MutatingDots, ThreeDots } from "react-loader-spinner"
import styled from "styled-components"
import Footer from "../components/footer"
import Header from "../components/header"
import { Contexto } from "../components/logadoContext"
import Desc from "./descHabito"
import Habito from "./habito"

export default function TodayPage() {
    const {logado, habito, setHabito, habitosConcluidos, setHabitosConcluidos} = useContext(Contexto)
    const [carregar, setCarregar] = useState(false)

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
                "Authorization": `Bearer ${logado.token}`
            }
        }).then((res) => {
            setHabito(res.data)
            setHabitosConcluidos(res.data.filter((i) => i.done !== false))
        }).catch((err) => {
            console.log(err.response.data)
        })
    }, [carregar])

    return (
        <>
            <Header />

                <Desc percentual={habito.length === 0 ? 0 : ((habitosConcluidos.length / habito.length) * 100).toFixed()}/>

                {habito.length === 0 ? <Container>
            <ThreeDots 
                height="100"
                width="100"
                color="#126BA5"
                secondaryColor= '#126BA5'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
            </Container> : habito.map((h) => <Habito  key={h.id}
                                            id={h.id}
                                            name={h.name} 
                                            currentSequence={h.currentSequence} 
                                            done={h.done}
                                            highestSequence={h.highestSequence}
                                            carregar={carregar}
                                            setCarregar={setCarregar}
                                            />)}

            <Footer percentual={((habitosConcluidos.length / habito.length) * 100).toFixed()}/>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 42%;
`


