const SectionService= require('../services/section.service');
class SectionController {
  async listSections(parameter) {
    const message = "El idMateria es requerido";
    if(!parameter.idMateria) return {status: 400,  message }; 
    const result = await SectionService.list(parameter.idMateria);
    return result;
  }

  async insertSection(body) {
    const validateParams = this.isValidateSection(body);
    if(validateParams.length == 0){
      const result = await SectionService.insertSection(body);
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

  isValidateSection(data){
    let parameters = [];
    if(!data.seccion) parameters.push("seccion");
    if(!data.idMateria) parameters.push("idMateria");
    if(!data.idProfe) parameters.push("idProfe");

    return parameters;
}

}

module.exports = new SectionController();