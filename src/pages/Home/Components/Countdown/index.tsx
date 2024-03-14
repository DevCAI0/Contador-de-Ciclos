// Importações de estilos e utilitários do React
import { useContext, useEffect } from "react";
import { CountdouwnContainer, Separator } from "./styles";
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from "../../../../contexts/CyclesContext";

// Definição do componente Countdown
export function Countdown() {
    // Obtém dados do contexto dos ciclos
    const cyclesContext = useContext(CyclesContext);

    // Desestruturação dos dados do contexto
    const {
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed
    } = cyclesContext;

    // Cálculo do total de segundos com base no ciclo ativo
    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

    // Efeito colateral para atualizar a contagem regressiva
    useEffect(() => {
        let interval: number;

        if (activeCycle) {
            interval = window.setInterval(() => {
                // Calcula a diferença em segundos entre a data atual e a data de início do ciclo
                const secondsDifference = differenceInSeconds(new Date(),new Date(activeCycle.startDate) );

                if (secondsDifference >= totalSeconds) {
                    // Marca o ciclo como concluído
                    markCurrentCycleAsFinished();

                    // Atualiza a quantidade de segundos passados para o total de segundos
                    setSecondsPassed(totalSeconds);

                    // Limpa o intervalo
                    clearInterval(interval);
                } else {
                    // Atualiza a quantidade de segundos passados
                    setSecondsPassed(secondsDifference);
                }
            }, 1000);

            return () => {
                // Limpa o intervalo ao desmontar o componente
                clearInterval(interval);
            };
        }
    }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished, setSecondsPassed]);

    // Cálculos para obter minutos e segundos atuais
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    // Formatação dos minutos e segundos com zero à esquerda
    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');

    // Efeito colateral para atualizar o título do documento
    useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes}:${seconds}`;
        }
    }, [minutes, seconds, activeCycle]);

    // Renderização do componente Countdown
    return (
        <CountdouwnContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountdouwnContainer>
    );
}
