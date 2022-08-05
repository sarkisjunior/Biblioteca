import { useEffect, useState } from "react"
import NavBar from "../../Components/NavBar"
import CardLivro from "../../Components/CardLivro"
import api from "../../Components/database/api"
import './styles.css'
import { ILivro } from "../../Components/CardLivro"

function Home() {

    const [livros, setLivros] = useState<ILivro[]>([])

    useEffect(() => {
        api.get('livros').then((response) => {
            setLivros(response.data);
        }).catch((erro) => {
            console.log(`erro ao listar livros: ${erro}`)
        })
    }, [])

    return (
        <>
            <NavBar />

            <div className="main-home">
                <div className="title-home">
                    <h1>Meus Livros</h1>
                    <span className="total-livros">Total de Livros: {livros.length}</span>
                </div>

                <section className="lista-livros">

                    {
                        livros.map(livro => (
                            <CardLivro key={livro.id} 
                                id={livro.id}
                                titulo={livro.titulo}
                                autor={livro.autor}
                                editora={livro.editora}
                                paginas={livro.paginas}
                            />
                        ))

                    }

                </section>
            </div>
        </>
    )
}

export default Home