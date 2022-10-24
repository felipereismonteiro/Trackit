import styled from "styled-components"
import dayjs from "dayjs"

export default function Desc({percentual}) {
    
    function dia() {
        switch(dayjs().format('dddd')) {
            case "Sunday":
                return "Domingo"
            case "Monday":
                return "Segunda"
            case "Tuesday":
                return "Terça"
            case "Wednesday":
                return "Quarta"
            case "Thursday":
                return "Quinta"
            case "Friday":
                return "Sexta"
            case "Saturday":
                return "Sábado"
        }
    }

    function verifica() {
        if(percentual < 1) {
            return <p>Nenhum hábito concluído ainda</p>
        } else {
            return <p className="verde">{percentual}% dos hábitos concluídos</p>
        }
    }

    return(
        <DescHabito>
            <h1>{`${dia()} ${dayjs().format('DD/MM')}`}</h1>
            {verifica()}
        </DescHabito>
    )
}

const DescHabito = styled.div`
    margin: 95px 0 0 10px;
    && h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;


        color: #126BA5;
    }
    && p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #BABABA;
    }
    && .verde {
        color: #8FC549;
    }
`