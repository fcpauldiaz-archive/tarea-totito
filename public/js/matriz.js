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
	//verificar ganador
	for (i = 0; i < this.matrix.length ; i++) {
		for (j = 0; j < this.matrix[i].length; j++){
			
			var tipo = this.matrix[i][j];
			if (tipo != -1){
				console.log('entra');
				console.log(tipo);
				console.log(tipoVerificador);
				if ((i == last || j == last) && tipo == tipoVerificador) {
					contador++;
				}
				if (contador == 3){
					alert('gano');
					contador = 0;
				}
				if (last != i) {
					last = i;
				}
				tipoVerificador = tipo;
			}

			//console.log(this.matrix[i][j]);
		}
	}
	console.log(this.matrix);
}
Matriz.prototype.insertarCambio = function(cambio, posicion) {
	posicion = posicion.substring(5);
	
	switch(posicion) {
		case "1":
			this.matrix[0][0] = cambio;
			break;
		case "2":
			this.matrix[0][1] = cambio;
			break;
		case "3":
			this.matrix[0][2] = cambio;
			break;
		case "4":
			this.matrix[1][0] = cambio;
			break;
		case "5":
			this.matrix[1][1] = cambio;
			break;
		case "6":
			this.matrix[1][2] = cambio;
			break;
		case "7":
			this.matrix[2][0] = cambio;
			break;
		case "8":
			this.matrix[2][1] = cambio;
			break;
		case "9":
			this.matrix[2][2] = cambio;
			break;
	}
}

