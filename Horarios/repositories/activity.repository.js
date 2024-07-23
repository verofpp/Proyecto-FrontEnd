const db = require('../db/connection');
class ActivityRepository {
    async listDashboard(idSeccion) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT a.id AS idActividad, a.actividad, RIGHT(a.actividad, 3) AS siglas,  c.dia, c.semana,
                DATE_FORMAT(DATE_ADD(t.inicio, INTERVAL ((c.semana - 1) * 7 + (c.dia - 1) )  DAY), '%m-%d-%y')  as fecha
                FROM actividades a
                JOIN clases c ON c.id = a.id_cla
                JOIN trimestre t  ON t.id  = c.id_tri 
                WHERE c.id_sec = ${idSeccion}`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }

    async list(idActivity) {
      return new Promise((resolve, reject) => {
          db.query(
              `SELECT a.id AS idActividad, a.id_cla AS idClase, actividad, descripcion , c.*,
	            DATE_FORMAT(DATE_ADD(t.inicio, INTERVAL ((c.semana - 1) * 7 + (c.dia - 1) )  DAY), '%m-%d-%y')  as fecha,
	            m.id AS idMateria, m.nombre AS materia, s.id AS idSeccion, s.nombre AS seccion
                FROM actividades a JOIN clases c ON a.id_cla  = c.id  JOIN secciones s ON s.id = c.id_sec 
                JOIN materias m ON m.id = s.id_mat JOIN trimestre t  ON t.id  = c.id_tri WHERE a.id = ${idActivity}`,
              (err, results) => {
                  if (err) reject({status: 500, message: err});
                  resolve({status: 200, data: results});
              });
      });
  }
    async searchActivity(body) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT count(*) as total FROM actividades 
                where id_cla = ${body.idClase} AND  actividad = '${body.actividad.trim()}';`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }
    async insertActivity(body) {
      return new Promise((resolve, reject) => {
          db.query(
              `INSERT INTO actividades(id, id_cla, actividad, descripcion)
              VALUES(NULL, ${body.idClase}, '${body.actividad.trim()}', '${body.descripcion}');`,
              (err, results) => {
                  if (err) reject({status: 500, message: err});
                  resolve({status: 200, data: results});
              });
      });
    }

    async updateActivity(body) {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE actividades SET id_cla=${body.idClase}, actividad= '${body.actividad.trim()}',
                descripcion= '${body.descripcion}' WHERE id= ${body.id};`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
      }
}

module.exports = new ActivityRepository();