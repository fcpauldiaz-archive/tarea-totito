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
					alert('gano');
					contador = 0;
				}
				
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
					alert('gano');
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
		this.matrix[2][2] == 'equis')||
		this.matrix[0][0] == 'circulo' &&
		this.matrix[1][1] == 'circulo' &&
		this.matrix[2][2] == 'circulo'
		)
	{
		alert('gano');
	}

	if ((this.matrix[2][0] == 'equis' &&
		this.matrix[1][1] == 'equis' &&
		this.matrix[0][2] == 'equis')||
		this.matrix[2][0] == 'circulo' &&
		this.matrix[1][1] == 'circulo' &&
		this.matrix[0][2] == 'circulo'
		)
	{
		alert('gano');
	}

	

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

