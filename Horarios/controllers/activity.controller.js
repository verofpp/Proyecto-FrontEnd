const ActivityService= require('../services/activity.service');
class ActivityController {
  async listActivities(parameter) {
    const message = "El idSeccion es requerido";
    if(!parameter.idSeccion)  return {status: 400,  message };
    const result = await ActivityService.listDashboard(parameter.idSeccion);
    return result;
  }

  async listActivity(parameter) {
    const message = "El idActividad es requerido";
    if(!parameter.idActividad)  return {status: 400,  message };
    const result = await ActivityService.list(parameter.idActividad);
    return result;
  }

  async insertActivity(body) {
    const validateParams = this.isValidateActivity(body);
    if(validateParams.length == 0){
      const result = await ActivityService.insertActivity(body);
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

  isValidateActivity(data){
    let parameters = [];
    if(!data.idClase) parameters.push("idClase");
    if(!data.actividad) parameters.push("actividad");
    if(!data.descripcion) parameters.push("descripcion");

    return parameters;
}

}

module.exports = new ActivityController();