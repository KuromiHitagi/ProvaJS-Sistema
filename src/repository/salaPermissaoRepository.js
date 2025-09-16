import { connection } from './connection.js';


export async function inserirPermissao() {

}


export async function aprovarPermissao(salaId, usuarioId) {
    const comando = `update salaPermissao
                     set aprovado = true
                     where usuario_id = ?`
}


export async function verificarPermissaoSala(salaId) {
    const comando = `insert into salaPermissao(sala_id, usuario_id) values(?,?)`

    let [registro] = await connection.query(comando, [
        
    ]);
    return registro.insertId;
}