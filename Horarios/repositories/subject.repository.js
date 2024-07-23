const db = require('../db/connection');
class SubjectRepository {

    async searchSubject(subject) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT count(*) as total FROM materias where nombre = '${subject}';`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }
    async searchSubjectName(subject) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM materias where nombre like '%${subject}%';`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }
    async list() {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT id AS idmateria, nombre FROM materias ORDER BY nombre ASC;`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }

    async listDashboardSubjects() {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT m.id as idMateria, m.nombre, count(s.id) as total, m.siglas FROM materias m 
                LEFT JOIN secciones s ON s.id_mat = m.id  GROUP BY m.nombre ORDER BY m.nombre ASC; `,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }
    async insertSubject(body, siglas) {
      return new Promise((resolve, reject) => {
          db.query(
              `INSERT INTO materias(id, nombre, siglas) VALUES(NULL, '${body.materia}', '${siglas}');`,
              (err, results) => {
                  if (err) reject({status: 500, message: err});
                  resolve({status: 200, data: results});
              });
      });
  }
}

module.exports = new SubjectRepository();