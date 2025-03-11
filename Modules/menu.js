import readline from "readline";
import { agregarEstudiante, actualizarEstudiante, eliminarEstudiante, listarEstudiantes } from "./modules/estudiantes.js";
import { listarReporteEstudiantes, buscarEstudiante, calcularPromedioEstudiante, estudiantesConPromedioMayorA, estudiantesAprobadosYReprobados, promedioGeneralGrupo, promedioGeneralPorArea, distribucionPorArea, promedioMateriasPorArea, rankingEstudiantes, cantidadAprobadosReprobados, reporteRendimientoAcademico } from "./modules/reportes.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log(`\n===== MENÚ DE GESTIÓN DE ESTUDIANTES =====`);
    console.log(`1. Agregar estudiante`);
    console.log(`2. Actualizar estudiante`);
    console.log(`3. Eliminar estudiante`);
    console.log(`4. Listar estudiantes`);
    console.log(`5. Buscar estudiante por ID o nombre`);
    console.log(`6. Promedio de calificaciones por estudiante`);
    console.log(`7. Listar estudiantes con promedio mayor a un umbral`);
    console.log(`8. Aprobados y reprobados por materia`);
    console.log(`9. Promedio general del grupo`);
    console.log(`10. Promedio por área de estudio`);
    console.log(`11. Distribución de estudiantes por área`);
    console.log(`12. Promedio de cada materia por área`);
    console.log(`13. Ranking de estudiantes por promedio`);
    console.log(`14. Cantidad de aprobados y reprobados`);
    console.log(`15. Reporte de rendimiento académico`);
    console.log(`16. Salir`);
    
    rl.question("Seleccione una opción: ", (opcion) => {
        manejarOpcion(opcion);
    });
}

function manejarOpcion(opcion) {
    switch (opcion) {
        case "1":
            rl.question("Ingrese ID, Nombre, Edad, Área y Calificaciones (JSON): ", (data) => {
                const { id, nombre, edad, area, calificaciones } = JSON.parse(data);
                agregarEstudiante(id, nombre, edad, area, calificaciones);
                console.log("Estudiante agregado con éxito.");
                mostrarMenu();
            });
            break;
        case "2":
            rl.question("Ingrese ID del estudiante y los nuevos datos (JSON): ", (data) => {
                const { id, nuevosDatos } = JSON.parse(data);
                actualizarEstudiante(id, nuevosDatos);
                console.log("Estudiante actualizado.");
                mostrarMenu();
            });
            break;
        case "3":
            rl.question("Ingrese el ID del estudiante a eliminar: ", (id) => {
                eliminarEstudiante(parseInt(id));
                console.log("Estudiante eliminado.");
                mostrarMenu();
            });
            break;
        case "4":
            console.log(listarEstudiantes());
            mostrarMenu();
            break;
        case "5":
            rl.question("Ingrese ID o nombre: ", (idONombre) => {
                console.log(buscarEstudiante(idONombre));
                mostrarMenu();
            });
            break;
        case "6":
            console.log(calcularPromedioEstudiante());
            mostrarMenu();
            break;
        case "7":
            rl.question("Ingrese el umbral de promedio: ", (umbral) => {
                console.log(estudiantesConPromedioMayorA(parseFloat(umbral)));
                mostrarMenu();
            });
            break;
        case "8":
            rl.question("Ingrese la materia: ", (materia) => {
                console.log(estudiantesAprobadosYReprobados(materia));
                mostrarMenu();
            });
            break;
        case "9":
            console.log(promedioGeneralGrupo());
            mostrarMenu();
            break;
        case "10":
            rl.question("Ingrese el área de estudio (o vacío para todas): ", (area) => {
                console.log(promedioGeneralPorArea(area || null));
                mostrarMenu();
            });
            break;
        case "11":
            console.log(distribucionPorArea());
            mostrarMenu();
            break;
        case "12":
            console.log(promedioMateriasPorArea());
            mostrarMenu();
            break;
        case "13":
            console.log(rankingEstudiantes());
            mostrarMenu();
            break;
        case "14":
            console.log(cantidadAprobadosReprobados());
            mostrarMenu();
            break;
        case "15":
            console.log(reporteRendimientoAcademico());
            mostrarMenu();
            break;
        case "16":
            console.log("Saliendo del sistema...");
            rl.close();
            break;
        default:
            console.log("Opción no válida.");
            mostrarMenu();
    }
}

// Iniciar el programa
mostrarMenu();
