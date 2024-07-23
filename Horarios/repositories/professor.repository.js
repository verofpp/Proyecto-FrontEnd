const db = require('../db/connection');
class ProfessorRepository {
    async list() {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT id AS idProfe, CONCAT(apellido, ", ", nombre) AS fullName FROM profesores ORDER BY apellido ASC;`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }
    async insertProfesssor(body, idUser) {
      return new Promise((resolve, reject) => {
          db.query(
              `INSERT INTO profesores(id, id_usu, nombre, apellido)
              VALUES(NULL, ${idUser}, '${body.nombre}', '${body.apellido}');`,
              (err, results) => {
                  if (err) reject({status: 500, message: err});
                  resolve({status: 200, data: results});
              });
      });
  }
}

module.exports = new ProfessorRepository();