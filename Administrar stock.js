const inventario = [
    { id: 1, nombre: "Laptop Pro", stock: 15, umbralMinimo: 5 },
    { id: 2, nombre: "Mouse Inalámbrico", stock: 3, umbralMinimo: 10 }, // Generará alerta
    { id: 3, nombre: "Teclado Mecánico", stock: 8, umbralMinimo: 5 }
];
class GestorStock {
    constructor(productos) {
        this.productos = productos;
    }

    // Criterio 1: Visualizar cantidad disponible
    consultarStock(idProducto) {
        const producto = this.productos.find(p => p.id === idProducto);
        
        if (!producto) {
            return `Error: Producto con ID ${idProducto} no encontrado.`;
        }

        this.verificarAlerta(producto);
        return {
            nombre: producto.nombre,
            cantidad: producto.stock
        };
    }

    // Criterio 2: Modificar stock y emitir alerta
    actualizarStock(idProducto, nuevaCantidad) {
        const producto = this.productos.find(p => p.id === idProducto);
        
        if (producto) {
            producto.stock = nuevaCantidad;
            console.log(`✓ Stock actualizado: ${producto.nombre} ahora tiene ${producto.stock} unidades.`);
            this.verificarAlerta(producto);
        }
    }

    // Lógica de Alerta de Reposición
    verificarAlerta(producto) {
        if (producto.stock <= producto.umbralMinimo) {
            console.warn(`⚠️ ALERTA DE REPOSICIÓN: El producto "${producto.nombre}" tiene stock crítico (${producto.stock}).`);
        }
    }

    listarTodoElStock() {
        console.table(this.productos.map(p => ({
            ID: p.id,
            Producto: p.nombre,
            Stock: p.stock,
            Estado: p.stock <= p.umbralMinimo ? "REPONER" : "OK"
        })));
    }
}
const adminStock = new GestorStock(inventario);

// 1. Consultar un producto (Criterio: Mostrar cantidad disponible)
console.log("--- Consulta de Producto ---");
const info = adminStock.consultarStock(1);
console.log(`Producto: ${info.nombre} | Disponible: ${info.cantidad}`);

// 2. Modificar stock para disparar alerta (Criterio: Alerta de reposición)
console.log("\n--- Modificación de Stock ---");
adminStock.actualizarStock(3, 2); // Bajamos el stock de 8 a 2 (Umbral es 5)

// 3. Visualizar panel general
console.log("\n--- Panel de Control de Administrador ---");
adminStock.listarTodoElStock();
