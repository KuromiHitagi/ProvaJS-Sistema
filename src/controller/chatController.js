import { Router } from 'express';
import { getAuthentication } from '../utils/jwt.js';

import * as salaPermissaoRepo from '../repository/salaPermissaoRepository.js';
import * as chatRepo from '../repository/chatRepository.js';

const endpoints = Router();
const autenticador = getAuthentication();


endpoints.post('/chat/:sala', autenticador, async (req, resp) => {
    let salaId = req.params.sala;
    let mensagem = req.body.mensagem;

    let usuarioId = req.user.id;

    let permitido = await salaPermissaoRepo.verificarPermissao(usuarioId, salaId)
    if(!permitido || !permitido.aprovado) {
        return resp.status(403).send({erro: 'Você não tem permissão para enviar mensagens nesta sala.'})
    }

    let id = await chatRepo.inserirMensagem(usuarioId, salaId, mensagem);
    resp.send({mensagem : id})
});


endpoints.get('/chat/:sala', autenticador, async (req, resp) => {
    let salaId = req.params.sala;

    let info = await chatRepo.listarMensagensPorSala(salaId)
    resp.send(info)
});


export default endpoints;