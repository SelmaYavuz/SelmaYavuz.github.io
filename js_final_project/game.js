// variable for keeping track of characters position
let char_position = {};
char_position = document.getElementById("chara").getBoundingClientRect();

// end positioning (shouldn't change on a level)
let end_position = {};
end_position = document.getElementById("end").getBoundingClientRect();

// border for the content
let content_border = {};
content_border = document.getElementById("content").getBoundingClientRect();

let char_properties = {};
char_properties.upDown = 0;
char_properties.leftRight = 0;
// char_properties.right = 0;
// char_properties.down = 0;
char_properties.elem = document.getElementById("chara");

// function for moving
// take a parameter to determine which direction
function move(direction)
{
    console.log(direction);
    console.log(char_position);
    if(direction == "L") // move to the left 10 px
    {
        // check if this would exceed the bound
        char_properties.leftRight += 10;
        char_properties.elem.style.right = `${char_properties.leftRight}px`;
        console.log(char_properties.elem.style.right);
    }
    else if(direction == "R") // move to the right 10 px
    {
        char_properties.leftRight -= 10;
        char_properties.elem.style.right = `${char_properties.leftRight}px`;
        console.log(char_properties.elem.style.right);

    }
    else if(direction == "D") // move down 10 px
    {
        char_properties.upDown += 10;
        char_properties.elem.style.top = `${char_properties.upDown}px`;
        console.log(char_properties.elem.style.top);

    }
    else
    {
        char_properties.upDown -= 10;
        char_properties.elem.style.top = `${char_properties.upDown}px`;
        console.log(char_properties.elem.style.top);

    }
    char_position = document.getElementById("chara").getBoundingClientRect();
    console.log(char_position);
}
// function for checking end goal
function endGoal()
{
    // in this function check if the position of the character is equal to the position of the end goal
        // if it matches, display you win!
        // will need something that checks how much time they spent in order to determine amount of stars
            // have a variable that keeps track of how much time they have
        // prompt the player to continue to the next level
            // if they choose to continue, call a function tthat makes the next level and resets all variables (?)
    // also need to check if the player has run out of time
        // if they run out of time -> game over
        // prompt the player to continue or quit
        // if they choose to continue, call a reset funtion to reset the level?

    // update characters position
    char_position = document.getElementById("chara").getBoundingClientRect();

    // end_position doesn't need to update since it should be the same

    // next compare char_position to the end_goal to check if the player made it to the end!
    if(char_position == end_position)
    {
        alert("You escaped successfully!");
    }

    // more to be done with this function!!!
}




// function for enemy

// use set interval to check the players position and if they've reached the end
// check if they've reach the end every 100ms
setInterval(endGoal(), 100); 

// code for moving
document.addEventListener("keydown", e=>{
    // checking which key was pressed
    if(e.code == "ArrowLeft")
    {
        move("L");
    }
    else if(e.code == "ArrowRight")
    {
        move("R");
    }
    else if(e.code == "ArrowDown")
    {
        move("D");
    }
    else if(e.code == "ArrowUp")
    {
        move("U");
    }
})


// code outline/ what needs to be done
/**
 * first: need to get basic visuals for characters
 * Need to create a maze using divs for player to navigate, need to make sure that these cannot be walked through by the player
 * Make a menu screen!
 * Must explain the rules before the player starts so that they know what to do
 * 
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
 * if time/able to: make a monster chase the player thru the maze so that it's more stressful!
 */