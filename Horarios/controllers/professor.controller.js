
const ProfessorService = require('../services/professor.service');

class ProfessorController {
    async listProfessors() {
       const result = await ProfessorService.listProfessors();
       return result;
    }

}

module.exports = new ProfessorController();
