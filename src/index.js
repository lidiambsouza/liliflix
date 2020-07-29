import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Home from './pages/Home/App';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

import {
 BrowserRouter,
 Switch,
 Route
} from 'react-router-dom';

/*function CadastroVideo(){
  return(
    <div>
      Página de Cadastro de vídeo
    </div>
  )
}*/

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  <BrowserRouter>
   <Switch>
     <Route path="/" component ={Home} exact />
     <Route path="/cadastro/video" component={CadastroVideo} exact/>
     <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
     <Route component={Pagina404}/>
   </Switch>
 
  </BrowserRouter>,

  document.getElementById('root')
);


