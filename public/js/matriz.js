var Matriz = function() {
	//valores iniciales
	this.matrix = [
		[-1, -1, -1],
		[-1, -1, -1],
		[-1, -1, -1],
	];
}
Matriz.prototype.verificarGanador = function() {
	var tipoVerificador = '';
	var contador = 0;
	var last = -1;
	var ganador = '';
	var ganadorReal = false;
	//verificar ganador
	//Primera pasada para verificar horizontal
	for (i = 0; i < this.matrix.length ; i++) {
		for (j = 0; j < this.matrix[i].length; j++){
			
			var tipo = this.matrix[i][j];
			if (tipo != -1){
				if (tipo == tipoVerificador || tipoVerificador == '') {
					contador++;
					tipoVerificador = tipo;
				}
				else {
					tipoVerificador = 'not';
				}
				if (contador == 3){
					ganador = tipo;
					contador = 0;
				}

			}
			
			if (Number.isInteger(tipo)) {
				ganadorReal = true;
			}
		}
		contador = 0;
		tipoVerificador = '';
	}
	//segunda pasada para verificar verticales
	for (i = 0; i < this.matrix.length ; i++) {
		for (j = 0; j < this.matrix[i].length; j++){
			
			var tipo = this.matrix[j][i];
			if (tipo != -1){
				if (tipo == tipoVerificador || tipoVerificador == '') {
					contador++;
					tipoVerificador = tipo;
				}
				else {
					tipoVerificador = 'not';
				}
				if (contador == 3){
					ganador = tipo;
					contador = 0;
				}	
			}
		}
		contador = 0;
		tipoVerificador = '';
	}
	//tercero: verficar diagonales
	if ((this.matrix[0][0] == 'equis' &&
		this.matrix[1][1] == 'equis' &&
		this.matrix[2][2] == 'equis')
		)
	{
		ganador = 'equis';
	}
	if (
		this.matrix[0][0] == 'circulo' &&
		this.matrix[1][1] == 'circulo' &&
		this.matrix[2][2] == 'circulo'
		)
	{
		ganador = 'circulo';
	}

	if (
		this.matrix[2][0] == 'equis' &&
		this.matrix[1][1] == 'equis' &&
		this.matrix[0][2] == 'equis'
	   )
	{
		ganador = 'equis';
	}
	if (
		this.matrix[2][0] == 'circulo' &&
		this.matrix[1][1] == 'circulo' &&
		this.matrix[0][2] == 'circulo'
		)
	{
		ganador = 'circulo';
	}

	if (!ganadorReal && ganador != 'circulo' && ganador != 'equis') {
		ganador = 'ninguno';
	}

	return ganador;

}
Matriz.prototype.insertarCambio = function(cambio, posicion) {
	posicion = posicion.substring(5);
	var contador = 1;
	for (i = 0; i < this.matrix.length ; i++) {
		for (j = 0; j < this.matrix[i].length; j++) {
			if (contador == posicion) {
				this.matrix[i][j] = cambio;
			}
			contador++;
		}
	}
}
Matriz.prototype.getMatrix = function() {
	return this.matrix;
}

