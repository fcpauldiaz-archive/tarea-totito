function init() {
	var viewport  = document.getElementById("viewport");
	viewport.innerHTML = `
		<div class="alert hide">
      <span class="closebtn">&times;</span>
    
    </div>
    <button class="new-game hide" id="new-game-button">Nuevo Juego</button>
    <div class="grid">
        <div class="row">
            <div class="cell" id="cell-1"></div>
            <div class="cell" id="cell-2"></div>
            <div class="cell" id="cell-3"></div>
        </div>
        <div class="row">
            <div class="cell" id="cell-4"></div>
            <div class="cell" id="cell-5"></div>
            <div class="cell" id="cell-6"></div>
        </div>
        <div class="row">
            <div class="cell" id="cell-7"></div>
            <div class="cell" id="cell-8"></div>
            <div class="cell" id="cell-9"></div>
        </div>
    </div>
        <div class="player">
            <h1>Turno</h1>
            <h1>Jugador: #<span id="player-number">1</span></h1>
            <h1>Figura: <span id="player-symbol">Equis</span></h1>
        </div>`;

}