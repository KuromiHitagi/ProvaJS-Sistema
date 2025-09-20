import { Router } from 'express';
import { getAuthentication } from '../utils/jwt.js';

import * as salaPermissaoRepo from '../repository/salaPermissaoRepository.js';

const endpoints = Router();
const autenticador = getAuthentication();



endpoints.post('/sala/:sala/request', autenticador, async (req, resp) => {
    let salaId = req.params.sala;
    let novoRequest = req.body;

    let id = await salaPermissaoRepo.inserirPermissao(salaId,novoRequest)
    resp.send({ novoId : id})
});


endpoints.put('/sala/:sala/aprovar/:usuario', autenticador, async (req, resp) => {
    let salaId = req.params.sala;
    let usuarioId = req.params.usuario;

    let info = await salaPermissaoRepo.aprovarPermissao(salaId, usuarioId)
    resp.send(info)
});

endpoints.get('/sala/:sala/verify-access', autenticador, async (req, resp) => {
    let salaId = req.params.sala;
    
    let info = await salaPermissaoRepo.verificarPermissaoSala(salaId)
    resp.send(info)
})



export default endpoints;