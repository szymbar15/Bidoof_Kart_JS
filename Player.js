var directionEnum = {
    UP: 1,
    UPRIGHT: 2,
    RIGHT: 3,
    DOWNRIGHT: 4,
    DOWN: 5,
    DOWNLEFT: 6,
    LEFT: 7,
    UPLEFT: 8
}

var players;
var karts;

class PlayerClass {
    constructor(image, id, kart) {
        this.image = image;
        this.id = id;
        this.x = 0;
        this.y = 0;   
        this.currentSpeed = 0;
        this.currentDirection = 0;
        this.currentBoost = 0;
        this.keyPress = 0;
        this.kart = kart;
    }
}

class KartClass {
    constructor(maxSpeed, acc, decc, handling) {
        this.maxSpeed = maxSpeed;
        this.acc = acc;
        this.decc = decc;
        this.handling = handling;
    }
}

function initializePlayersAndKarts() {
    players = new Array();
    karts = new Array();

    //Kart 1:
    var tempKart = new KartClass(0.3, 1/60, 1/120, 1/70);
    karts.push(tempKart);

    //Player 1:
    tempPlayer = new PlayerClass(imagesToLoad[1].image, 0, karts[0]);
    tempPlayer.x = 200;
    tempPlayer.y = 250;
    players.push(tempPlayer);
}