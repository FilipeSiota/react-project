import Frase from '../Frase/Frase'

function HelloWorld() {

    return (
        // Wrapper (obrigatório)
        <div>
            <h1>Meu primeiro componente</h1>
            <Frase />
            <Frase />
            <Frase />
        </div>
    )

}

export default HelloWorld