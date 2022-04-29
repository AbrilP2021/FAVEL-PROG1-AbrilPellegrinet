class creditos extends Phaser.Scene 
{
    constructor() {
        super('Creditos')
    }
    preload(){
        
        this.load.image('FondoC', './Assets/FondoSolo.png');
        this.load.image('FondoCre', './Assets/FondoCreditos.png');
        this.load.image('BotonM', './Assets/BotonMenu.png');


    }
    create(){
        
        //this.add.image(0,0, 'FondoC').setOrigin(0).setScale(.5);
        this.add.image(0, 0, 'FondoCre').setOrigin(0).setScale(.5);
        var botonmenu = this.add.image(700, 650, 'BotonM').setScale(.4)
        botonmenu.setInteractive()
        botonmenu.on('pointerdown', () => this.scene.start('Menu') );
    
        
    }

}

