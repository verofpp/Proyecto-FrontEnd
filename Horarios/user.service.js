const UserRepository = require('../repositories/user.repository');
const ProfessorRepository = require('../repositories/professor.repository');
const bcrypt = require('bcryptjs');
class UserService {
    async insertUser(body) {
        try {
            const validateUser = await  UserRepository.searchUser(body.usuario);
            const validateEmail = await UserRepository.searchEmail(body.correo);

            let errorData = [];
            if(validateUser.status == 200 && validateEmail.status == 200){
                if(validateUser.data[0].total == 0 && validateEmail.data[0].total == 0 ){
                    const salt = bcrypt.genSaltSync();
                    body.password = bcrypt.hashSync(body.password, salt);
                    const insertUser = await UserRepository.insertUser(body);
                    if(insertUser.status == 200 && body.rol.toLowerCase() == "profesor"){
                        const insertProfesssor = await ProfessorRepository.insertProfesssor(body, insertUser.data.insertId);
                        return insertProfesssor;
                    }else{
                        return insertUser;
                    }
                }else{
                    if(validateUser.data[0].total) errorData.push('Usuario');
                    if(validateEmail.data[0].total) errorData.push('Email');
                    return {
                        status: 400,
                        message: "Ya existen los valores ingresados de: " + errorData.toString()
                    }
                }
            }
        } catch (error) {
            return {
                status: 500,
                message: error
            }
        }
    }
    async login(user, password) {
        try {
            const session = await UserRepository.login(user);

            let errorData = [];
            if(session.status == 200){
                if(session.data.length > 0){
                    if(bcrypt.compareSync(password, session.data[0].contrasena)){
                        return{
                            status: 200,
                            data: {
                                idUser: session.data[0].id,
                                rolUser: session.data[0].rol
                            }
                        }
                    }else{
                        errorData.push('password');
                    }

                }else{
                    errorData.push('usuario');
                }
            }

            return {
                status: 400,
                message: "Se presenta error en el " + errorData.toString()
            };
        } catch (error) {
            return {
                status: 500,
                message: error
            }
        }
    }
}

module.exports = new UserService();
