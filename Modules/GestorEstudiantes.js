export class GestorEstudiantes {
    constructor() {
      this.estudiantes = [];
    }
  
    crear(nombre, edad, nivel, calificaciones = {}) {
      const id = this.estudiantes.length + 1;
      this.estudiantes.push({ id, nombre, edad, nivel, calificaciones });
    }
    listar() {
        return this.estudiantes;
      }
    
      actualizar(id, nombre, edad, nivel) {
        for (let i = 0; i < this.estudiantes.length; i++) {
          if (this.estudiantes[i].id === id) {
            this.estudiantes[i] = { id, nombre, edad, nivel };
            return true;
          }
        }
        return false;
      }
    

}
