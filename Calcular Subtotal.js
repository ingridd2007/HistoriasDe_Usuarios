// ===============================
// Calcular Subtotal de una Venta
// ===============================

// Productos cargados en la venta
let productos = [
    {
        nombre: "Notebook",
        cantidad: 2,
        precioUnitario: 350000
    },
    {
        nombre: "Mouse",
        cantidad: 3,
        precioUnitario: 15000
    }
];

// Variable subtotal
let subtotal = 0;

// Recorrer productos y calcular subtotal
for (let i = 0; i < productos.length; i++) {

    let producto = productos[i];

    let totalProducto = producto.cantidad * producto.precioUnitario;

    subtotal = subtotal + totalProducto;
}

// Mostrar subtotal
console.log("Subtotal de la venta: $" + subtotal);