const ActivityRepository = require('../repositories/activity.repository');
class ActivityService {
  async listDashboard(idSeccion) {
    try {
      const listActivitys = await  ActivityRepository.listDashboard(idSeccion);
      const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
      if(listActivitys.status == 200){
        for(const x of listActivitys.data){
          x.dia = x.dia.charAt(0).toUpperCase() + x.dia.slice(1);
          const fecha = new Date(x.fecha);
          const fechaN = (fecha.getDate()) + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear();
          x.fecha = x.dia + ", " + fechaN;
        }
      }
      return listActivitys;
    } catch (error) {
      return {
          status: 500,
          message: error
      }
        
    }
  }
  async list(idActividad) {
    try {
      const listActivitys = await  ActivityRepository.list(idActividad);
      const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
      if(listActivitys.status == 200){
        for(const x of listActivitys.data){
          x.dia = x.dia.charAt(0).toUpperCase() + x.dia.slice(1);
          const fecha = new Date(x.fecha);
          const fechaN = (fecha.getDate()) + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear();
          x.fecha = x.dia + ", " + fechaN;
        }
       
      }
      return listActivitys;
    } catch (error) {
      return {
          status: 500,
          message: error
      }
        
    }
  }
  async insertActivity(body) {
    try {
      if(!body.id){
        const validateActivity = await ActivityRepository.searchActivity(body);

        if(validateActivity.data[0].total == 0){
          const activityInsert = await  ActivityRepository.insertActivity(body);
          return activityInsert;
        }else{
          return {
            status: 400,
            message: "La actividad ya existe"
          }
        }
      }else{
        const activityInsert = await  ActivityRepository.updateActivity(body);
        return activityInsert;
      }
    
    } catch (error) {
      return {
          status: 500,
          message: error
      }
        
    }
  }
}

module.exports = new ActivityService();