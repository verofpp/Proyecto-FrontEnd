
const UserService = require('../services/user.service');
class UserController {
    async insertUser(body) {
        const validateParams = this.isValidatedData(body);
        if(validateParams.length == 0){
            if(!this.isValidateEmail(body.correo)){
                return {
                    status: 400,
                    message: "El correo electrónico no tiene el formato correcto"
                }
            }
            const result = await UserService.insertUser(body);
            return result;
        }

        let message;
        if(validateParams.length == 1){
            message =  "El parametro " + validateParams.toString() + " es requerido";
        }else{
            message = "Los parametros " + validateParams.toString() + " son requeridos";
        }
        return {
            status: 400,
            message
        };
    }

    async loginUser(parameters){

        const validateParams = this.isValidateLogin(parameters);
        if(validateParams.length == 0){
            const password = Buffer.from(parameters.password, 'base64').toString();
            const  result = await UserService.login(parameters.usuario, password);

            return result;
        }

        let message;
        if(validateParams.length == 1){
            message =  "El parametro " + validateParams.toString() + " es requerido";
        }else{
            message = "Los parametros " + validateParams.toString() + " son requeridos";
        }
        return {
            status: 400,
            message
        };
    }
    isValidatedData(body) {
        let parameters = [];
    
        if(!body.rol) parameters.push("rol");
        if(!body.correo) parameters.push("correo");
        if(!body.usuario) parameters.push("usuario");
        if(!body.password) parameters.push("password");

        if(body.rol && body.rol == "profesor"){
            if(!body.nombre){
                parameters.push("nombre");
            }else{
                body.nombre = this.capitalizeWords(body.nombre);
            }
            if(!body.apellido){
                parameters.push("apellido");
            }else{
                body.apellido = this.capitalizeWords(body.apellido);
            }
        }

        return parameters;
    }

    isValidateEmail(email){
        const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        return validEmail.test(email);

    }
    isValidateLogin(data){
        let parameters = [];
        if(!data.usuario) parameters.push("usuario");
        if(!data.password) parameters.push("password");

        return parameters;
    }

    capitalizeWords(words){
        return words.toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    }
}

module.exports = new UserController();
