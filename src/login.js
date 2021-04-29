import React from 'react'
import  './Stilo.css'
import Imagem from  './img/image.png'
class Login extends React.Component {
  render() {
return <div>

<header id="form">

<div id="ladoa"> 

  <h1>Login</h1>
  <div id="componentes">
    <form action="">
  <div id="input" className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Nome</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="ex: Eduardo"/>
  </div>
  <div id="input" className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Senha</label>
    <input type="email" className="form-control" id="exampleFormControlInput1"/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Entrar</button>
    <button type="submit" className="btn btn-primary mb-3">Cadastrar</button>
  </div>
</form>
  </div>
</div>

<div id="ladob"> 

  <img id="image" src={Imagem} alt=""/>


</div>


</header></div>;
 
 
 
   }
}

export default Login;