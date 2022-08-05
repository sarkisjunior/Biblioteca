import NavBar from "../../Components/NavBar"
import api from "../../Components/database/api"
import './styles.css'
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

export const valorInicial = {
    id: 0,
    titulo: "",
    autor: "",
    editora: "",
    paginas: 0
}

function NovoLivro() {

    const [livros, setLivros] = useState(valorInicial)

    const navigate = useNavigate()

    function editarLivro(evento: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = evento.target
        setLivros({ ...livros, [name]: value })
    }

    async function salvarLivro(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()

        try{
            await api.post('livros', livros)
            navigate('/')
        }catch(error){
            console.log(error);
            
        }

    }

    return (
        <>
            <NavBar />
            <div className="main-novo-livro">
                <form onSubmit={salvarLivro}>
                    <header>
                        <h1>Cadastrar Livro</h1>
                    </header>

                    <div className="campo">
                        <label htmlFor="titulo">Título:</label>
                        <input type="text" name="titulo" id="titulo" onChange={(e) => editarLivro(e)} required />
                    </div>

                    <div className="campo">
                        <label htmlFor="autor">Autor:</label>
                        <input type="text" name="autor" id="autor" onChange={(e) => editarLivro(e)} required />
                    </div>

                    <div className="campo">
                        <label htmlFor="editora">Editora:</label>
                        <input type="text" name="editora" id="editora" onChange={(e) => editarLivro(e)} required />
                    </div>

                    <div className="campo">
                        <label htmlFor="paginas">N° páginas:</label>
                        <input type="text" name="paginas" id="paginas" onChange={(e) => editarLivro(e)} required />
                    </div>

                    <div className="botoes">
                        <button type="submit" className="botao btnSalvar">Salvar</button>
                        <button type="button" className="botao btnCancelar" onClick={() => navigate('/')}>Cancelar</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default NovoLivro