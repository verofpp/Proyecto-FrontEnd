const EventRepository = require('../repositories/event.repository');
const TrimesterRepository = require('../repositories/trimester.repository');
class EventService {
  async list(idTrimestre) {
    try {
      const listEvents = await  EventRepository.list(idTrimestre);
      return listEvents;
    } catch (error) {
      return {
          status: 500,
          message: error
      }
        
    }
  }
  async insertEvent(body) {
    try {
      const days = ['lunes','martes','miercoles','jueves','viernes','sabado'];
      const day = days.indexOf(body.dia.toLowerCase()) + 1;
      if(day > 0){
        const fecha = await TrimesterRepository.calculateDate(day, body.semana, body.idTrimestre);
        if(fecha.status == 200 && fecha.data.length >0){
          body['fecha'] = fecha.data[0].fecha;
          const validateEvent = await EventRepository.searchEvent(body);
          if(validateEvent.status == 200 && validateEvent.data.length == 0){
            const EventInsert = await  EventRepository.insertEvent(body);
            return EventInsert;
          }else{
            return {
              status: 400,
              message: "El evento ya existe"
            }
          }
        }
        return fecha;
      }

     
    } catch (error) {
      return {
          status: 500,
          message: error
      }
        
    }
  }
}

module.exports = new EventService();