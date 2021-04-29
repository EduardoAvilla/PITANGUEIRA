import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import Login from './login';
import Cadastrar from './cadastrar';
import Atendimento from './atendimento_tecnico';

function Routes(){
return(

<BrowserRouter>

<Switch>
  <Route path ="/" exact component ={Login}/>
  <Route path ="/cadastrar" exact component ={Cadastrar}/>
  <Route path ="/atendimento" exact component ={Atendimento}/>

</Switch>

</BrowserRouter>

); 

};

export default Routes;