var figura = function (tipo, lugar) {
	this.tipo = tipo;
	this.lugar = lugar;
	this.imagen;

	figura.prototype.getTipo = function (){
		return this.tipo;
	}
	//método para regresar la imagen dependiendo del tipo
	function.prototype.getImagen = function() {
		if (this.tipo === 'equis') {
			return 'img/equis.png';
		}
		if (this.tipo === 'circulo') {
			return 'img/circulo.png';
		}
		//de otra forma hay error
	}

	figura.prototype.getLugar = function() {
		return this.lugar;
	}
}