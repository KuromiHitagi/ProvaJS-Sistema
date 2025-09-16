import { Router } from 'express';
import { getAuthentication } from '../utils/jwt.js';

import * as salaPermissaoRepo from '../repository/salaPermissaoRepository.js';
import * as salaRepo from '../repository/salaRepository.js';

const endpoints = Router();
const autenticador = getAuthentication();



endpoints.post('/sala/:sala/request', autenticador, async (req, resp) => {
    let salaId = req.params.sala;
    let info = salaPermissaoRepo.verificarPermissaoSala(salaId)
    resp.send({ novoId : id})
});


endpoints.post('/sala/:sala/aprovar/:usuario', autenticador, async (req, resp) => {
    
  
});



export default endpoints;