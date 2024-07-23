const ClassService = require('../services/class.service');
class ClassController {
  async listClasses(parameter) {
    const message = "El idSeccion es requerido";
    if(!parameter.idSeccion)  return {status: 400,  message };
    const result = await ClassService.list(parameter.idSeccion, true);
    return result;
  }

  async listClassesByActivity(parameter) {
    const message = "El idActividad es requerido";
    if(!parameter.idActividad)  return {status: 400,  message };
    const result = await ClassService.list(parameter.idActividad, false);
    return result;
  }

  async insertClass(body) {
    const validateParams = this.isValidateClass(body);
    if(validateParams.length == 0){
      const result = await ClassService.insertClass(body);
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

  isValidateClass(data){
    let parameters = [];
    if(!data.idSeccion) parameters.push("idSeccion");
    if(!data.idTrimestre) parameters.push("idTrimestre");
    if(!data.semana) parameters.push("semana");
    if(!data.dia) parameters.push("dia");

    return parameters;
}

}

module.exports = new ClassController();