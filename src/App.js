import './App.css';
// import NomeDaFuncao/Componente from 'source'
import HelloWorld from './components/HelloWorld/HelloWorld'

function App() { // main function

  const name = 'Filipe'

  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    // Classe = className
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá, {newName}!</p>
      <p>Soma: {2 + 2}</p>
      <p>Soma por função: {sum(2, 5)}</p>
      <img src={url} alt='Minha imagem' />
      <HelloWorld />
    </div>
  );
}

export default App;
