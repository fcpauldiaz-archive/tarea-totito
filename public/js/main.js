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
	}

	//sirve para poner el evento en todas las celdas.
	var classname = document.getElementsByClassName("cell");
	for (var i = 0; i < classname.length; i++) {
	    classname[i].addEventListener('click', changeImage, false);
	    classname[i].addEventListener('click', verificarGanador, false);
	}	
}