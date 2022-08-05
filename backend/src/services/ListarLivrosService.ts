import pool from "../config/database";

class ListarLivrosService{
    static async execute() {
        const sql = 'SELECT * FROM livros ORDER BY id';
        const livros = await pool.query(sql);
        return livros.rows;
    }
}

export default ListarLivrosService;