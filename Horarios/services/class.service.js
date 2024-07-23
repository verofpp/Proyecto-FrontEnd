const ClassRepository = require('../repositories/class.repository');
class ClassService {
  async list(id, isSeccion) {
    try {
      let listClass;
      if(isSeccion){
        listClass = await  ClassRepository.list(id);
      }else{
        listClass = await  ClassRepository.listByActivity(id);
      }
     
      if(listClass.status == 200){
        const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
        let response = [];
        for(const x of listClass.data){
          x.dia = x.dia.charAt(0).toUpperCase() + x.dia.slice(1);
          const fecha = new Date(x.fecha);
          x.fecha = (fecha.getDate()) + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear();
          const dateClass = x.dia + ", " + x.fecha;
          response.push({
            "idClase": x.idClase,
            "fecha": dateClass
          });
        }
        return {
          status: listClass.status,
          data: response
        }
      }else{
        return listClass;
      }
    } catch (error) {
      return {
          status: 500,
          message: error
      }
        
    }
  }
  async insertClass(body) {
    try {
      const validateClass = await ClassRepository.searchClass(body);

      if(validateClass.data[0].total == 0){
        const classInsert = await  ClassRepository.insertClass(body);
        return classInsert;
      }else{
        return {
          status: 400,
          message: "La Clase ya existe"
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

module.exports = new ClassService();