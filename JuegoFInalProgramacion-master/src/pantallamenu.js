//import { CST } from "../CST";
class pantallamenu extends Phaser.Scene 
{
    constructor() {
        super("Menu")
    }
 
    preload(){
        this.load.audio('boton', './Assets/Musica/botones.mp3');
        this.load.audio('musical', './Assets/Musica/musiquuita.wav');
        this.load.image('FondoM', './Assets/FondoMenu.png');
        this.load.image('BotonJ', './Assets/BotonJugar.png');
        this.load.image('BotonI', './Assets/BotonInfo.png');
        this.load.image('BotonN2', './Assets/BotonReinicio.png');

    }
    create(){
        var sonidoboton = this.sound.add('boton');
        this.musicaloca = this.sound.add('musical',{
            loop: true 

        });
    
        this.add.image(0, 0, 'FondoM').setOrigin(0).setScale(0.5);
        var botonjugar = this.add.image(700, 400, 'BotonJ').setScale(.4)
        botonjugar.setInteractive()
        botonjugar.on('pointerdown', () => this.scene.start('TutorialJuego') );
        this.musicaloca.play();
        
        var botoninfo = this.add.image(700, 550, 'BotonI').setScale(.4)
        //botoninfo.setScale(.4)
        botoninfo.setInteractive()
        botoninfo.on('pointerdown', () => this.scene.start('Creditos') );

        
        
    }
 
}



