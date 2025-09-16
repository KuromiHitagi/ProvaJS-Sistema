import { Router } from 'express';
import { getAuthentication } from '../utils/jwt.js';

import * as salaRepo from '../repository/salaRepository.js';
import * as salaPermissaoRepo from '../repository/salaPermissaoRepository.js';

const endpoints = Router();
const autenticador = getAuthentication();

endpoints.post('/sala', autenticador, async (req, resp) => {
    let novaSala = req.body;

    let id = await salaRepo.inserirSala(novaSala);
    resp.send({ novoId: id });
})


endpoints.get('/sala/:id', autenticador, async (req, resp) => {
    let id = req.params.id;
    let info = await salaRepo.buscarSalaPorId(id)
    resp.send(info)
})





export default endpoints;