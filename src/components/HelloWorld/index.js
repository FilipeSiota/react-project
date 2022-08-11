import { Frase } from '../Frase'

export const HelloWorld = () => {

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