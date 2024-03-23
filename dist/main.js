"use strict";

var _clientesModule = _interopRequireDefault(require("./clientes.module.js"));
var _impuestosModule = _interopRequireDefault(require("./impuestos.module.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Importar las clases Cliente e Impuesto desde los archivos de módulos

function imprimirInformacionCliente(cliente) {
  console.log("Información del cliente:");
  console.log("Nombre:", cliente.nombre);
  console.log("Impuesto:", cliente.impuesto);
}

// instancias cte 1
var impuestoCliente1 = new _impuestosModule["default"](40000, 2000);
var cliente1 = new _clientesModule["default"]("Arturo", impuestoCliente1);
imprimirInformacionCliente(cliente1);

// Calcular impuesto cliente1
var impuestoCalculadoCliente1 = cliente1.calcularImpuesto();
console.log("Impuesto calculado para cliente1:", impuestoCalculadoCliente1);
imprimirInformacionCliente(cliente1);

// instancias cte 2
var impuestoCliente2 = new _impuestosModule["default"](40000, 2000);
var cliente2 = new _clientesModule["default"]("Tomás", impuestoCliente2);
imprimirInformacionCliente(cliente2);

// Calcular impuesto cliente2
var impuestoCalculadoCliente2 = cliente2.calcularImpuesto();
console.log("Impuesto calculado para cliente2:", impuestoCalculadoCliente2);
imprimirInformacionCliente(cliente2);