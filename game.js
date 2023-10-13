var game = new Phaser.Game(100,60,  Phaser.AUTO);

var GameState = {
    preload: function () {
        this.load.image('bg', 'assets/images/test.png')
    },
    
    create: function () {
        this.bg = this.game.add.sprite(0,0,'bg')
    },
    
    update: function () {
        
    },
};

//game.state.add('GameState', GameState);
//game.state.start('GameState');
