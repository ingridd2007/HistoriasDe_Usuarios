const transacciones = [
    { tipo: 'venta', fecha: '2024-05-10', monto: 1500, producto: 'Teclado' },
    { tipo: 'compra', fecha: '2024-05-11', monto: 2000, producto: 'Monitores' },
    { tipo: 'venta', fecha: '2024-05-11', monto: 3000, producto: 'Laptop' },
    { tipo: 'compra', fecha: '2024-05-12', monto: 500, producto: 'Mouse' },
];

const stockActual = [
    { nombre: 'Laptop', cantidad: 5 },
    { nombre: 'Teclado', cantidad: 12 },
    { nombre: 'Mouse', cantidad: 20 }
];
class GeneradorReportes {
    constructor(operaciones, inventario) {
        this.operaciones = operaciones;
        this.inventario = inventario;
    }

    // Criterio 1: Información organizada por fecha
    obtenerOperacionesPorFecha() {
        return [...this.operaciones].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    }

    // Criterio 2: Totales de ventas, compras y productos en stock
    generarResumenEjecutivo() {
        const totales = this.operaciones.reduce((acc, op) => {
            if (op.tipo === 'venta') acc.totalVentas += op.monto;
            if (op.tipo === 'compra') acc.totalCompras += op.monto;
            return acc;
        }, { totalVentas: 0, totalCompras: 0 });

        const totalProductosStock = this.inventario.reduce((acc, item) => acc + item.cantidad, 0);

        return {
            ...totales,
            totalStock: totalProductosStock,
            balance: totales.totalVentas - totales.totalCompras
        };
    }

    mostrarReporte() {
        console.log("=== REPORTE DE RENDIMIENTO DEL NEGOCIO ===");
        
        console.log("\n--- Detalle Cronológico de Operaciones ---");
        const cronologico = this.obtenerOperacionesPorFecha();
        console.table(cronologico);

        const resumen = this.generarResumenEjecutivo();
        
        console.log("\n--- Resumen General (Totales) ---");
        console.log(`💰 Total Ventas:  $${resumen.totalVentas}`);
        console.log(`🛒 Total Compras: $${resumen.totalCompras}`);
        console.log(`📦 Unidades en Stock: ${resumen.totalStock}`);
        console.log(`📊 Balance Neto:   $${resumen.balance}`);
        console.log("------------------------------------------");
    }
}
const reporteAdmin = new GeneradorReportes(transacciones, stockActual);

// El administrador solicita el reporte
reporteAdmin.mostrarReporte();





