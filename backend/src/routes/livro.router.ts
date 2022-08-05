import { Router } from 'express';
import LivroController from '../controllers/LivroController';

const livroRoutes = Router();

livroRoutes.get('/', async (req, res) => {
    const livros = await LivroController.listarLivros();
    return res.status(200).json(livros)
})

livroRoutes.get('/:id', async (req, res) =>{
    const id = parseInt(req.params.id)
    const livro = await LivroController.buscarLivroPorId(id);
    return res.status(200).json(livro)
})

livroRoutes.post('/', async(req,res) =>{
    const { titulo, autor, editora, paginas } = req.body;
    await LivroController.cadastrarLivro({ titulo, autor, editora, paginas })
    return res.send( { message: 'Livro cadastrado com sucesso!'})
})

livroRoutes.put('/:id', async(req, res) =>{
    const id = parseInt(req.params.id)
    const { titulo, autor, editora, paginas } = req.body;
    const livros = await LivroController.editarLivro({ id,titulo, autor, editora, paginas })
    return res.status(200).json(livros)
})

livroRoutes.delete('/:id', async(req, res) => {
    const id = parseInt(req.params.id);
    await LivroController.excluirLivro(id)
    return res.status(200).json({ message: `Livro ${id} excluído com sucesso`})
})

export default livroRoutes