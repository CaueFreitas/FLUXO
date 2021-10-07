import { useState } from "react"

export default function Principal() {
  const [quantidade, setQuantidade] = useState(0);

  function adicionar() {
    setQuantidade(quantidade+1);
  }
  function reset() {
    setQuantidade(0);
  }
  return (
    <div className="container">
      <h1> Contador </h1>

      <div> {quantidade} </div>
      <button onClick={adicionar}> Adicionar </button>
      <Secundario onReset={reset} />
    </div>
  )
}
function Secundario(props) {
  function reset() {
    props.onReset();
  }
  return (
    <div className="container">
      <button onClick={reset}> Resetar </button>
      <div> {props.quantidade} </div>
    </div>
  )
}