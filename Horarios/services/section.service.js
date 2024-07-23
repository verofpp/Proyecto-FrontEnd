const SectionRepository = require('../repositories/section.repository');
class SectionService {
  async list(idMateria) {
    try {
      const listSections = await  SectionRepository.list(idMateria);
      return listSections;
    } catch (error) {
      return {
          status: 500,
          message: error
      }
        
    }
  }
  async insertSection(body) {
    try {
      const validateSection = await SectionRepository.searchSection(body);

      if(validateSection.data[0].total == 0){
        const sectionInsert = await  SectionRepository.insertSection(body);
        return sectionInsert;
      }else{
        return {
          status: 400,
          message: "La Sección '" + body.seccion + "' ya existe"
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

module.exports = new SectionService();