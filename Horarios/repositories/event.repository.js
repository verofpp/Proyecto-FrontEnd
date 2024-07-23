const db = require('../db/connection');
class EventRepository {

    async list(idTrimeste) {
      return new Promise((resolve, reject) => {
          db.query(
              `SELECT * FROM eventos e WHERE e.id_tri = ${idTrimeste};`,
              (err, results) => {
                  if (err) reject({status: 500, message: err});
                  resolve({status: 200, data: results});
              });
      });
    }
    async searchEvent(body) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT id, id_tri, motivo, fecha FROM eventos WHERE id_tri = ${body.idTrimestre} 
                AND  motivo = '${body.motivo.trim()}' AND fecha = '${body.fecha}';`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }
    async insertEvent(body) {
      return new Promise((resolve, reject) => {
          db.query(
              `INSERT INTO eventos(id, id_tri, motivo, fecha)
              VALUES(NULL, ${body.idTrimestre}, '${body.motivo.trim()}', '${body.fecha}');`,
              (err, results) => {
                  if (err) reject({status: 500, message: err});
                  resolve({status: 200, data: results});
              });
      });
  }
}

module.exports = new EventRepository();