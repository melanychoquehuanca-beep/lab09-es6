// Módulo Principal (App)

import todosEstudiantes, { curso } from "./datos.js";
import reporte from "./calculos.js";

// Imprimir en la Consola
console.log(`Curso: ${curso}`);
todosEstudiantes.forEach((estudiante) => {
  console.log(reporte(estudiante));
});

// Renderizar en la Página Web
const tituloCurso = document.querySelector("#tituloCurso");
const listaReportes = document.querySelector("#reportes");

if (tituloCurso && listaReportes) {
  tituloCurso.textContent = `Curso: ${curso}`;

  todosEstudiantes.forEach((estudiante) => {
    const li = document.createElement("li");
    li.textContent = reporte(estudiante);
    listaReportes.appendChild(li);
  });
}
// fin
