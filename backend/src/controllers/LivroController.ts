import Livro from "../models/Livro";
import { ILivro } from "../models/Livro";

class LivroController {
    static listarLivros(){
        return Livro.index();
    }

    static buscarLivroPorId(id: number){
        return Livro.findById(id);
    }

    static buscarPorTitulo(titulo: string){
        return Livro.findByTitulo(titulo);
    }

    static cadastrarLivro({ titulo, autor, editora, paginas}: Omit<ILivro, 'id'>){
        return Livro.create({ titulo, autor, editora, paginas });
    }

    static editarLivro({ id, titulo, autor, editora, paginas}: ILivro){
        return Livro.update({ id, titulo, autor, editora, paginas});
    }

    static excluirLivro(id: number){
        return Livro.delete(id)
    }
}

export default LivroController;