const db = require('../db/connection');
class TrimesterRepository {

    async searchTrimester(body) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT count(*) as total FROM trimestre where inicio = '${body.inicio}' AND fin = '${body.fin}';`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }
    async list() {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT id as value, CONCAT(DATE_FORMAT(inicio, "%d/%m/%Y"), " - ", DATE_FORMAT(fin, "%d/%m/%Y"))  as label FROM trimestre ORDER BY inicio DESC;`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }
    async insertTrimester(body) {
      return new Promise((resolve, reject) => {
          db.query(
              `INSERT INTO trimestre(id, inicio, fin)VALUES(0, '${body.inicio}', '${body.fin}');`,
              (err, results) => {
                  if (err) reject({status: 500, message: err});
                  resolve({status: 200, data: results});
              });
      });
  }

  async calculateDate(day, week, id){
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT DATE_FORMAT(DATE_ADD(t.inicio, INTERVAL ((${week} - 1) * 7 + (${day} - 1) )  DAY), '%y-%m-%d')  AS fecha
            FROM trimestre t WHERE t.id =  ${id};`,
            (err, results) => {
                if (err) reject({status: 500, message: err});
                resolve({status: 200, data: results});
            });
    });
  }
}

module.exports = new TrimesterRepository();