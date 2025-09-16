import { connection } from './connection.js';


export async function inserirSala(novaSala) {
    const comando = `
        INSERT INTO sala(nome, usuario_Id)
                VALUES (?, ?);
        `;

  const [info] = await connection.query(comando, [
    novaSala.nome,
    novaSala.usuario_Id
  ]);
  return info.insertId;
}


export async function buscarSalaPorId(id) {
   const comando = `select * from sala where id = ?`

   let [registro] = await connection.query(comando, [salaId])
   return registro[0];
}

