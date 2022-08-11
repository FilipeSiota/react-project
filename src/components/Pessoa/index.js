export const Pessoa = ({ photo, name, age, occupation }) => {

    return (
        <div>
            <img src={photo} alt={'Foto de ' + name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {occupation}</p>
        </div>
    )
}