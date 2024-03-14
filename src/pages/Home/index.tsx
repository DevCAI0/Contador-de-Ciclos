// Importa ícones da biblioteca "phosphor-react"
import { HandPalm, Play } from "phosphor-react";

// Importa componentes estilizados do arquivo "./styles"
import {
    HomeContainer,
    StartCountDownButton,
    StopCountDownButton,
} from "./styles";

// Importa hooks e contextos necessários do React
import { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

// Importa componentes personalizados
import { NewCycleForm } from "./Components/NewCycleForm/NewCycleForm";
import { Countdown } from "../Home/Components/Countdown/index";

// Importa o contexto dos ciclos
import { CyclesContext } from "../../contexts/CyclesContext";

// Define um esquema de validação para o formulário de novo ciclo
const newCicleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
        .number()
        .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
});

// Define o tipo dos dados do formulário com base no esquema de validação
type NewCycleFormData = zod.infer<typeof newCicleFormValidationSchema>;

// Componente funcional principal "Home"
export function Home() {
    // Obtém valores e funções do contexto dos ciclos
    const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext);

    // Inicializa o formulário usando o react-hook-form
    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCicleFormValidationSchema),
        defaultValues: {
            task: "",
            minutesAmount: 0,
        },
    });
    const { handleSubmit, watch, reset } = newCycleForm;

    // Função para lidar com a criação de um novo ciclo
    function handleCreateNewCycle(data: NewCycleFormData) {
        createNewCycle(data);
        reset();
    }

    // Obtém o valor do campo 'task' do formulário
    const task = watch('task');

    // Verifica se o botão de submissão deve estar desabilitado
    const isSubmitDisabled = !task;

    // Renderiza o componente Home
    return (
        <HomeContainer>
            {/* Formulário para criar um novo ciclo */}
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                {/* Prove o formulário com as funções e valores necessários */}
                <FormProvider {...newCycleForm}>
                    {/* Renderiza o componente de formulário para um novo ciclo */}
                    <NewCycleForm />
                </FormProvider>
                {/* Renderiza o componente de contagem regressiva */}
                <Countdown />

                {/* Renderiza o botão de início ou interrupção do ciclo com base no estado atual */}
                {activeCycle ? (
                    <StopCountDownButton onClick={interruptCurrentCycle} type="button">
                        <HandPalm size={24} />
                        Interromper
                    </StopCountDownButton>
                ) : (
                    <StartCountDownButton disabled={isSubmitDisabled} type="submit">
                        <Play size={24} />
                        Começar
                    </StartCountDownButton>
                )}
            </form>
        </HomeContainer>
    );
}
