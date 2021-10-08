import { CarouselConfig } from './config';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from './styled'
import Produto from '../produto'
import { useState } from 'react'
export default function Home() {
  const [produtos, setProdutos] = useState([]);
  function listar() {
    const r = [
      {
        id: 10001,
        imagem: "https://a-static.mlcdn.com.br/618x463/mousepad-gamer-medio-35-x-25-cm-led-rgb-gmp-01-xzone/goldmulticoisas/4933p/80fc40deb60f7fd8fedb490ccc4f2ca9.jpg",
        titulo: "Mousepad GAMER",
        preco: "R$ 1.000,00",
        descricao: "Este produto é muito bom sério compre.",
        especificacoes: "Melhor qualidade que existe."
      },
      {
        id: 10002,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_866828-MLA43295532186_082020-O.jpg",
        titulo: "Mouse GAMER",
        preco: "R$ 1.000,00",
        descricao: "Este produto é muito bom sério compre.",
        especificacoes: "Melhor qualidade que existe."
      },
      {
        id: 10003,
        imagem: "https://static.cdnlive.com.br/uploads/602/produto/16240239052605_detalhe.jpg",
        titulo: "Teclado Gamer",
        preco: "R$ 1.000,00",
        descricao: "Este produto é muito bom sério compre.",
        especificacoes: "Melhor qualidade que existe."
      },

      {
        id: 10004,
        imagem: "https://a-static.mlcdn.com.br/618x463/mousepad-gamer-medio-35-x-25-cm-led-rgb-gmp-01-xzone/goldmulticoisas/4933p/80fc40deb60f7fd8fedb490ccc4f2ca9.jpg",
        titulo: "Mousepad GAMER",
        preco: "R$ 1.000,00",
        descricao: "Este produto é muito bom sério compre.",
        especificacoes: "Melhor qualidade que existe."
      },
      {
        id: 10005,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_866828-MLA43295532186_082020-O.jpg",
        titulo: "Mouse GAMER",
        preco: "R$ 1.000,00",
        descricao: "Este produto é muito bom sério compre.",
        especificacoes: "Melhor qualidade que existe."
      },
      {
        id: 10006,
        imagem: "https://static.cdnlive.com.br/uploads/602/produto/16240239052605_detalhe.jpg",
        titulo: "Teclado Gamer",
        preco: "R$ 1.000,00",
        descricao: "Este produto é muito bom sério compre.",
        especificacoes: "Melhor qualidade que existe."
      },
    
      {
        id: 10007,
        imagem: "https://a-static.mlcdn.com.br/618x463/mousepad-gamer-medio-35-x-25-cm-led-rgb-gmp-01-xzone/goldmulticoisas/4933p/80fc40deb60f7fd8fedb490ccc4f2ca9.jpg",
        titulo: "Mousepad GAMER",
        preco: "R$ 1.000,00",
        descricao: "Este produto é muito bom sério compre.",
        especificacoes: "Melhor qualidade que existe."
      },
      {
        id: 10008,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_866828-MLA43295532186_082020-O.jpg",
        titulo: "Mouse GAMER",
        preco: "R$ 1.000,00",
        descricao: "Este produto é muito bom sério compre.",
        especificacoes: "Melhor qualidade que existe."
      },
      {
        id: 10009,
        imagem: "https://static.cdnlive.com.br/uploads/602/produto/16240239052605_detalhe.jpg",
        titulo: "Teclado Gamer",
        preco: "R$ 1.000,00",
        descricao: "Este produto é muito bom sério compre.",
        especificacoes: "Melhor qualidade que existe."
      }
    ]
    setProdutos(r);
  }

  return (
    <Container>
      <h1> Sejam muito bem-vindos!! </h1>
      <br />    
      <button onClick={listar}> Listar </button>
      <br />
      <div className="lista-produtos">
      <Carousel 
          responsive={CarouselConfig}
          infinite={true}
          showDots={true}
          containerClass="carousel-container"
          >
        {produtos.map(item => 
            <Produto info={item} />
        )}
        </Carousel>
      </div>
    </Container>
  )
}