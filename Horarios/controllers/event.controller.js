const EventService= require('../services/event.service');
class EventController {
  async listEvents(parameter) {
    const message = "El idTrimestre es requerido";
    if(!parameter.idTrimestre) return {status: 400,  message }; 
    const result = await EventService.list(parameter.idTrimestre);
    return result;
  }

  async insertEvent(body) {
    const validateParams = this.isValidateEvent(body);
    if(validateParams.length == 0){
      const result = await EventService.insertEvent(body);
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

  isValidateEvent(data){
    let parameters = [];
    if(!data.idTrimestre) parameters.push("idTrimestre");
    if(!data.semana) parameters.push("semana");
    if(!data.dia) parameters.push("dia");
    if(!data.motivo) parameters.push("motivo");

    return parameters;
}

}

module.exports = new EventController();