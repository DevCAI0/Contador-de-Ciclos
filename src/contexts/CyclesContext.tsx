// Importa a função differenceInSeconds da biblioteca date-fns
import { differenceInSeconds } from 'date-fns'
// Importa os módulos do React necessários
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
// Importa ações específicas para os ciclos do arquivo de ações
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
// Importa a estrutura de dados Cycle e a função reducer do arquivo de reducer
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'

// Define a estrutura dos dados para criar um novo ciclo
interface CreateCycleData {
  task: string
  minutesAmount: number
}

// Define o tipo do contexto contendo informações sobre os ciclos
interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

// Criação do contexto para prover informações sobre os ciclos para os componentes filhos
export const CyclesContext = createContext({} as CyclesContextType)

// Propriedades esperadas para o provedor do contexto
interface CyclesContextProviderProps {
  children: ReactNode
}

// Componente provedor do contexto
export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  // Utiliza o reducer para gerenciar o estado dos ciclos
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer, // Reducer definido em ../reducers/cycles/reducer
    {
      cycles: [],
      activeCycleId: null,
    },
    // Função opcional para obter o estado inicial do localStorage
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  // Desestrutura o estado dos ciclos para obter os ciclos e o ID do ciclo ativo
  const { cycles, activeCycleId } = cyclesState
  // Encontra o ciclo ativo com base no ID
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  // Estado que armazena a quantidade de segundos passados
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    // Calcula a diferença em segundos entre a data atual e a data de início do ciclo ativo
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  // Efeito para salvar o estado no localStorage sempre que o estado dos ciclos é atualizado
  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  // Função para definir a quantidade de segundos passados
  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  // Função para marcar o ciclo ativo como finalizado
  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  // Função para criar um novo ciclo com base nos dados fornecidos
  function createNewCycle(data: CreateCycleData) {
    // Gera um ID único com base no timestamp atual
    const id = String(new Date().getTime())

    // Cria um novo ciclo com os dados fornecidos
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    // Despacha a ação para adicionar o novo ciclo ao estado
    dispatch(addNewCycleAction(newCycle))

    // Zera a quantidade de segundos passados
    setAmountSecondsPassed(0)
  }

  // Função para interromper o ciclo ativo
  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction())
  }

  // Renderiza o provedor do contexto, fornecendo os valores e os filhos
  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
