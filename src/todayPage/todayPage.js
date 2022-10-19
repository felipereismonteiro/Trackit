import styled from "styled-components"
import Footer from "../components/footer"
import Header from "../components/header"
import Desc from "./descHabito"
import Habito from "./habito"

export default function TodayPage() {
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


