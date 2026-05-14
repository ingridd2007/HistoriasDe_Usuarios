// Función para calcular el impuesto de una venta

function calcularImpuesto(subtotal, porcentajeImpuesto) {
    
    // Validar que los valores sean correctos
    if (subtotal < 0 || porcentajeImpuesto < 0) {
        return "Error: los valores no pueden ser negativos";
    }

    // Calcular impuesto
    let impuesto = subtotal * (porcentajeImpuesto / 100);

    // Mostrar resultado con 2 decimales
    return impuesto.toFixed(2);
}


// Ejemplo de uso
let subtotal = 25000;
let porcentajeIVA = 21;

let impuestoCalculado = calcularImpuesto(subtotal, porcentajeIVA);

console.log("Subtotal: $" + subtotal);
console.log("Impuesto (" + porcentajeIVA + "%): $" + impuestoCalculado);