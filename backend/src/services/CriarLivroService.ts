import pool from "../config/database";
import { ILivro } from "../models/Livro";

class CriarLivroService{
    static async execute({titulo, autor, editora, paginas}: Omit<ILivro, 'id'>){
        const sql = 'INSERT INTO livros (titulo, autor, editora, paginas) VALUES ($1, $2, $3, $4)'
        await pool.query(sql, [titulo, autor, editora, paginas])
    }
}

export default CriarLivroService