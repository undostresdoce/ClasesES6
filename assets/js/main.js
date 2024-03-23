// Importar las clases Cliente e Impuesto desde los archivos de módulos
import Cliente from "./clientes.module.js";
import Impuesto from "./impuestos.module.js";

function imprimirInformacionCliente(cliente) {
  console.log("Información del cliente:");
  console.log("Nombre:", cliente.nombre);
  console.log("Impuesto:", cliente.impuesto);
}

// instancias cte 1
const impuestoCliente1 = new Impuesto(40000, 2000);
const cliente1 = new Cliente("Arturo", impuestoCliente1);

imprimirInformacionCliente(cliente1);

// Calcular impuesto cliente1
const impuestoCalculadoCliente1 = cliente1.calcularImpuesto();
console.log("Impuesto calculado para cliente1:", impuestoCalculadoCliente1);

imprimirInformacionCliente(cliente1);

// instancias cte 2
const impuestoCliente2 = new Impuesto(40000, 2000);
const cliente2 = new Cliente("Tomás", impuestoCliente2);

imprimirInformacionCliente(cliente2);

// Calcular impuesto cliente2
const impuestoCalculadoCliente2 = cliente2.calcularImpuesto();
console.log("Impuesto calculado para cliente2:", impuestoCalculadoCliente2);

imprimirInformacionCliente(cliente2);
