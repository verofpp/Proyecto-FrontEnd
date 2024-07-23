const getDia = (fecha) => {
    let dia = '';

    switch (fecha.getDay()) {
        case 0: dia = 'Lunes'; break;
        case 1: dia = 'Martes'; break;
        case 2: dia = 'Miércoles'; break;
        case 3: dia = 'Jueves'; break;
        case 4: dia = 'Viernes'; break;
        case 5: dia = 'Sábado'; break;
        case 6: dia = 'Domingo'; break;
    }

    return dia;
}

export default getDia;
