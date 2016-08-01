var jugador = {
	//valores iniciales
	numero: "1",
	symbolo: "equis",
	//función para cambiar de jugador
	cambiarEstado: function() {
		var number = document.getElementById("player-number");
		var symbol = document.getElementById("player-symbol");
		if (this.numero == "1"){
			console.log('cambia');
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
		
	}
}