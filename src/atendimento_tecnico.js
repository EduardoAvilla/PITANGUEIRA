import React from 'react'
import  './Stilo.css'
class Atendimento extends React.Component {
  render() {
return <div>

<header id="form_cadastro">

<div id="ladoa_atendimento"> 

  <h1>Atendimento</h1>  
  <div id="componentes_atendimento">
  <form action="">
    <div id="input" class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Data</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="ex: 09/10/2020"/>
  </div>
  <div id="input" class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Tipo de atendimento</label>
    <input type="email" class="form-control" id="exampleFormControlInput1"/>
  </div>
  <div id="input" class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Cliente atendido</label>
    <input type="email" class="form-control" id="exampleFormControlInput1"/>
  </div>
  <div id="area" class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <label  > Técnico ativo: <label > Eduardo</label>  </label>  
 
  

  <div class="col-auto">
     <button type="submit" class="btn btn-primary mb-3">Cadastrar atendimento</button>
  </div>
</form>
  </div>
</div>

 

</header>
</div>;
 
 
 
   }
}

export default Atendimento;