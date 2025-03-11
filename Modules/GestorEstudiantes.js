export class GestorEstudiantes {
    constructor() {
      this.estudiantes = [];
    }
  
    crear(nombre, edad, nivel, calificaciones = {}) {
      const id = this.estudiantes.length + 1;
      this.estudiantes.push({ id, nombre, edad, nivel, calificaciones });
    }

}