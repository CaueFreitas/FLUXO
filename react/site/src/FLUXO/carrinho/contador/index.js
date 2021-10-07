import { useEffect, useState } from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 400;

  & > * {
    margin: .5em;
    background-color: #f5f5f5;
    padding: 0.3em .8em;
    user-select: none;
  }

  .menos {
    border-radius: 100%;
    cursor: pointer;
  }

  .quantidade {
    padding: 0.3em 1em;
  }

  .mais {
    border-radius: 100%;
    cursor: pointer;
  }
`

export default function Contador(props) {
    const [quantidade, setQuantidade] = useState(props.value);

    function adicionar(){
        if (quantidade >= 10)
        return;
        setQuantidade(quantidade+1)
    }

    function remover(){
        if (quantidade === 0)
        return;
        setQuantidade(quantidade-1)
    }

    useEffect(() => {
        props.onChange(quantidade);
}, [quantidade])

return (
    <Container>
      <div className="menos" onClick={remover}>
        -
      </div>

      <div className="quantidade">
        {quantidade}
      </div>

      <div className="mais" onClick={adicionar}>
        +
      </div>
    </Container>
  )
}