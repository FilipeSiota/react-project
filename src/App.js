import './App.css';
// import NomeDaFuncao/Componente from 'source'
import { SayMyName } from './components/SayMyName'
import { Pessoa } from './components/Pessoa'

export const App = () => { // main function

  const nome = 'Maria'

  return (
    // Classe = className
    <div className="App">
      <SayMyName name='Filipe' />
      <SayMyName name='João' />
      <SayMyName name={nome} />
      
      <Pessoa
        photo='https://via.placeholder.com/150'
        name='Filipe'
        age='17'
        occupation='Developer'
      />
    </div>
  );
}