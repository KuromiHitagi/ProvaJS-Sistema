import { connection } from './connection.js';


export async function inserirPermissao(salaId,novoRequest) {
    const comando = `insert into salaPermissao(sala_id, usuario_id, aprovado) values(?,?, false)`

    let [registro] = await connection.query(comando, [
        salaId,
        novoRequest.usuario_id
    ])
    return registro.insertId;
}


export async function aprovarPermissao(salaId, usuarioId) {
    const comando = `update salaPermissao
                     set aprovado = true
                     where sala_id = ? and usuario_id = ?`

    let [registro] = await connection.query(comando, [
        salaId,
        usuarioId
    ])
    return "Alterado com Sucesso!"
}


export async function verificarPermissaoSala(salaId) {
    const comando = `select salaPermissao.id, salaPermissao.sala_id, salaPermissao.usuario_id, salaPermissao.aprovado from salaPermissao 
                     inner join sala on salaPermissao.sala_id = sala.id  
                     where salaPermissao.sala_id = ?`

    let [registro] = await connection.query(comando, [salaId])
    return registro;
}

export async function verificarPermissao(usuarioId, salaId) {
    const comando = `select aprovado from salaPermissao where usuario_id = ? and sala_id = ?`

    let [registro] = await connection.query(comando, [
        usuarioId,
        salaId
    ])
    return registro[0];
}