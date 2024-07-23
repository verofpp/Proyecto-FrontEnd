const db = require('../db/connection');
class ClassRepository {
    async list(idSeccion) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT  c.id AS idClase, c.dia, 
                DATE_FORMAT(DATE_ADD(t.inicio, INTERVAL ((c.semana - 1) * 7 + (c.dia - 1) )  DAY), '%m-%d-%y') AS fecha
                FROM clases c JOIN trimestre t ON t.id = c.id_tri 
                JOIN secciones s ON s.id = c.id_sec  WHERE s.id = ${ idSeccion } ORDER BY t.inicio DESC;`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }

    async listByActivity(idActividad) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT  c.id AS idClase, c.dia, 
                DATE_FORMAT(DATE_ADD(t.inicio, INTERVAL ((c.semana - 1) * 7 + (c.dia - 1) )  DAY), '%m-%d-%y') AS fecha
                FROM clases c JOIN trimestre t ON t.id = c.id_tri JOIN secciones s ON s.id = c.id_sec  
                WHERE s.id = (SELECT id_sec FROM clases c2 JOIN actividades a ON a.id_cla = c2.id  WHERE a.id = ${ idActividad } LIMIT 1)
                ORDER BY t.inicio DESC;`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }


    async searchClass(body) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT count(*) as total FROM clases 
                where id_sec = ${body.idSeccion} AND id_tri = ${body.idTrimestre} 
                AND semana =  ${body.semana} AND dia = '${body.dia}';`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }
    async insertClass(body) {
      return new Promise((resolve, reject) => {
          db.query(
              `INSERT INTO clases(id, id_sec, id_tri, semana, dia) 
               VALUES(NULL, ${body.idSeccion}, ${body.idTrimestre}, ${body.semana}, '${body.dia}');`,
              (err, results) => {
                  if (err) reject({status: 500, message: err});
                  resolve({status: 200, data: results});
              });
      });
  }
}

module.exports = new ClassRepository();