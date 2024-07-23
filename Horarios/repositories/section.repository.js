const db = require('../db/connection');
class SectionRepository {
    async list(idMateria) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT s.id as idSeccion, CONCAT('S', LEFT(s.nombre,1)) AS siglas,  
                s.nombre, CONCAT('Prof. ', p.nombre, ' ', p.apellido) AS profesor,
                (SELECT count(*)  FROM actividades a JOIN clases c1 ON c1.id = a.id_cla  
                WHERE c1.id_sec = s.id)  AS totalActividades
                FROM secciones s 
                JOIN profesores p ON p.id = s.id_pro 
                WHERE s.id_mat = ${idMateria} ORDER BY s.nombre ASC`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }
    async searchSection(body) {
      return new Promise((resolve, reject) => {
          db.query(
              `SELECT count(*) as total FROM secciones where nombre = '${body.seccion.toUpperCase()}' AND id_mat = ${body.idMateria};`,
              (err, results) => {
                  if (err) reject({status: 500, message: err});
                  resolve({status: 200, data: results});
              });
      });
    }
    async insertSection(body) {
      return new Promise((resolve, reject) => {
          db.query(
              `INSERT INTO secciones(id, id_pro, id_mat, nombre) VALUES(NULL, ${body.idProfe},${body.idMateria}, '${body.seccion.toUpperCase()}');`,
              (err, results) => {
                  if (err) reject({status: 500, message: err});
                  resolve({status: 200, data: results});
              });
      });
  }
}

module.exports = new SectionRepository();