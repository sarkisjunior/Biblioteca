import api from '../database/api';
import { useNavigate } from 'react-router-dom'
import './styles.css'

interface IMensagem {
    id: number;
    titulo: string
    abortarExclusão: (type: boolean) => void
}

function MensagemExcluir({ id, titulo, abortarExclusão }: IMensagem) {

    const navigate = useNavigate();

    function excluirLivro() {
        api.delete(`livros/${id}`).then(() => {
            navigate('/')

        }).catch((error) => {
            console.log(`Erro ao excluir o livro: ${error}`);
        })
    }

    return (
        <>
            <div className="main-msg-excluir">
                <div className="mensagem">
                    <p>Tem certeza que deseja excluir o livro</p>
                    <p><strong>{titulo}</strong>?</p>

                    <div className="msg-botao">
                        <button type="button" className='btn-msg-excluir' onClick={excluirLivro}>Sim</button>
                        <button type="button" className='btn-msg-excluir' onClick={()=> abortarExclusão(false)}>Não</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MensagemExcluir