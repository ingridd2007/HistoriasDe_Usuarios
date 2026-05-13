// Productos del inventario
let inventario = [
    {
        id: 1,
        nombre: "Mouse",
        stock: 10
    },
    {
        id: 2,
        nombre: "Teclado",
        stock: 5
    }
];

// Historial de compras
let historialCompras = [];

// Usuario responsable
let usuario = "Juan Perez";

// Función para registrar compra
function registrarCompra(idProducto, cantidadComprada) {

    // Buscar producto
    let producto = inventario.find(p => p.id === idProducto);

    // Validar producto
    if (!producto) {
        console.log("Producto no encontrado");
        return;
    }

    // Actualizar stock
    producto.stock += cantidadComprada;

    // Registrar compra
    let compra = {
        producto: producto.nombre,
        cantidad: cantidadComprada,
        fecha: new Date(),
        usuarioResponsable: usuario
    };

    // Guardar en historial
    historialCompras.push(compra);

    // Mostrar información
    console.log("COMPRA REGISTRADA");
    console.log(compra);

    console.log("Stock actualizado:");
    console.log(producto.stock);
}

// Prueba
registrarCompra(1, 20);

console.log("Inventario:");
console.log(inventario);

console.log("Historial de compras:");
console.log(historialCompras);