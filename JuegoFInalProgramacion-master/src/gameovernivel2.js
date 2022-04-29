class gameovernivel2 extends Phaser.Scene {
    constructor(){
        super('gameovernivel')
    }
    preload(){
        this.load.image('perdiste', './Assets/tecontagiaste.png');
        this.load.image('BotonR', './Assets/BotonReinicio.png');
        this.load.image('BotonMe', './Assets/BotonMenu.png');

    }
    create()
    {
        this.add.image(0, 0, 'perdiste').setOrigin(0).setScale(.5);
        var botonreinicio = this.add.image(700, 400, 'BotonR').setScale(.4)
        botonreinicio.setInteractive()
        botonreinicio.on('pointerdown', () => this.scene.start('Nivel2'));
        var botonmenucito = this.add.image(700, 550, 'BotonMe').setScale(.4)
        botonmenucito.setInteractive()
        botonmenucito.on('pointerdown', () => this.scene.start('Menu'));  

    }
}