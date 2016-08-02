//objeto jugador
var jugador = {
	//valores iniciales
	numero: "1",
	symbol: "equis",
	//función para cambiar de jugador
	cambiarEstado: function(number, symbol) {
		if (this.numero == "1"){
			number.innerHTML = "2";
			symbol.innerHTML = "Círculo";
			this.numero = "2";
			//devuelve el estado anterior;
			return "equis";
		}
		if (this.numero == "2"){
			number.innerHTML = "1";
			symbol.innerHTML = "Equis";
			this.numero = "1";
			//devuelve el estado anterior;
			return "circulo";
		}
		//si llega aquí hay error.
		
	}
}