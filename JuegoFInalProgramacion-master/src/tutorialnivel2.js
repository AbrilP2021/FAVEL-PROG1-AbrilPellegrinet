class tutorialnivel2 extends Phaser.Scene{
    constructor(){
        super('tutonivel')
    }
    preload(){
        this.load.image('tuto2', './Assets/TutorialN2.png');
        this.load.image('BotonJ', './Assets/BotonJugar.png');

    }
    create(){
        this.add.image(0, 0, 'tuto2').setOrigin(0).setScale(.5);
        var botonjugar = this.add.image(1150, 100, 'BotonJ').setScale(.4)
        botonjugar.setInteractive()
        botonjugar.on('pointerdown', () => this.scene.start('Nivel2') );

    }
}