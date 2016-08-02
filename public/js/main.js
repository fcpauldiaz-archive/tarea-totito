window.onload = function(){
	
	var gridChanges = false; //empieza con el equis
	var matriz = new Matriz();
	var symbol = document.getElementById("player-symbol");
	var number = document.getElementById("player-number");

	function changeImage() {

	   	var posicion = this.getAttribute("id");
	   	var element = document.getElementById(posicion);
		if (gridChanges === true) {
	   		element.innerHTML = '<div class="inner-cell-o">O</div>';
	   		gridChanges = false;
	   		var estado = jugador.cambiarEstado(number, symbol);
	   		matriz.insertarCambio(estado, posicion);
	   	}
	   	else {
	  		element.innerHTML = '<div class="inner-cell-x">X</div>';
	  		gridChanges = true; 	
	  		var estado = jugador.cambiarEstado(number, symbol);
	  		matriz.insertarCambio(estado, posicion);
	   	}
	  
	}

	function verificarGanador() {
		var ganador = matriz.verificarGanador();
		//Gana jugador 1
		if (ganador == 'equis') {
			document.getElementsByClassName("new-game")[0].classList.remove("hide");
			document.getElementsByClassName("alert")[0].classList.remove("hide");
			document.getElementsByClassName("player")[0].classList.add("hide");
			document.getElementsByClassName("alert")[0].innerHTML = 'El <strong>jugador 1</strong> ha ganado!'

		}
		//gana jugador 2
		if (ganador == 'circulo') {
			document.getElementsByClassName("new-game")[0].classList.remove("hide");
			document.getElementsByClassName("alert")[0].classList.remove("hide");
			document.getElementsByClassName("player")[0].classList.add("hide");
			document.getElementsByClassName("alert")[0].innerHTML = 'El <strong>jugador 2</strong> ha ganado!'

		}
	}

	//sirve para poner el evento en todas las celdas.
	var classname = document.getElementsByClassName("cell");
	for (var i = 0; i < classname.length; i++) {
	    classname[i].addEventListener('click', changeImage, false);
	    classname[i].addEventListener('click', verificarGanador, false);
	}
	//botón de reset
	document.getElementById("new-game-button").addEventListener('click', function (){
		location.reload();
	})	
}