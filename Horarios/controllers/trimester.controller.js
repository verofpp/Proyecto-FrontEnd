const TrimesterService = require('../services/trimester.service');
class TrimesterController {
    async listTrimester() {
       const result = await TrimesterService.listTrimester();
       return result;
    }

    async insertTrimester(body) {
      const message = "Los parametros 'Inicio del ciclo' y 'Fin del ciclo' son requeridos";
      if(!body.inicio || !body.fin) return {status: 400,  message }; 
      const result = await TrimesterService.insertTrimester(body);
      return result;
   }


}

module.exports = new TrimesterController();