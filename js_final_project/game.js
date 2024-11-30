// REMINDER: MAKE VARIABLES THAT CHECK WHAT LEVEL THE PLAYER IS AT!!!!!!! AND USE THOSE TO CHANGE THE LEVELS/KEEP TRACK OF LEVELS

// refresh screen if player changes size of screen?

// variable for keeping track of characters position
let char_position = {};
char_position = document.getElementById("chara").getBoundingClientRect();

// end positioning (shouldn't change on a level)
let end_position = {};
end_position = document.getElementById("end").getBoundingClientRect();

// variable that checks for walls border
let wall_1_position = {};
wall_1_position = document.getElementById("wall1").getBoundingClientRect();
let wall_2_position = {};
wall_2_position =  document.getElementById("wall2").getBoundingClientRect();
let wall_3_position = {};
wall_3_position = document.getElementById("wall3").getBoundingClientRect();

// border for the content
let content_border = {};
content_border = document.getElementById("content").getBoundingClientRect();

let char_properties = {};
char_properties.upDown = 0;
char_properties.leftRight = 0;
// char_properties.right = 0;
// char_properties.down = 0;
char_properties.elem = document.getElementById("chara");
// variable for how much u move per step
// in vw and vh, for checking the boundaries u have to convert to pixels
const steps = 4;

// variable for keeping track of time
let time_left = 16;

// function to convert vw and vh to px
function vhVwToPx(v)
{
    return window.innerHeight * (v / 100);
}

// reset function

function reset()
{
    // return everything to normal
    // includes time, char position
    document.getElementById("chara").style.bottom = 0;
    document.getElementById("chara").style.left = 0;
    // updating characters position
    char_position = document.getElementById("chara").getBoundingClientRect();
    char_properties.upDown = 0;
    char_properties.leftRight = 0;
    char_properties.elem = document.getElementById("chara");
    time_left = 16;


}

// function for moving
// take a parameter to determine which direction
function move(direction)
{
    // player can now move usinsg arrow keys
    console.log(direction);
    console.log(char_position);
    if(direction == "L") // move to the left 
    {
        // check if this would exceed the bound, 
        if((char_position.left - vhVwToPx(steps)) <= (content_border.left))
        {
            // do nothing, it would exceed the boundary
        }
        else if(/**wall two */ (char_position.left - vhVwToPx(steps) <= wall_2_position.right && char_position.bottom == wall_2_position.bottom))
        {

        }
        else
        {
            char_properties.leftRight -= steps;
            char_properties.elem.style.left = `${char_properties.leftRight}vw`;
            // console.log(char_properties.elem.style.right);
        }
    }
    else if(direction == "R") // move to the right
    {
        if((char_position.right + vhVwToPx(steps)) >= content_border.right)
        {
            // do nothing, would exceed boundary
        }
        else if((/**wall 1*/((char_position.right + vhVwToPx(steps)) >= wall_1_position.left) && char_position.bottom == wall_1_position.bottom)) // checking if player will run into a wall, don't want them to phase through. There's probably an easier way to do this but this all I can think of right now
        {
            // do nothing, want to run into wall
        }
        else
        {
            char_properties.leftRight += steps;
            char_properties.elem.style.left = `${char_properties.leftRight}vw`;
            // console.log(char_properties.elem.style.right);
        }
        

    }
    else if(direction == "D") // move down 
    {
        if(char_position.bottom + vhVwToPx(steps) >= content_border.bottom)
        {
            //do nothing
            console.log("border!")
        }
        else if(/**wall 1 */((char_position.right >= wall_1_position.left) && (char_position.bottom + vhVwToPx(steps) >= wall_1_position.top)) /**wall 2 */ || ((char_position.bottom + vhVwToPx(steps) >= wall_2_position.top) && (Math.round(char_position.left) < Math.round(wall_2_position.right)) && (Math.round(char_position.bottom) == Math.round(wall_2_position.top))) /**wall 3 boundaries */)
        {
            console.log("HEREEE!!!")
        }
        else
        {
            console.log("hiiiii")
            char_properties.upDown -= steps;
            char_properties.elem.style.bottom = `${char_properties.upDown}vh`;
            // console.log(char_properties.elem.style.top);
        }

    }
    else // move up!
    {
        if(char_position.top - vhVwToPx(steps) <= content_border.top)
        {
            //do nothing, would exceed boundaries
        }
        else if(/*wall two */(char_position.top + vhVwToPx(steps) >= wall_2_position.bottom && char_position.right < wall_2_position.right && char_position.bottom != wall_1_position.bottom) /*wall three */)
        {

        }
        else
        {
            char_properties.upDown += steps;
            char_properties.elem.style.bottom = `${char_properties.upDown}vh`;
            // console.log(char_properties.elem.style.top);
        }

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
    end_position = document.getElementById("end").getBoundingClientRect();

    // updating the content border incase the player decides to resize the screen while playing, lol.
    content_border = document.getElementById("content").getBoundingClientRect();

    // updating all the walls in case the player decides to resize the screen.
    wall_1_position = document.getElementById("wall1").getBoundingClientRect();
    wall_2_position = document.getElementById("wall2").getBoundingClientRect();

    // end_position doesn't need to update since it should be the same

    // next compare char_position to the end_goal to check if the player made it to the end!
    if(char_position.top == end_position.top && char_position.left == end_position.left)
    {
        // make win screen visible
        document.getElementById("won").style.visibility = "visible";

        // event listener for yes and no buttons

        document.getElementById("continue").addEventListener("click", e=>{
            // in this function, the winning screen would be made hidden, and the next level would be call
            // have a function that sets up the level
            document.getElementById("won").style.visibility = "hidden";
            reset();
        })

        document.getElementById("no").addEventListener("click", e=>{
            // will close the game if player chooses no
            // kick them out!
            self.close();
        })


        // need to reset the level and prompt the player to continue
    }

    if(time_left == 0)
    {
        // lost screen is visible
        document.getElementById("lost").style.visibility = "visible";

        document.getElementById("again").addEventListener("click", e=>{
            // in this function, the winning screen would be made hidden, and the next level would be call
            // have a function that sets up the level
            document.getElementById("lost").style.visibility = "hidden";
            reset();
        })

        document.getElementById("exit").addEventListener("click", e=>{
            // will close the game if player chooses no
            // kick them out!
            self.close();
        })
    }

    // more to be done with this function!!!
}

// function that will set up each level
function setUp()
{
    
}

// use set interval to keep track of time
// 1000 milliseconds in a second
setInterval(() =>{
    time_left--;
    if(time_left >= 0)
    {
        document.getElementById("time").innerHTML = time_left;
    }
}, 1000);


// function for enemy

// use set interval to check the players position and if they've reached the end
// check if they've reach the end every 100ms
setInterval(() =>{
    endGoal();
}, 100); 

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