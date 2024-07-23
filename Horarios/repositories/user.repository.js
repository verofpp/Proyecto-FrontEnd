const db = require('../db/connection');
class UserRepository {
    async login(user) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT id, rol, contrasena FROM usuarios u WHERE u.usuario = '${ user.toLowerCase() }';`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }
    async searchUser(user) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT count(*) AS total FROM usuarios u WHERE u.usuario  LIKE '${ user.toLowerCase() }';`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }
    async searchEmail(email) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT count(*) AS total FROM usuarios u WHERE u.correo  LIKE '${ email }';`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }
    async insertUser(body) {
        return new Promise((resolve, reject) => {
            db.query(
                `INSERT INTO usuarios (id, correo, usuario, contrasena, rol) 
                VALUES(NULL, '${body.correo}', '${body.usuario.toLowerCase()}', '${body.password}', '${ body.rol }');`,
                (err, results) => {
                    if (err) reject({status: 500, message: err});
                    resolve({status: 200, data: results});
                });
        });
    }
   
}

module.exports = new UserRepository();