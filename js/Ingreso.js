class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion,valor){
        super(descripcion,valor)
        this._id = ++Ingreso.contadorIngresos;
        this._descripcion = descripcion;
        this._valor = valor;
    }
    get id(){
        return this._id;
    }
} 