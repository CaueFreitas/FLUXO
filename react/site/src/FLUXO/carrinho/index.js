import { Link } from "react-router-dom";
import { Container } from './styled'
import { useEffect, useState } from "react"
import Cookie from 'js-cookie'
import Itemcarrinho from './carrinhoitem'

export default function Carrinho() {
    const [produtos, setProdutos] = useState([]);
    useEffect(loadCarrinho, []);

function loadCarrinho() {
    let carrinho = Cookie.get('carrinho');
    carrinho = carrinho !== undefined 
                  ? JSON.parse(carrinho) 
                  : [];
    setProdutos(carrinho);
  }

  function deleteProduto(id) {
  
    let carrinho = produtos.filter(item => item.id !== id);
    Cookie.set('carrinho', JSON.stringify(carrinho));
    setProdutos([...carrinho]);
  }

  function alterarProduto(id, quantidade) {
    let ProdutoALT = produtos.filter(item => item.id === id)[0];
    ProdutoALT.quantidade = quantidade;
    Cookie.set('carrinho', JSON.stringify(produtos));
 }

 return (
   <Container>
     <h1> Carrinho </h1>
     <Link to="/"> Voltar </Link>
     <div className="itens">
       {produtos.map(item => 
           <Itemcarrinho key={item.id} 
               info={item} 
               onUpdate={alterarProduto} 
               onRemove={deleteProduto} />
       )}
     </div>
   </Container>
 )
}