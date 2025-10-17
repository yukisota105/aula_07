function Lista({itens}){
    return(
        <>
            <h3>Lista de frutas q o bananinha ama</h3>
                {itens.length > 0 ?(
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) : (
                    <p>não existe</p>
                )}
        </>
    )
}

export default Lista;