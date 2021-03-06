window.onload = function () {
    // global vars
    var map;
    var layer;
    // config
    var config = {
        preload: preload,
        create: create,
        render: render,
        update: update,
        resize: resize
    };

    // create game
    var game = new Phaser.Game(400, 400, Phaser.CANVAS, 'tutorial-1', config);

    // preload() happens here
    function preload() {
        game.load.image('per', 'sprite-goku-single.png');
        game.load.spritesheet('goku-4-panel', 'sprite-goku-4-panel.png', 32, 32, 4);
        // preload tilemap
        game.load.tilemap('tutorial-2-tilemap', '2-tilemap-tutorial.json', null, Phaser.Tilemap.TILED_JSON);

        // preload tile asset for tilemap
        game.load.image('tiles', 'tileset-blocks-1.png');

        console.log('call::preload()');
    }

    // create() happens here
    function create() {

        // load up tilemap
        map = game.add.tilemap('tutorial-2-tilemap');

        // link loaded tileset image to map
        map.addTilesetImage('tutorial-2-tilemap_image', 'tiles');

        // create laye for said tileset and map now!
        layer = map.createLayer('tutorial-2_layer');
        // set bounds to tilemap size
        game.world.setBounds(0, 0, 800, 800);
        // paint the sprite to the canvas (centered)
        sprite = game.add.sprite(game.camera.width / 2, game.camera.height / 2, 'goku-4-panel');
        sprite.animations.frame = 0;

        // set keyboard input listeners
        cursors = game.input.keyboard.createCursorKeys();

        // set the anchor for sprite to middle of the view
        sprite.anchor.setTo(0.5);
        // tell camera to follow sprite now
        game.camera.follow(sprite);

        // enable game physics on sprite
        game.physics.enable(sprite, Phaser.Physics.ARCADE);
        // set sprite to hit boundaries of our world bounds
        sprite.body.collideWorldBounds = true;

        sprite.animations.frame = 0;
        console.log('call::create()');

        // set background color
        //game.stage.backgroundColor = '#787878';
    }

    function render() {
        // console.log('call::render()');
    }

    function update() {
        // console.log('call::update()');
        // speed of movement
        var movementRate = 3;

        // only move one direction at a time
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            sprite.animations.frame = 1;
            sprite.x -= movementRate;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            sprite.animations.frame = 2;
            sprite.x += movementRate;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            sprite.animations.frame = 3;
            sprite.y -= movementRate;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            sprite.animations.frame = 0;
            sprite.y += movementRate;
        }
    } function resize() {
        // console.log('call::resize()');
    }
};