import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ILivro } from "../../Components/CardLivro"
import NavBar from "../../Components/NavBar"
import { valorInicial } from "../NovoLivro"
import api from "../../Components/database/api"
import { useNavigate } from "react-router-dom"
import MensagemExcluir from "../../Components/MensagemExcluir"
import './styles.css'

function EditarLivro() {

    const { id } = useParams()

    const [livro, setLivro] = useState<ILivro>(valorInicial)

    const [msgExcluir, setMsgExcluir] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        api.get(`livros/${id}`).then((response) => {
            console.log(response.data);
            setLivro(response.data[0])
        }).catch((error) => {
            console.log(`erro ao consultar o livro: ${error}`);
        })

    }, [])

    function editarLivro(evento: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = evento.target
        setLivro({ ...livro, [name]: value })
    }

    async function salvarLivro(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()

        try {
            await api.put(`livros/${id}`, livro)
            navigate('/')
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <NavBar />

            {msgExcluir ?
                <MensagemExcluir id={livro.id} titulo={livro.titulo} abortarExclusão={setMsgExcluir}/>
                :
                <div className="main-novo-livro">
                    <form onSubmit={salvarLivro}>
                        <header>
                            <h1>Editar Livro</h1>
                            <button type="button" className="button-excluir" onClick={() => setMsgExcluir(true)}>Excluir Livro</button>
                        </header>

                        <div className="campo">
                            <label htmlFor="titulo">Título:</label>
                            <input type="text" name="titulo" id="titulo" value={livro.titulo} onChange={(e) => editarLivro(e)} required />
                        </div>

                        <div className="campo">
                            <label htmlFor="autor">Autor:</label>
                            <input type="text" name="autor" id="autor" value={livro.autor} onChange={(e) => editarLivro(e)} required />
                        </div>

                        <div className="campo">
                            <label htmlFor="editora">Editora:</label>
                            <input type="text" name="editora" id="editora" value={livro.editora} onChange={(e) => editarLivro(e)} required />
                        </div>

                        <div className="campo">
                            <label htmlFor="paginas">N° páginas:</label>
                            <input type="text" name="paginas" id="paginas" value={livro.paginas} onChange={(e) => editarLivro(e)} required />
                        </div>

                        <div className="botoes">
                            <button type="submit" className="botao btnSalvar">Salvar</button>
                            <button type="button" className="botao btnCancelar" onClick={() => navigate('/')}>Cancelar</button>
                        </div>

                    </form>
                </div>
            }
        </>
    )
}

export default EditarLivro