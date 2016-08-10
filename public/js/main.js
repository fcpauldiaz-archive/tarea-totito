//inicializar grid
init();
window.onload = function(){
	
	var gridChanges = false; //empieza con el equis
	var matriz = new Matriz();
	var symbol = document.getElementById("player-symbol");
	var number = document.getElementById("player-number");
	//Estado inicial empieza con X (equis)
	var estado = {
		numero: "1",
		symbol: "equis"
	}
	function main() {
		estado.symbol = render(estado, this);
		verificarGanador();
	}

	function render(state, context) {
	   	var posicion = context.getAttribute("id");
	   	var element = document.getElementById(posicion);
		if (state.symbol == "circulo") {
	   		element.innerHTML = '<div class="inner-cell-o">O</div>';
	   		newSymbol = "equis";
	   		number.innerHTML = "1";
	   		symbol.innerHTML = "Equis";
	   		matriz.insertarCambio("circulo", posicion);
	   	}
	   	else {
	  		element.innerHTML = '<div class="inner-cell-x">X</div>';
	  		newSymbol = "circulo"; 	
	  		number.innerHTML = "2";
	  		symbol.innerHTML = "Círculo"
	  		matriz.insertarCambio("equis", posicion);
	   	}
	   	return newSymbol;
	}

	function verificarGanador() {
		var ganador = matriz.verificarGanador();
		//Gana jugador 1
		if (ganador == 'equis') {
			document.getElementsByClassName("new-game")[0].classList.remove("hide");
			document.getElementsByClassName("alert")[0].classList.remove("hide");
			document.getElementsByClassName("player")[0].classList.add("hide");
			document.getElementsByClassName("alert")[0].innerHTML = 'El <strong>jugador 1</strong> ha ganado!';
			
		}
		//gana jugador 2
		if (ganador == 'circulo') {
			document.getElementsByClassName("new-game")[0].classList.remove("hide");
			document.getElementsByClassName("alert")[0].classList.remove("hide");
			document.getElementsByClassName("player")[0].classList.add("hide");
			document.getElementsByClassName("alert")[0].innerHTML = 'El <strong>jugador 2</strong> ha ganado!';
		}
		if (ganador == 'ninguno') {
			document.getElementsByClassName("new-game")[0].classList.remove("hide");
			document.getElementsByClassName("alert")[0].classList.remove("hide");
			document.getElementsByClassName("player")[0].classList.add("hide");
			document.getElementsByClassName("alert")[0].innerHTML = '<strong>Ningún</strong> jugador ganado!';
		}
	}
	//sirve para poner el evento en todas las celdas.
	var classname = document.getElementsByClassName("cell");
	for (var i = 0; i < classname.length; i++) {
	    classname[i].addEventListener('click', main, false);
	}
	//botón de reset
	document.getElementById("new-game-button").addEventListener('click', function (){
		location.reload();
	})	
}