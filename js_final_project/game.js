// variable for keeping track of characters position
let char_position = {};
char_position = document.getElementById("chara").getBoundingClientRect();

// end positioning (shouldn't change on a level)
let end_position = {};
end_position = document.getElementById("end").getBoundingClientRect();

// use set interval 


// code outline/ what needs to be done
/**
 * first: need to get basic visuals for characters
 * Need to create a maze using divs for player to navigate, need to make sure that these cannot be walked through by the player
 * Make a menu screen!
 * Must explain the rules before the player starts so that they know what to do
 * 
 * In js:
 * Must keep track of characters position
 * Use an event listener to check for player movements (moving up left right down)
 * Make sure that the player cannot go outside the border
 * Once the player reaches the end goal, display a you win!
 *      player gets a score based on their time (3 stars, 2 stars, 1 star)
 *      Prompted to proceed to next level, there will be a new maze
 * If the player runs out of time display a you lose! and prompt the player to continue or quit 
 *      if they choose to continue make sure everything is reset!
 * Make sure player doesn't phase thru walls
 * 
 */