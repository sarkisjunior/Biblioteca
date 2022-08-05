import BuscarLivroPorIdService from "../services/BuscarLivroPorIdService";
import ListarLivrosService from "../services/ListarLivrosService";
import ExcluirLivrosService from "../services/ExcluirLivrosService";
import BuscarLivroPorTituloService from "../services/BuscarLivroPorTituloService";
import EditarLivrosService from "../services/EditarLivrosService";
import CriarLivroService from "../services/CriarLivroService";

export interface ILivro{
    id: number;
    titulo: string;
    autor: string;
    editora: string;
    paginas: number;
}

class Livro{
    private id: number;
    private titulo: string;
    private autor: string;
    private editora: string;
    private paginas: number;

    static index(){
        return ListarLivrosService.execute();
    }

    static async create({titulo, autor, editora, paginas}: Omit<ILivro, 'id'>){
        
        CriarLivroService.execute({titulo, autor, editora, paginas})

        const livro = await this.findByTitulo(titulo)
        return livro
    }

    static async update({ id, titulo, autor, editora, paginas }: ILivro){
        
        EditarLivrosService.execute({ id, titulo, autor, editora, paginas })

        const livro = await this.findById(id)
        return livro
    }

    static delete(id:number){
        return ExcluirLivrosService.execute(id)
    }

    static findByTitulo(titulo: string){
        return BuscarLivroPorTituloService.execute(titulo)
    }

    static findById(id: number){
        return BuscarLivroPorIdService.execute(id);
    }

}

export default Livro