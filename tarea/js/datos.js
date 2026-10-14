// Módulo de Datos

export const curso = "Diseño de Interfaces";

export const estudiantes = [
  { nombre: "Ana", notas: [16, 18, 15] },
  { nombre: "Luis", notas: [12, 10, 14] },
  { nombre: "Rosa", notas: [19, 17, 20] },
];

// Uso de Spread en objetos
const nuevoEstudiante = { ...estudiantes[0], nombre: "Ana María" };

// Uso de Spread en arreglos para combinar
const todosEstudiantes = [...estudiantes, nuevoEstudiante];

export default todosEstudiantes;
