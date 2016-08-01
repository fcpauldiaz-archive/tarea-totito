window.onload = function(){
	
	var gridChanges = false; //empieza con el equis
	var matriz = new Matriz();
	
	function changeImage() {
		
	   	var posicion = this.getAttribute("id");
	   	var element = document.getElementById(posicion);
		if (gridChanges === true) {
	   		element.innerHTML = '<img id="cir" src="img/circulo.png">';
	   		gridChanges = false;
	   		var estado = jugador.cambiarEstado();
	   		matriz.insertarCambio(estado, posicion);
	   	}
	   	else {
	  		element.innerHTML = '<img id="eq" src="img/equis.png">';
	  		gridChanges = true; 	
	  		var estado = jugador.cambiarEstado();
	  		matriz.insertarCambio(estado, posicion);
	   	}
	  
	}
	function verificarJuego() {

	}

	//sirve para poner el evento en todas las celdas.
	var classname = document.getElementsByClassName("cell");
	for (var i = 0; i < classname.length; i++) {
	    classname[i].addEventListener('click', changeImage, false);
	    classname[i].addEventListener('click', verificarJuego, false);
	}
}