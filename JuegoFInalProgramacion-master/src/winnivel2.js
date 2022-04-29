class winnivel2 extends Phaser.Scene {
    constructor(){
        super('winnivel')
    }
    preload(){
        this.load.image('ganaste', './Assets/tesalvaste.png');
        this.load.image('botonseguir', './Assets/BotonSiguiente.png');

    }
    create(){

        this.add.image(0, 0, 'ganaste').setOrigin(0).setScale(.5);
        var botonseguir = this.add.image(700, 500, 'botonseguir').setScale(.4)
        botonseguir.setInteractive()
        botonseguir.on('pointerdown', () => this.scene.start('Menu'));


    }
}