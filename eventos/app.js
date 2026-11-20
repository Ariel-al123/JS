
let nombre = document.querySelector("#campo-nombre");
let cam_parcial1 = document.querySelector("#campo-parcial1");
let cam_parcial2 = document.querySelector("#campo-parcial2");

let btn_registrar = document.querySelector("#boton-registrar");
let btn_reiniciar = document.querySelector("#boton-reiniciar");

let list_tarjetas = document.querySelector("#lista-tarjetas");

btn_registrar.addEventListener("click", () => {

    const nombreAlumno = nombre.value;
    const parcial1 = Number(cam_parcial1.value);
    const parcial2 = Number(cam_parcial2.value);

    const promedio = ((parcial1 + parcial2) / 2).toFixed(1);

    if (promedio >= 6.0) {
        list_tarjetas.innerHTML += `
            <div class="tarjeta estado-positivo">
                <h3>${nombreAlumno}</h3>
                <p>Promedio: ${promedio}</p>
                <p>Estado: Aprobado</p>
            </div>
        `;
    } else {
        list_tarjetas.innerHTML += `
            <div class="tarjeta estado-alerta">
                <h3>${nombreAlumno}</h3>
                <p>Promedio: ${promedio}</p>
                <p>Estado: Reprobado</p>
            </div>
        `;
    }

    nombre.value = "";
    cam_parcial1.value = "";
    cam_parcial2.value = "";

    nombre.focus();
});

btn_reiniciar.addEventListener("click", () => {
    list_tarjetas.innerHTML = "";
});
