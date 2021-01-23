let player = {
    health: 100,
    fun: 0,
    play: function() {
        this.fun += 10;
    },
    // eatApple: function() {
    //     this.health += 10;
    // },
    // eatCandy: function() {
    //     this.health -= 5;
    //     this.fun += 5;
    // }
    eat: function(food) {
        if(food == 'apple') {
            this.health += 10;
        }
        else if(food == 'candy') {
            this.health -= 5;
            this.fun += 5;
        }
    }
};

console.log('player object BEFORE:', player);
player.play();
player.eat('apple');
player.eat('candy');
console.log('player object AFTER:', player);
// player.eatApple();
// player.eatCandy();


// console.log(player);

// player.eat('apple');

// console.log(player);
