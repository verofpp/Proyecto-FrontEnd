const SubjectRepository = require('../repositories/subject.repository');
class SubjectService {
  async listSubject() {
    try {
      const listSubject = await  SubjectRepository.list();
      return listSubject;
    } catch (error) {
      return {
          status: 500,
          message: error
      }
        
    }
  }
  async searchSubjectName(texto) {
    try {
      const listSubject = await  SubjectRepository.searchSubjectName(texto);
      return listSubject;
    } catch (error) {
      return {
          status: 500,
          message: error
      }
        
    }
  }

  async listDashboardSubjects() {
    try {
      const listSubject = await  SubjectRepository.listDashboardSubjects();
      return listSubject;
    } catch (error) {
      return {
          status: 500,
          message: error
      }
        
    }
  }

  dashboardSubjects

  async insertSubject(body,siglas) {
    try {
      const validateSubject = await SubjectRepository.searchSubject(body.materia);
      if(validateSubject.data[0].total == 0){
        const insertSubject = await  SubjectRepository.insertSubject(body, siglas);
        return insertSubject;
      }else{
        return {
          status: 400,
          message: "La Materia '" + body.materia + "' ya existe"
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

module.exports = new SubjectService();
