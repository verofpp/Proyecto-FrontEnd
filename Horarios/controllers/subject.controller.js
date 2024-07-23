const SubjectService = require('../services/subject.service');
class SubjectController {
    async listSubject() {
       const result = await SubjectService.listSubject();
       return result;
    }

    async listDashboardSubjects() {
      const result = await SubjectService.listDashboardSubjects();
      return result;
   }

   async searchSubjectName(parameter) {
      const message = "El parametro materia es requerido";
      if(!parameter.texto) return {status: 400,  message }; 
      const result = await SubjectService.searchSubjectName(parameter.texto);
      return result;
   }

    async insertSubject(body) {
      const message = "El parametro materia es requerido";
      if(!body.materia) return {status: 400,  message }; 
      let aux = body.materia.match(/\b(\w)/g).join('');
      if(aux.length == 1) aux = (aux + aux)
      body.materia =  body.materia.charAt(0).toUpperCase() + body.materia.slice(1).toLowerCase();
      const result = await SubjectService.insertSubject(body,  aux.slice(0,2));
      return result;
   }


}

module.exports = new SubjectController();