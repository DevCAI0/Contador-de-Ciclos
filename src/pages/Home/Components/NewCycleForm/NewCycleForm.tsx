// Importações de estilos e utilitários do React
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { useFormContext } from "react-hook-form";

// Definição do componente NewCycleForm
export function NewCycleForm() {
    // Obtém o ciclo ativo do contexto dos ciclos
    const { activeCycle } = useContext(CyclesContext);

    // Obtém o contexto do formulário React Hook Form
    const { register } = useFormContext();

    // Renderiza o formulário de novo ciclo
    return (
        <FormContainer>
            {/* Campo de entrada para a tarefa */}
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
                id="task"
                list="task-suggestion"
                placeholder="Dê um nome para o seu projeto"
                disabled={!!activeCycle}
                {...register("task")} // Registra o campo "task" no contexto do formulário
            />

            {/* Lista de sugestões para o campo "task" */}
            <datalist id="task-suggestion">
                <option value="projeto 1"></option>
                <option value="projeto 2"></option>
                <option value="projeto 3"></option>
                <option value="projeto 4"></option>
                <option value="projeto 5"></option>
                <option value="projeto 6"></option>
            </datalist>

            {/* Campo de entrada para a quantidade de minutos */}
            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                step={5}
                min={5}
                max={60}
                {...register("minutesAmount", { valueAsNumber: true })} // Registra o campo "minutesAmount" no contexto do formulário
            />

            {/* Exibição da unidade de medida (minutos) */}
            <span>minutos.</span>
        </FormContainer>
    );
}
