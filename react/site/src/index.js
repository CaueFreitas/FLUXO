import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './styles.css'
import Contador from "./FLUXO/comunicacao/contador";
import App from './FLUXO/home'
import Detalhe from './FLUXO/detalhe'
import Carrinho from './FLUXO/carrinho'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={Detalhe} />
        <Route path="/carrinho" component={Carrinho} />
        <Route path="/fluxo/contador" exact={true} component={Contador} />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
