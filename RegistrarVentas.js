// Productos disponibles
let productos = [
    {
        id: 1,
        nombre: "Mouse",
        precio: 10000,
        stock: 10
    },
    {
        id: 2,
        nombre: "Teclado",
        precio: 15000,
        stock: 5
    }
];

// Historial de ventas
let historialVentas = [];

// Función para registrar venta
function registrarVenta(idProducto, cantidad) {

    // Buscar producto
    let producto = productos.find(p => p.id === idProducto);

    // Validar existencia
    if (!producto) {
        console.log("Producto no encontrado");
        return;
    }

    // Validar stock
    if (cantidad > producto.stock) {
        console.log("Stock insuficiente");
        return;
    }

    // Calcular subtotal
    let subtotal = producto.precio * cantidad;

    // Impuesto (21%)
    let impuestos = subtotal * 0.21;

    // Total final
    let total = subtotal + impuestos;

    // Actualizar stock
    producto.stock -= cantidad;

    // Generar factura
    let factura = {
        producto: producto.nombre,
        cantidad: cantidad,
        subtotal: subtotal,
        impuestos: impuestos,
        total: total,
        fecha: new Date()
    };

    // Guardar en historial
    historialVentas.push(factura);

    // Mostrar factura
    console.log("FACTURA");
    console.log(factura);
}

// Prueba
registrarVenta(1, 2);

console.log("Stock actualizado:");
console.log(productos);

console.log("Historial de ventas:");
console.log(historialVentas);