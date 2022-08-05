//importa o Router do express e todas as rotas das classes criadas
import { Router } from 'express';
import livroRoutes from './livro.router';

//cria-se uma instância do método Router para iniciar o gerenciamento das rotas
const router = Router();

router.use('/livros', livroRoutes)

export default router;