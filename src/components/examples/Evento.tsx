import { IconMinus, IconPlus } from "@tabler/icons-react"
import { useState } from "react"

const Evento = () => {

  const [valor, setValor] = useState(123)

  function executar() {
    setValor(valor + 1)
  }


  function decrementar() {
    setValor(valor - 1)

  }

  return (

    <div className={`
    flex flex-col gap-4

    `}>
      <span className="text-3xl"><b>Valor:</b> {valor}</span>
          <div className="flex gap-7">
      <button onClick={executar}>
        <IconPlus />
        </button>
      <button onClick={decrementar}>
        <IconMinus />
        </button>
          </div>


      </div>
  )
}

export default Evento
