// Módulo de Cálculos

// Arrow function con operador rest (...notas)
export const promedio = (...notas) => {
  const suma = notas.reduce((acc, nota) => acc + nota, 0);
  return suma / notas.length;
};

// Arrow function con parámetro por defecto (minima = 13)
export const estado = (nota, minima = 13) =>
  nota >= minima ? "Aprobado" : "Desaprobado";

// Arrow function con Desestructuración, Spread y Template Literals
const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};

export default reporte;
