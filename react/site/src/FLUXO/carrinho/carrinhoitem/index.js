import Cookie from 'js-cookie'
import { useState } from 'react';
import Contador from '../contador'
import { Container, Deleteicon } from './styled'


export default function Itemcarrinho(props) {
    const [produto, setProduto] = useState(props.info);


    function alterarQtd(qtd){
        setProduto({...produto, qtd});
        props.onUpdate(produto.id, qtd)
    }


    function remover() {
        props.onRemove(produto.id);
    }

return (
    <Container>
      <div>
        <img className="capa" src={produto.imagem} alt="" />
        <Contador onChange={alterarQtd} value={produto.qtd} />
      </div>
      <div className="titulo"> 
        {produto.titulo} 
      </div>
      <div className="preco"> 
        <span>Preço unitário</span> <br /> 
        {produto.preco} 
      </div>
      <div className="qtd"> 
        <span>Quantidade</span> <br /> 
        {produto.qtd} 
      </div>
      <div className="remover"> <Deleteicon onClick={remover} /> </div>
    </Container>
  )
}