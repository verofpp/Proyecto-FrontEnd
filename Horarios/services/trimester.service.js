const TrimesterRepository = require('../repositories/trimester.repository');
class TrimesterService {
  async listTrimester() {
    try {
      const listTrimester = await  TrimesterRepository.list();
      return listTrimester;
    } catch (error) {
      return {
          status: 500,
          message: error
      }
        
    }
  }

  async insertTrimester(body) {
    try {
      const validateSubject = await TrimesterRepository.searchTrimester(body);
      if(validateSubject.data[0].total == 0){
        const insertTrimester = await  TrimesterRepository.insertTrimester(body);
        return insertTrimester;
      }else{
        return {
          status: 400,
          message: "El Trimestre inicio:  '" + body.inicio  + "'  a fin: '" + body.fin + "' ya existe"
        }
      }
     
    } catch (error) {
      return {
          status: 500,
          message: error
      }
        
    }
  }
}

module.exports = new TrimesterService();
