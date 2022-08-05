import pool from "../config/database";
import { ILivro } from "../models/Livro";

class EditarLivrosService{
    static async execute({ id, titulo, autor, editora, paginas }: ILivro){
        const sql = 'UPDATE livros SET titulo = $1, autor = $2, editora = $3, paginas = $4 WHERE id = $5'
        await pool.query(sql, [titulo, autor, editora, paginas, id])
    }
}

export default EditarLivrosService