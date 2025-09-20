import { connection } from './connection.js';


export async function inserirSala(novaSala) {
    const comando = `
        INSERT INTO sala(nome, usuario_id)
                VALUES (?, ?);
        `;

  const [info] = await connection.query(comando, [
    novaSala.nome,
    novaSala.usuario_id
  ]);
  return info.insertId;
}


export async function buscarSalaPorId(id) {
   const comando = `select sala.id, sala.nome, sala.usuario_id from sala
                    inner join usuario on sala.usuario_id = usuario.id
                    where usuario.id = ?;`

   let [registro] = await connection.query(comando, [id])
   return registro;
}

