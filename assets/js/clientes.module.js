export default class Clientes {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get impuesto() {
    return this._impuesto;
  }

  set impuesto(nuevoImpuesto) {
    this._impuesto = nuevoImpuesto;
  }

  calcularImpuesto() {
    if (this._impuesto) {
      return this._impuesto.montoBrutoAnual * 0.21 - this._impuesto.deducciones;
    } else {
      return "El cliente no tiene impuestos asignados.";
    }
  }
}
