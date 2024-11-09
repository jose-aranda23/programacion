function obtenerDiaSemana(dia) {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return dias[dia];
}

function obtenerMes(mes) {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return meses[mes];
}

function mostrarFecha() {
    const fechaActual = new Date();
    const diaSemana = obtenerDiaSemana(fechaActual.getDay());
    const dia = fechaActual.getDate();
    const mes = obtenerMes(fechaActual.getMonth());
    const año = fechaActual.getFullYear();
    const hora = fechaActual.toLocaleTimeString(); // Para obtener la hora actual

    const fechaTexto = `${diaSemana}, ${dia} de ${mes} de ${año} - ${hora}`;
    document.getElementById("fecha").innerText = fechaTexto;
}

// Actualizamos la fecha automáticamente cada segundo
setInterval(mostrarFecha, 1000);

// Actualiza el año automáticamente
document.getElementById("year").textContent = new Date().getFullYear();