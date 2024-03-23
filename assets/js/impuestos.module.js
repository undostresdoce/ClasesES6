export default class Impuestos {
  constructor(montoBrutoAnual, deducciones = 0) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }

  set montoBrutoAnual(nuevoMontoBrutoAnual) {
    this._montoBrutoAnual = nuevoMontoBrutoAnual;
  }

  get deducciones() {
    return this._deducciones;
  }

  set deducciones(nuevaDeduccion) {
    this._deducciones = nuevaDeduccion;
  }

  get impuestoTotal() {
    return this._montoBrutoAnual * 0.25 - this._deducciones;
  }
}
