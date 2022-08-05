import pool from "../config/database";

class ExcluirLivrosService{
    static async execute(id: number){
        const sql = 'DELETE FROM livros WHERE id = $1'
        await pool.query(sql, [id])
    }
}

export default ExcluirLivrosService