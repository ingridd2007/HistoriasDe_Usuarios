// ===============================
// SISTEMA DE GESTIÓN COMERCIAL
// Archivo Principal
// ===============================

const readline = require('readline-sync');

// IMPORTAR MÓDULOS
const ventas = require('./ventas');
const compras = require('./compras');
const stock = require('./stock');
const reportes = require('./reportes');

// ===============================
// MENÚ PRINCIPAL
// ===============================

function mostrarMenu() {

    console.log("\n==================================");
    console.log("   SISTEMA DE GESTIÓN COMERCIAL");
    console.log("==================================");
    console.log("1. Gestionar Ventas");
    console.log("2. Gestionar Compras");
    console.log("3. Administrar Stock");
    console.log("4. Generar Reportes");
    console.log("5. Salir");
    console.log("==================================");

}

// ===============================
// PROGRAMA PRINCIPAL
// ===============================

let opcion;

do {

    mostrarMenu();

    opcion = readline.question("Seleccione una opcion: ");

    switch(opcion) {

        case "1":
            ventas.registrarVenta();
            break;

        case "2":
            compras.registrarCompra();
            break;

        case "3":
            stock.mostrarStock();
            break;

        case "4":
            reportes.generarReportes();
            break;

        case "5":
            console.log("\nSaliendo del sistema...");
            break;

        default:
            console.log("\nOpcion invalida.");
    }

} while(opcion !== "5");