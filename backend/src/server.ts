//primeiro arquivo do sistema, onde se cria o servidor. 
//express é responsável pelo gerenciamento de rotas do sistema.
//este arquivo é base para o funcionamento do ts-node-dev (para a atualização imediata do sistema ao programar).
//a configuração é feita através de um script dentro do package.json, criando um script com o nome de dev.

import express from 'express';
import router from './routes';
import pool from './config/database';
import cors from 'express'

pool.connect(function(err) {
    if(err){
        console.log(err);
    } else {
        console.log('Conectado ao banco de dados');
    }
})

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(express.json())
app.use(router);

app.listen(port, () => console.log(`Servidor localhost:${port} iniciado`));