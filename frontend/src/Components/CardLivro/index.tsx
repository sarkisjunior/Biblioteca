import './styles.css'
import { useNavigate } from 'react-router-dom'

export interface ILivro {
    id: number;
    titulo: string;
    autor: string;
    editora: string;
    paginas: number;
}

function CardLivro({ id, titulo, autor, editora, paginas }: ILivro) {
    
    const navigate = useNavigate()

    return (
        <>
            <div className="card-livro">
                <section className="card-info">
                    <div className="card-titulo">{titulo}</div>
                    <div className="card-autor">{autor}</div>
                    <div className="card-editora">Editora: {editora}</div>
                    <div className="card-pagina">N° de páginas: {paginas}</div>
                </section>

                <section className="card-acao">
                    <button type="button" onClick={()=>navigate(`/editar/${id}`)}>Editar</button>
                </section>
            </div>
        </>
    )
}

export default CardLivro