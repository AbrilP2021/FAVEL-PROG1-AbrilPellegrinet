//import {MENU} from "./src/scenes/menu";
//import {TUTORIAL} from "./src/scenes/tutorial";
//let game;

var gameConfig = {
    type: Phaser.AUTO,
    scale: 
    {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "thegame",
        width: 1366,
        height: 768
      
    },
    scene: [pantallamenu, creditos, tutorial, nivel1, nivel2, gameover, win, winnivel2, gameovernivel2, tutorialnivel2],

    // physics settings
    physics: 
    {
        default: "arcade",
        arcade: {
            gravity: {
                y: 450
            },
            debug: false
        }
    }
}
var game = new Phaser.Game(gameConfig);
window.focus();
var cursors;
var player;
var platform;
var brillo;
var puntos = 0;
var textopuntos;
var enemigos;
var gameOver;
var TiempoInicial;
var TimeEvent;
var timeText;
var vidaJugador = 3;
var textoVidaJugador;

//var live;
var inflapts;
var relojtiempo;
var TimeReloj;
var ganarCasita;
var ganaste;
var powerup2;
var plataformados;
var enemigos2;
var enemigos3;
var tween;
var puntosnivel = 0;
var textopuntosnivel;
//SONIDOS
var sonidosalto;
var recogerbrillo;
var sonidomuerte;
var dañado;
var superganador;
var musicaloca;