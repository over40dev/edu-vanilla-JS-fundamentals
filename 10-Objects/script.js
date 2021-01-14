// declare the object
let player = {
  name: 'ABC',
  score: 99,
  isActive: true,
  outfit: {
    color: 'blue',
    size: 'M',
    cost: 100,
    isNew: true
  }
};

console.log('player object:',player);
// console.log(player);

// accessing properties of the object
console.log(player.name);
console.log(player['name']);

// modifying a property
console.log(player.isActive);
player.isActive = false;
console.log(player.isActive);

// adding new properties to the object
player.health = 100;
console.log('player object:',player);

// deleting a property
delete player.health;

console.log('player object:',player);

  console.log(player.outfit.color);
  player.outfit.color = 'red';
  console.log(player['outfit']['color']);

  // // modify the size of the outfit of the player
  // player.outfit.size = 'S';
  // console.log(player);
