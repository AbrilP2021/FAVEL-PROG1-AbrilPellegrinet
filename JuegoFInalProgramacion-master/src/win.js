class win extends Phaser.Scene 
{
    constructor() {
        super("Ganador")
    }
    preload()
    {
        this.load.image('FondoWin', './Assets/tesalvaste.png');
        this.load.image('BotonS', './Assets/BotonSiguiente.png');
        this.load.image('BotonM', './Assets/BotonMenu.png');

    }
    create()
    {
        
        this.add.image(0, 0, 'FondoWin').setOrigin(0).setScale(.5);
        var botonsiguiente = this.add.image(700, 400, 'BotonS').setScale(.4);
        botonsiguiente.setInteractive();
        botonsiguiente.on('pointerdown', () => this.scene.start('tutonivel'));

        var botonmenu2 = this.add.image(700, 550, 'BotonM').setScale(.4);
        botonmenu2.setInteractive();
        botonmenu2.on('pointerdown', () => this.scene.start('Menu'));


    }

}