class tutorial extends Phaser.Scene {
    constructor() 
    {
        super('TutorialJuego')
    }
    preload(){
        this.load.image('FondoTuto', './Assets/TutorialN1.png');
        

    }
    create(){
        this.add.image(0, 0, 'FondoTuto').setOrigin(0).setScale(.5);
        var botontuto = this.add.image(1150, 100, 'BotonJ').setScale(.4)
        botontuto.setInteractive()
        botontuto.on('pointerdown', () => this.scene.start('N1') );

    }
}