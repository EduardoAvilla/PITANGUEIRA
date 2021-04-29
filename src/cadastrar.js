import React from 'react'
import  './Stilo.css'
class Cadastrar extends React.Component {
  render() {
return <div>

<header id="form_cadastro">

<div id="ladoa_cadastro"> 

  <form action="">
  <h1>Cadastrar</h1>  
  <div id="componentes">
  <div id="input" class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Nome</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="ex: Eduardo"/>
  </div>
  <div id="input" class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Senha</label>
    <input type="email" class="form-control" id="exampleFormControlInput1"/>
  </div>
  <div id="check" class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" disable/>
    <label class="form-check-label" for="flexSwitchCheckChecked">Para técnico, deixe como está. <br/> Para Gestor, marque essa opção.</label>
  </div>
  

  <div class="col-auto">
     <button type="submit" class="btn btn-primary mb-3">Cadastrar</button>
  </div>

  </div>
  </form>
</div>

 

</header>
</div>;
 
 
 
   }
}

export default Cadastrar;