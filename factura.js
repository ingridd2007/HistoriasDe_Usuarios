// ===============================
// GENERAR FACTURA
// ===============================

function generarFactura(producto, cantidad, precio) {

    let subtotal = cantidad * precio;
    let impuestos = subtotal * 0.21;
    let total = subtotal + impuestos;

    console.log("\n==============================");
    console.log("         FACTURA");
    console.log("==============================");
    console.log("Producto: ", producto);
    console.log("Cantidad: ", cantidad);
    console.log("Precio Unitario: $", precio);
    console.log("Subtotal: $", subtotal);
    console.log("Impuestos (21%): $", impuestos);
    console.log("Total: $", total);
    console.log("==============================");

}

module.exports = { generarFactura };