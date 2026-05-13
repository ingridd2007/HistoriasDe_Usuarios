# HistoriasDe_Usuarios 06/05/2026
Integrantes:
- Torres Ingrid
- Rojas Teo
- Flores Bautista
- Juarez Joaquin

## Materia: Introducción al análisis sistémico - Alfabetización digital ## 

Profesor: Narciso Perez

Historias de Usuario – Sistema de Gestión Comercial

Historia de Usuario 1 – Registrar Venta
Historia

COMO vendedor
QUIERO registrar una venta de productos
PARA llevar el control de las operaciones comerciales y generar facturas automáticamente.

Criterios de Aceptación
DADO que el vendedor inició sesión en el sistema
CUANDO ingrese los productos vendidos y cantidades
ENTONCES el sistema deberá calcular el subtotal, impuestos y total de la venta.
DADO que la venta fue confirmada
CUANDO se genere la factura
ENTONCES el stock deberá actualizarse automáticamente.

Historia de Usuario 2 – Registrar Compra
Historia

COMO encargado de compras
QUIERO registrar compras de mercadería
PARA mantener actualizado el inventario del negocio.

Criterios de Aceptación
DADO que el usuario ingrese los datos de la compra
CUANDO confirme la operación
ENTONCES el sistema deberá guardar la compra en la base de datos.
DADO que una compra fue registrada
CUANDO el proceso finalice
ENTONCES el stock de los productos deberá incrementarse automáticamente.

Historia de Usuario 3 – Administrar Stock
Historia

COMO administrador
QUIERO visualizar y modificar el stock de productos
PARA controlar la disponibilidad de mercadería.

Criterios de Aceptación
DADO que el administrador consulte un producto
CUANDO acceda al módulo de stock
ENTONCES el sistema deberá mostrar la cantidad disponible.
DADO que el stock llegue al mínimo establecido
CUANDO el sistema detecte poca disponibilidad
ENTONCES deberá emitir una alerta de reposición.

Historia de Usuario 4 – Generar Factura
Historia

COMO vendedor
QUIERO generar una factura automática
PARA entregar un comprobante válido al cliente.

Criterios de Aceptación
DADO que la venta esté cargada
CUANDO el usuario confirme la operación
ENTONCES el sistema deberá generar una factura con cabecera, detalle y pie del documento.
DADO que exista una factura generada
CUANDO el usuario la consulte
ENTONCES el sistema deberá mostrar productos, precios, impuestos y total final.

Historia de Usuario 5 – Calcular Subtotal
Historia

COMO sistema
QUIERO calcular automáticamente el subtotal de una venta
PARA evitar errores manuales en los cálculos.

Criterios de Aceptación
DADO que existan productos cargados en la venta
CUANDO se multiplique cantidad por precio unitario
ENTONCES el sistema deberá calcular el subtotal correctamente.

Historia de Usuario 6 – Calcular Impuestos
Historia

COMO sistema
QUIERO calcular los impuestos correspondientes
PARA obtener el monto real de la factura.

Criterios de Aceptación
DADO que exista un subtotal calculado
CUANDO se aplique el porcentaje de impuestos
ENTONCES el sistema deberá mostrar el valor del impuesto calculado.

Historia de Usuario 7 – Calcular Total
Historia

COMO sistema
QUIERO calcular el total final de la operación
PARA mostrar el importe final al cliente.

Criterios de Aceptación
DADO que exista subtotal e impuestos calculados
CUANDO el sistema procese la venta
ENTONCES deberá mostrar el total final de la factura.
Historia de Usuario 8 – Generar Reportes
Historia

COMO administrador
QUIERO generar reportes de ventas, compras y stock
PARA analizar el rendimiento del negocio.

Criterios de Aceptación
DADO que existan operaciones registradas
CUANDO el administrador solicite un reporte
ENTONCES el sistema deberá mostrar la información organizada por fecha.
DADO que el reporte sea generado
CUANDO el usuario lo consulte
ENTONCES el sistema deberá incluir totales de ventas, compras y productos en stock.
