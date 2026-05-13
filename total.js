// ===============================
// CALCULAR TOTAL
// ===============================

function calcularTotal(subtotal, impuestos) {

    let total = subtotal + impuestos;

    console.log("\n==============================");
    console.log("      CALCULAR TOTAL");
    console.log("==============================");
    console.log("Subtotal: $", subtotal);
    console.log("Impuestos: $", impuestos);
    console.log("TOTAL FINAL: $", total);
    console.log("==============================");

    return total;
}

module.exports = { calcularTotal };