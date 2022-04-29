class nivel2 extends Phaser.Scene {
    constructor(){
        super('Nivel2')
    }
    preload(){
        this.load.audio('saltito', './Assets/Musica/salto.mp3');
        this.load.audio('sonidosbrillo', './Assets/Musica/recoger_brillo.mp3');
        this.load.audio('die', './Assets/Musica/muerte.mp3');
        this.load.audio('dañado', './Assets/Musica/daño.mp3');
        this.load.audio('winner', './Assets/Musica/ganador.mp3');

        this.load.image('Fondo2', './Assets/FondoNivel2.png');
        this.load.image('plataforma2', './Assets/plataformagrandenivel2.png');
        this.load.spritesheet('Jugador', './Assets/dude.png', { frameWidth: 32, frameHeight: 48});
        this.load.image('plataforma1', './Assets/plataforma1.png');
        this.load.image('Suelo2', './Assets/plataformapisonivel2.png');
        this.load.image('teclas', './Assets/controles.png');
        this.load.image('corazon', './Assets/vida.png');
        this.load.image('cronometro', './Assets/Tiempo.png');
        this.load.image('uipower', './Assets/uibrillos.png');
        this.load.image('power', './Assets/brillo.png');
        this.load.image('pinches1', './Assets/enemigo1.png');
        this.load.image('pinches2', './Assets/enemigo2.png');
        this.load.image('pinches3', './Assets/enemigo3.png');
        this.load.image('captus', './Assets/enemigocaptus.png');
        this.load.image('infla', './Assets/inflador.png');
        this.load.image('banderita', './Assets/bandera.png');
        this.load.image('reloj', './Assets/relojtiempo.png');
        this.load.image('flecha', './Assets/flechacasa.png');
    }
    create(){
        //CAMARA
        this.cameras.main.setBounds(0, 0, 10500, 768)
        this.physics.world.bounds.width = 10500
        this.physics.world.bounds.height = 1537
        //SONIDOS
        this.sonidosalto = this.sound.add('saltito',{
            loop: false
        });
        this.recogerbrillo = this.sound.add('sonidosbrillo', {
            loop: false
        })
        this.sonidomuerte = this.sound.add('die', {
            loop: false
        })
        this.superganador = this.sound.add('winner', {
            loop: false
        })
        //Fondo
        this.add.image(0, 0, 'Fondo2').setOrigin(0).setScale(.5);
        this.add.image(5460, 0, 'Fondo2').setOrigin(0).setScale(.5);
        //PLATAFORMAS


        plataformados = this.physics.add.staticGroup();
        plataformados.setOrigin(0);
        plataformados.create(680, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(2040, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(3400, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(4760, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(6120, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(7480, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(8840, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(10200, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(700, 520, 'plataforma2');
        plataformados.create(1150, 330, 'plataforma1');
        plataformados.create(1500, 520, 'plataforma1');
        plataformados.create(2000, 330, 'plataforma2');
        plataformados.create(2600, 150, 'plataforma2');
        plataformados.create(2500, 520, 'plataforma1');
        plataformados.create(3100, 520, 'plataforma1');
        plataformados.create(3600, 330, 'plataforma1');
        plataformados.create(4000, 150, 'plataforma1');
        plataformados.create(4550, 330, 'plataforma2');
        plataformados.create(5100, 150, 'plataforma1');
        plataformados.create(5300, 520, 'plataforma2');
        plataformados.create(5800, 330, 'plataforma1');
        plataformados.create(6300, 150, 'plataforma1');
        plataformados.create(6300, 520, 'plataforma1');
        plataformados.create(6900, 330, 'plataforma2');
        plataformados.create(7600, 520, 'plataforma2');
        plataformados.create(8100, 330, 'plataforma1');
        plataformados.create(8300, 150, 'plataforma1');
        plataformados.create(9000, 520, 'plataforma2');
        plataformados.create(9500, 330, 'plataforma1');
        //PERSONAJE
        player = this.physics.add.sprite(100, 590, 'Jugador');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        player.setScale(2);
        this.cameras.main.startFollow(player);
        //ANIMACION
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('Jugador', { start:0, end: 3}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [{key: 'Jugador', frame: 4}],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('Jugador', { start: 5, end: 8}),
            frameRate: 10,
            repeat: -1
        });
        this.physics.add.collider(player, plataformados);
        //TECLADO
        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
        }
        //UI
        this.add.image(1250, 720, 'teclas').setScale(.5).setScrollFactor(0);
        this.add.image(150, 60, 'uipower').setScale(.9).setScrollFactor(0);
        this.add.image(1250, 50, 'cronometro').setScale(.4).setScrollFactor(0);
        this.add.image(80, 720, 'corazon').setScale(.9).setScrollFactor(0);
        //BRILLOS 
        brillo = this.physics.add.group({
            key: 'power',
            repeat: 200,
            setXY: { x: 30, y: 0, stepX: 300 }
        });
        brillo.children.iterate(function (child) 
        {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
                    
        });
        this.physics.add.collider(brillo, plataformados); 
        this.physics.add.overlap(player, brillo, this.collectBrillo, null, this);
        //pinches
        enemigos2 = this.physics.add.group();
        enemigos2.create(500, 330, 'pinches1').setScale(.7);
        enemigos2.create(1200, 500, 'pinches2').setScale(.7);
        enemigos2.create(1100, 200, 'pinches1').setScale(.7);
        enemigos2.create(2000, 300, 'pinches3').setScale(.7);
        enemigos2.create(2800, 500, 'pinches2').setScale(.7);
        enemigos2.create(4000, 500, 'pinches1').setScale(.7);
        enemigos2.create(4800, 500, 'pinches1').setScale(.7);
        enemigos2.create(4650, 200, 'pinches1').setScale(.7);
        enemigos2.create(5860, 200, 'pinches3').setScale(.7);
        enemigos2.create(6800, 500, 'pinches1').setScale(.7);
        enemigos2.create(7700, 200, 'pinches1').setScale(.7);
        enemigos2.create(8870, 200, 'pinches1').setScale(.7);
        this.physics.add.collider(enemigos2, plataformados);
        //captus
        enemigos3 = this.physics.add.group();
        enemigos3.create(2000, 100, 'captus').setScale(.7);
        enemigos3.create(2500, 300, 'captus').setScale(.7);
        enemigos3.create(3500, 300, 'captus').setScale(.7);
        enemigos3.create(3600, 100, 'captus').setScale(.7);
        enemigos3.create(4400, 300, 'captus').setScale(.7);
        enemigos3.create(5300, 200, 'captus').setScale(.7);
        enemigos3.create(5800, 500, 'captus').setScale(.7);
        enemigos3.create(6300, 300, 'captus').setScale(.7);
        enemigos3.create(6800, 100, 'captus').setScale(.7);
        enemigos3.create(8100, 100, 'captus').setScale(.7);
        enemigos3.create(8300, 300, 'captus').setScale(.7);
        enemigos3.create(9700, 500, 'captus').setScale(.7);
        

        //INFLADOR
        for (var i = 0; i < 1; i++){
            var x= Phaser.Math.Between(500,9000);
            var y= Phaser.Math.Between(100, 600);
            inflapts = this.physics.add.group({
                key: 'infla',
                setXY: {x, y, stepX:1000, stepY: 100}
            })
        }
        this.physics.add.collider(inflapts, plataformados);
        this.physics.add.collider(player, inflapts, this.power1, null, this);
        //RELOJ
        for (var i = 0; i < 1; i++)
        {
            var x= Phaser.Math.Between(500, 9000);
            var y= Phaser.Math.Between(100, 600);
            relojtiempo = this.physics.add.group({
                key: 'reloj',
                setXY: {x, y, stepX:1000, stepY: 100 }
            });
        }
        this.physics.add.collider(relojtiempo, plataformados);
        this.physics.add.collider(player, relojtiempo, this.power2, null, this);

        //BANDERITA 
        for (var i = 0; i < 1; i++){
            var x= Phaser.Math.Between(500, 5000);
            var y= Phaser.Math.Between(100, 600);
            powerup2 = this.physics.add.group({
                key: 'banderita',
                setXY: {x, y, stepX: 5000, stepY: 100}
            })
        }
        this.physics.add.collider(powerup2, plataformados);
        this.physics.add.collider(player, powerup2, this.maspower, null, this);
        //CASA
        ganarCasita = this.physics.add.staticGroup();
        ganarCasita.create(10450, 450, 'flecha').setScale(.5);
        this.physics.add.collider(player, ganarCasita, this.ganarpartida, null, this);
        //TIEMPO
        TiempoInicial = 70
        TimeEvent = this.time.addEvent({ delay: 1000, callback: this.timer, callbackScope: this, loop: true });
        timeText = this.add.text(1190, 30, '', {fontSize: '50px', fill: '#FFF'});
        timeText.setScrollFactor(0);
        //VIDAS
        textoVidaJugador = this.add.text(45, 700, ' 3', { fontSize: '40px', fill: '#FFF' });
        textoVidaJugador.setScrollFactor(0);
        this.physics.add.collider(player, enemigos2, this.atrapado, null, this);
        this.physics.add.collider(player, enemigos3, this.rip, null, this);
        //TEXTOPUNTAJE
        textopuntosnivel = this.add.text(150, 50, '30/0', { fontSize: '30px', fill: '#FFF' });
        textopuntosnivel.setScrollFactor(0);

    }
    update()
    {
        //MOVIMIENTO
        if (cursors.left.isDown){
            player.setVelocityX(-450);
            player.anims.play('left', true);
        }
        else if (cursors.right.isDown){
            player.setVelocityX(450);
            player.anims.play('right', true);
        }
        else{
            player.setVelocityX(0);
            player.anims.play('turn');
        }
        if (cursors.up.isDown && player.body.touching.down){
            this.sonidosalto.play();
            player.setVelocityY(-430);
        }
    }
    collectBrillo (player, brillo) 
    {
        brillo.disableBody(true, true);
        puntosnivel += 1;
        textopuntosnivel.setText('30/' + puntosnivel);
        this.recogerbrillo.play();
        
    }
    atrapado(player, enemigos2)
    {
        enemigos2.destroy();
        vidaJugador -= 1;
        textoVidaJugador.setText(' ' + vidaJugador);
        if (vidaJugador === 0)
        {
            this.gameOver()
        }
    }
    rip(player, enemigos3){
        enemigos3.destroy();
        if (vidaJugador < 3){
            this.gameOver()
        }
    }
    gameOver() 
    {
        this.physics.pause();
        player.setTint(0xffFF00);
        player.anims.play('turn');
        TimeEvent.paused = true;
        puntosnivel = 0;
        vidaJugador = 3;
        this.sonidomuerte.play();
        this.scene.start('gameovernivel')
        
    }
    timer() {

        if (! gameOver) {    

            TiempoInicial = TiempoInicial - 1; 

            timeText.setText(' ' + TiempoInicial);

        if (TiempoInicial == 0) {

            TimeEvent.paused = true;

            this.gameOver()

            }            
        }
        
    }
    power1(player, inflapts) 
    {
        inflapts.disableBody(true, true);
        vidaJugador += 1;
        textoVidaJugador.setText(' ' + vidaJugador);    
    }
    power2(player, relojtiempo) 
    {
        relojtiempo.destroy();
        TiempoInicial += 5;
        timeText.setText(' ' + TiempoInicial);           
    }
    maspower(player, powerup2)
    {
        powerup2.destroy();
        if (vidaJugador  >= 3){
            puntosnivel +=10;
            textopuntosnivel.setText('30/' + puntosnivel);
        } else {
            TiempoInicial += 15;
            timeText.setText(' ' + TiempoInicial);
        }
        
    }
    ganarpartida(player, ganarCasita)
    {   
        if (puntosnivel >= 30){
            this.superganador.play();
            this.ganaste()
        }

    }
    ganaste()
    {
        this.scene.start('winnivel')

    }

}