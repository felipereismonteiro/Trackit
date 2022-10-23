import axios from "axios"
import { useContext, useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { Contexto } from "../components/logadoContext"
import Desc from "./descHabito"
import Habito from "./habito"

export default function TodayPage() {
    const {logado} = useContext(Contexto)

    if(logado !== undefined) {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
                "Authorization": `Bearer ${logado.token}`
            }
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    return (
        <>
            <Header />

                <Desc />

                <Habito />
                <Habito />

            <Footer />
        </>
    )
}


