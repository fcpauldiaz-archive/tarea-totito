//funcion para cambiar de tipo de reloj
function cambiarReloj() {
	
	var reloj = document.getElementById("reloj-analogo");
	
	if (reloj.style.visibility == "hidden") {
		reloj.style.visibility = 'visible';
		var relojDigital = document.getElementById("reloj-digital");
		relojDigital.style.visibility = "hidden";
		relojDigital.style.fontSize = "small";
	}
	else {
		document.getElementById("reloj-analogo").style.visibility = "hidden";
		var relojDigital = document.getElementById("reloj-digital");
		relojDigital.style.visibility = "visible";
		relojDigital.style.fontSize = "xx-large";

	}
}
window.onload = function(){
function relojFuncional() {
	//utilizar hora actual
    var date = new Date;
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hours = date.getHours();

    console.log(hours, minutes, seconds);

	// angulo horas
	var anguloHoras = (hours * 30) + (minutes / 2);
	var anguloMinutos = (minutes * 6);
	var anguloSegundos = (seconds * 6);

	var digital = document.getElementById('reloj-digital');
	digital.innerHTML = '<h1>' + hours + ' : ' + minutes + ' : ' + seconds + '</h1>';

	//Seleccionar elementos
    var hora = document.getElementsByClassName('hours')[0];
    var minutos = document.getElementsByClassName('minutes')[0];
    var segundos = document.getElementsByClassName('seconds')[0];
    //Rotar las manecillas
    segundos.style.transform = 'rotateZ('+anguloSegundos  +'deg)';
   	minutos.style.transform = 'rotateZ('+anguloMinutos +'deg)';
    hora.style.transform = 'rotateZ('+anguloHoras+'deg)';
  
   setTimeout(relojFuncional, 1000);
}
relojFuncional();
}