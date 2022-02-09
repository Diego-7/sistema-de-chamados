import {useState} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png';

function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();

    alert('CLICOU')

  }

    return (
      <div className="container-center">
       <div className="login">
         <div className="login-area">
           <img src={logo} alt="Logo do Sistema" />
         </div>
         <form onSubmit={handleSubmit}>
           <h1>Cadastrar-se</h1>
           <input type="text" placeholder="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
           <input type="email" placeholder="Email" value={email} onChange={ (e) => setEmail(e.target.value) }/>
           <input type="password" placeholder="Senha" value={password} onChange={ (e) => setPassword(e.target.value) }/>
           <button type="submit">Acessar</button>
         </form>

         <Link to="/">Já possui uma conta? Entrar</Link>
       </div>
      </div>
    );
  }
  
  export default SignUp;
  