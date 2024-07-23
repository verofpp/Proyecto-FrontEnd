const ProfessorRepository = require('../repositories/professor.repository');
class ProfessorService {
  async listProfessors() {
    try {
      const listProfessors = await  ProfessorRepository.list();
      return listProfessors;
    } catch (error) {
      return {
          status: 500,
          message: error
      }
        
    }
  }
}

module.exports = new ProfessorService();
