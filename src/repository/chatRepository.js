import { connection } from './connection.js';


export async function inserirMensagem(usuarioId, salaId, mensagem) {
    const comando = `insert into chat(usuario_id, sala_id, mensagem, criacao) values(?,?,?,?)`

    let [registro] = await connection.query(comando, [
        usuarioId,
        salaId,
        mensagem,
        new Date()
    ]);
    return registro.insertId
}


export async function listarMensagensPorSala(salaId) {
    const comando = `select chat.id, usuario.nome as usuario_nome, chat.sala_id, chat.mensagem, chat.criacao from chat
                     inner join usuario on chat.usuario_id = usuario.id
                     inner join sala on chat.sala_id = sala.id
                     where chat.sala_id = ?
                     order by criacao asc;`

    let [registro] = await connection.query(comando, [salaId])

    return registro;
}