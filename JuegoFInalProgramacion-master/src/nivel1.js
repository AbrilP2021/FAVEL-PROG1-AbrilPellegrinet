class nivel1 extends Phaser.Scene {
    constructor(){
        super('N1')
    }

    preload(){
        this.load.audio('saltito', './Assets/Musica/salto.mp3');
        this.load.audio('sonidosbrillo', './Assets/Musica/recoger_brillo.mp3');
        this.load.audio('die', './Assets/Musica/muerte.mp3');
        this.load.audio('dañado', './Assets/Musica/daño.mp3');
        this.load.audio('winner', './Assets/Musica/ganador.mp3');
        
        this.load.image('FondoNivelUno', './Assets/FondoCompletoN1.png');
        this.load.image('SueloNivelUno', './Assets/SueloCompletoN1.png');
        this.load.spritesheet('Jugador', './Assets/dude.png', { frameWidth: 32, frameHeight: 48});
        //this.load.tilemapTiledJSON('Mapa', './Assets/Mapa/NIVEL1MAPA.json');
        this.load.image('p1', './Assets/Mapa/plataformachica.png');
        this.load.image('p2', './Assets/Mapa/plataformagrande.png');
        this.load.image('flecha', './Assets/flechacasa.png');
        this.load.image('teclas', './Assets/controles.png');
        this.load.image('power', './Assets/brillo.png');
        this.load.image('pinches1', './Assets/enemigos1.png');
        this.load.image('uipower', './Assets/uibrillos.png');
        this.load.image('pinches2', './Assets/enemigos2.png');
        this.load.image('pinches3', './Assets/enemigos3.png');
        this.load.image('corazon', './Assets/vida.png');
        this.load.image('cronometro', './Assets/Tiempo.png');
        this.load.image('infla', './Assets/inflador.png');
        this.load.image('banderita', './Assets/bandera.png');
        this.load.image('reloj', './Assets/relojtiempo.png');
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
        
        //game.world.setBounds(0, 0, 10927, 1537);
        this.add.image(0, 0, 'FondoNivelUno').setOrigin(0).setScale(.5);
        this.add.image(5450, 0, 'FondoNivelUno').setOrigin(0).setScale(.5);
        //PLATAFORMAS
        //this.add.image(0, 680, 'SueloNivelUno').setOrigin(0).setScale(.5);
        platform = this.physics.add.staticGroup();
        platform.setOrigin(0);
        platform.create(0, 718, 'SueloNivelUno').setScale(.5).refreshBody();
        platform.create(2500, 718, 'SueloNivelUno').setScale(.5).refreshBody();
        platform.create(5500, 718, 'SueloNivelUno').setScale(.5).refreshBody();
        platform.create(8200, 718, 'SueloNivelUno').setScale(.5).refreshBody();
        platform.create(500, 520, 'p1');
        platform.create(1200, 520, 'p1');
        platform.create(850, 330, 'p1');
        platform.create(1750,330, 'p2');
        platform.create(2500,520, 'p2');
        platform.create(1750, 150, 'p1');
        platform.create(2500, 150, 'p1');
        platform.create(3300, 520, 'p1');
        platform.create(3750, 330, 'p1');
        platform.create(4300, 330, 'p1');
        platform.create(5000, 330, 'p1');
        platform.create(4800, 520, 'p1');
        platform.create(5800,520, 'p2');
        platform.create(6400, 330, 'p1');
        platform.create(7000, 150, 'p1');
        platform.create(6800, 520, 'p1');
        platform.create(5800, 150, 'p1');
        platform.create(7500, 330, 'p1');
        platform.create(8200, 520, 'p2');
        platform.create(9000, 330, 'p2');
        //LLEGADA
        //this.add.image(10450, 450, 'casita').setScale(.5);
        this.add.image(1250, 720, 'teclas').setScale(.5).setScrollFactor(0);
        this.add.image(150, 60, 'uipower').setScale(.9).setScrollFactor(0);
        this.add.image(1250, 50, 'cronometro').setScale(.4).setScrollFactor(0);
        this.add.image(80, 720, 'corazon').setScale(.9).setScrollFactor(0);
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
        this.physics.add.collider(player, platform);
        this.physics.add.collider(player,);
        //TECLADO
        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
        }
        //POWER
        brillo = this.physics.add.group({
            key: 'power',
            repeat: 200,
            setXY: { x: 30, y: 0, stepX: 350 }
        });
        brillo.children.iterate(function (child) 
        {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            
        });
        this.physics.add.collider(brillo, platform); 
        this.physics.add.overlap(player, brillo, this.collectBrillo, null, this);
        //ENEMIGOS 
        enemigos = this.physics.add.group();
        enemigos.create(850, 600, 'pinches1').setScale(.7);
        enemigos.create(860, 230, 'pinches1').setScale(.7);
        enemigos.create(1650, 50, 'pinches2').setScale(.7);
        enemigos.create(1650, 600, 'pinches1').setScale(.7);
        enemigos.create(2400, 230, 'pinches1').setScale(.7);
        enemigos.create(2580, 230, 'pinches1').setScale(.7);
        enemigos.create(3300, 300, 'pinches3').setScale(.7);
        enemigos.create(4360, 200, 'pinches2').setScale(.7);
        enemigos.create(3750, 600, 'pinches2').setScale(.7);
        enemigos.create(4200, 600, 'pinches1').setScale(.7);
        enemigos.create(5100, 600, 'pinches3').setScale(.7);
        enemigos.create(5800, 300, 'pinches1').setScale(.7);
        enemigos.create(7200, 200, 'pinches1').setScale(.7);
        enemigos.create(7550, 50, 'pinches2').setScale(.7);
        enemigos.create(7550, 600, 'pinches3').setScale(.7);
        enemigos.create(8250, 300, 'pinches1').setScale(.7);
        enemigos.create(8900, 600, 'pinches1').setScale(.7);
        enemigos.create(9080, 600, 'pinches1').setScale(.7);
        enemigos.create(8900, 50, 'pinches2').setScale(.7);
        enemigos.create(9670, 600, 'pinches3').setScale(.7);
        enemigos.create(9950, 600, 'pinches3').setScale(.7);
        
        this.physics.add.collider(enemigos, platform);
        
        //AYUDAS
        for (var i = 0; i < 1; i++){
            var x= Phaser.Math.Between(500,9000);
            var y= Phaser.Math.Between(100, 600);
           inflapts = this.physics.add.group({
                key: 'infla',
                setXY: {x, y, stepX:1000, stepY: 100}
            })
        }
        
        this.physics.add.collider(inflapts, platform);
        this.physics.add.collider(player, inflapts, this.power1, null, this);
        //this.game.addEvent(Phaser.Timer.SECONDS * 7, this.power1, this);
        for (var i = 0; i < 1; i++)
        {
            var x= Phaser.Math.Between(500, 9000);
            var y= Phaser.Math.Between(100, 600);
            relojtiempo = this.physics.add.group({
                key: 'reloj',
                setXY: {x, y, stepX:1000, stepY: 100 }
            });
        }
       //COLLIDERS
        this.physics.add.collider(relojtiempo, platform);
        this.physics.add.collider(relojtiempo, enemigos);
        this.physics.add.collider(player, relojtiempo, this.power2, null, this);
        
        //POWERUP
        for (var i = 0; i < 1; i++){
            var x= Phaser.Math.Between(500, 5000);
            var y= Phaser.Math.Between(100, 600);
            powerup2 = this.physics.add.group({
                key: 'banderita',
                setXY: {x, y, stepX: 5000, stepY: 100}
            })
        }
        this.physics.add.collider(powerup2, platform);
        this.physics.add.collider(powerup2, enemigos);
        this.physics.add.collider(player, powerup2, this.maspower, null, this);
        //CASA
        ganarCasita = this.physics.add.staticGroup();
        ganarCasita.create(10450, 450, 'flecha').setScale(.5);
        this.physics.add.collider(player, ganarCasita, this.ganarpartida, null, this);
        //EVENTOS 
        //TIEMPO
        TiempoInicial = 90
        TimeEvent = this.time.addEvent({ delay: 1000, callback: this.timer, callbackScope: this, loop: true });
        timeText = this.add.text(1190, 30, '', {fontSize: '50px', fill: '#FFF'});
        timeText.setScrollFactor(0);
        //VIDAS
        textoVidaJugador = this.add.text(45, 700, ' 3', { fontSize: '40px', fill: '#FFF' });
        textoVidaJugador.setScrollFactor(0);
        this.physics.add.collider(player, enemigos, this.hitEnemigo, null, this);
        //PUNTAJE
        textopuntos = this.add.text(150, 50, '30/0', { fontSize: '30px', fill: '#FFF' });
        textopuntos.setScrollFactor(0);
        
    }

    update(){
        
        //MOVIMIENTO JUGADOR
        if (cursors.left.isDown)
        {
            player.setVelocityX(-450);
            player.anims.play('left', true);


        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(450);
            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);
            player.anims.play('turn');
        }
        if (cursors.up.isDown && player.body.touching.down)
        {
            this.sonidosalto.play();
            player.setVelocityY(-430);
            
        }
        
    }

    collectBrillo (player, brillo) 
    {
        brillo.disableBody(true, true);
        puntos += 1;
        textopuntos.setText('30/' + puntos);
        this.recogerbrillo.play();
        return false;
        
    }

    hitEnemigo(player, enemigos) 
    {
        enemigos.disableBody(true, true);
       vidaJugador -= 1;
       textoVidaJugador.setText(' ' + vidaJugador);
       if (vidaJugador === 0)
       {
           this.gameOver()
       }
       
    }
    gameOver() 
    {
        this.physics.pause();
        player.setTint(0xffFF00);
        player.anims.play('turn');
        TimeEvent.paused = true;
        puntos = 0;
        vidaJugador = 3;
        this.sonidomuerte.play();
        this.scene.start('GameOver')
        
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
        return false;    
    }
    power2(player, relojtiempo) 
    {
        relojtiempo.destroy();
        TiempoInicial += 5;
        timeText.setText(' ' + TiempoInicial);
        return false;           
    }

    maspower(player, powerup2)
    {
        powerup2.destroy();
        if (vidaJugador  >= 3){
            puntos +=10;
            textopuntos.setText('30/' + puntos);
        } else {
            TiempoInicial += 15;
            timeText.setText(' ' + TiempoInicial);
        }
        return false;
        
    }

    ganarpartida(player, ganarCasita)
    {   
        if (puntos >= 30){
            this.superganador.play();
            this.ganaste()
        }

    }

    ganaste()
    {
    
        this.scene.start("Ganador")

    }

}