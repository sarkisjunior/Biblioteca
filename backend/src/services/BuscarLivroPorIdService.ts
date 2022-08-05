import pool from "../config/database";

class BuscarLivroPorIdService{
    static async execute(id: number){
        const sql = 'SELECT * FROM livros WHERE id = $1'
        const livro = await pool.query(sql, [id])
        return livro.rows
    }
}

export default BuscarLivroPorIdService