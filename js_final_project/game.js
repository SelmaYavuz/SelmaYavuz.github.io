// REMINDER: MAKE VARIABLES THAT CHECK WHAT LEVEL THE PLAYER IS AT!!!!!!! AND USE THOSE TO CHANGE THE LEVELS/KEEP TRACK OF LEVELS

// refresh screen if player changes size of screen?

// variable for keeping track of characters position
let char_position = {};
char_position = document.getElementById("chara").getBoundingClientRect();

// end positioning (shouldn't change on a level)
let end_position = {};
end_position = document.getElementById("end").getBoundingClientRect();

// variable that keeps track of levels
let level2 = false;
let level3 = false;

// variable that checks for walls border
let wall_1_position = {};
wall_1_position = document.getElementById("wall1").getBoundingClientRect();
let wall_2_position = {};
wall_2_position =  document.getElementById("wall2").getBoundingClientRect();
let wall_3_position = {};
wall_3_position = document.getElementById("wall3").getBoundingClientRect();
let wall_4_position = {};
wall_4_position = document.getElementById("wall4").getBoundingClientRect();
let wall_5_position = {};
wall_5_position = document.getElementById("wall5").getBoundingClientRect();
let wall_6_position = {};
wall_6_position = document.getElementById("wall6").getBoundingClientRect();
let wall_7_position = {};
wall_7_position = document.getElementById("wall7").getBoundingClientRect();
let wall_8_position = {};
wall_8_position = document.getElementById("wall8").getBoundingClientRect();

// level walls
let wall_9_position = {};
wall_9_position = document.getElementById("wall9").getBoundingClientRect();
let wall_10_position = {}; 
wall_10_position = document.getElementById("wall10").getBoundingClientRect();
let wall_11_position = {};
wall_11_position = document.getElementById("wall11").getBoundingClientRect();
let wall_12_position = {};
wall_12_position = document.getElementById("wall12").getBoundingClientRect();
let wall_13_position = {};
wall_13_position = document.getElementById("wall13").getBoundingClientRect();

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
let time_left = 15;
let goal_interval;
let time_interval;

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
    //REMINDER, NEED TO MAKE SURE PLAYER CAN'T MOVE AFTER TIME RUNS OUT
    if((char_position.top == end_position.top && char_position.left == end_position.left) || time_left <= 0) 
    {
        // if the player has reached the end or time has run out, they can no longer move!
    }
    else if(direction == "L") // move to the left 
    {
        // check if this would exceed the bound, 
        if((char_position.left - vhVwToPx(steps)) <= (content_border.left))
        {
            // do nothing, it would exceed the boundary of the game
        }
        else if(level2 && !(level3) && (/**wall 9 */(Math.round(char_position.left - vhVwToPx(steps)) <= Math.round(wall_9_position.right) && Math.round(char_position.top) >= Math.round(wall_9_position.top)) /**wall 10 */ || (Math.round(char_position.left - vhVwToPx(steps)) <= Math.round(wall_10_position.right) && Math.round(char_position.bottom) <= Math.round(wall_10_position.bottom) && (Math.round(char_position.left) >= Math.round(wall_10_position.right) && Math.round(char_position.right) <= Math.round(wall_11_position.left))) /**wall 11 */ || (Math.round(char_position.left - vhVwToPx(steps)) <= Math.round(wall_11_position.right) && Math.round(char_position.top) >= Math.round(wall_11_position.top) && (Math.round(char_position.left) >= Math.round(wall_11_position.right) && Math.round(char_position.right) <= Math.round(wall_12_position.left))) /**wall 12 */ || (Math.round(char_position.left - vhVwToPx(steps)) <= Math.round(wall_12_position.right) && Math.round(char_position.bottom) <= Math.round(wall_12_position.bottom) && (Math.round(char_position.left) >= Math.round(wall_12_position.right) && Math.round(char_position.right) <= Math.round(wall_13_position.left)))))
        {
            // this is essentially a bunch of statements that check if the player is running into a wall or not for level 2, there is probably an easier way to do this but this was my first thought.
        }
        else if((level3) && (/**wall two */ (char_position.left - vhVwToPx(steps) <= wall_2_position.right && char_position.bottom == wall_2_position.bottom) || /**wall 4 */(char_position.left - vhVwToPx(steps) <= wall_4_position.right && char_position.bottom == wall_4_position.bottom) || /**wall 6 */(char_position.left - vhVwToPx(steps) <= wall_6_position.right && char_position.bottom == wall_6_position.bottom) /**wall8 */ || (char_position.left - vhVwToPx(steps) <= wall_8_position.right && char_position.bottom == wall_8_position.bottom))) 
        {
            // this is essentially a bunch of statements that check if the player is running into a wall or not for level 3, there is probably an easier way to do this but this was my first thought.
        }
        else // move left, nothing blocking the player.
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
        else if(level2 && !(level3) && (/**wall 9*/(Math.round(char_position.right + vhVwToPx(steps)) >= Math.round(wall_9_position.left) && Math.round(char_position.top) >= Math.round(wall_9_position.top) && Math.round(char_position.right) <= Math.round(wall_9_position.left)) /***wall 10 */ || (Math.round(char_position.right + vhVwToPx(steps)) >= Math.round(wall_10_position.left) && Math.round(char_position.bottom) <= Math.round(wall_10_position.bottom) && Math.round(char_position.left) >= Math.round(wall_9_position.right) && Math.round(char_position.right) <= Math.round(wall_10_position.left))/**wall 11 */ || (Math.round(char_position.right + vhVwToPx(steps)) >= Math.round(wall_11_position.left) && Math.round(char_position.top) >= Math.round(wall_11_position.top) && Math.round(char_position.left) >= Math.round(wall_10_position.right) && Math.round(char_position.right) <= Math.round(wall_11_position.left)) /** wall 12 */ || (Math.round(char_position.right + vhVwToPx(steps)) >= Math.round(wall_12_position.left) && Math.round(char_position.bottom) <= Math.round(wall_12_position.bottom) && Math.round(char_position.left) >= Math.round(wall_11_position.right) && Math.round(char_position.right) <= Math.round(wall_12_position.left)) /**wall 13 */ || (Math.round(char_position.right + vhVwToPx(steps)) >= Math.round(wall_13_position.left) && Math.round(char_position.top) >= Math.round(wall_13_position.top) && Math.round(char_position.left) >= Math.round(wall_12_position.right) && Math.round(char_position.right) <= Math.round(wall_13_position.left))))
        {
            // this is essentially a bunch of statements that check if the player is running into a wall or not for level 2, there is probably an easier way to do this but this was my first thought.
        }
        else if((level3) && ((/**wall 1*/((char_position.right + vhVwToPx(steps)) >= wall_1_position.left) && char_position.bottom == wall_1_position.bottom) || /**wall 3*/((char_position.right + vhVwToPx(steps)) >= wall_3_position.left && Math.round(char_position.bottom) == Math.round(wall_3_position.bottom)) /**wall 5 */ || ((char_position.right + vhVwToPx(steps)) >= wall_5_position.left && Math.round(char_position.bottom) == Math.round(wall_5_position.bottom)) /**wall 7 */|| ((char_position.right + vhVwToPx(steps)) >= wall_7_position.left && Math.round(char_position.bottom) == Math.round(wall_7_position.bottom)))) // checking if player will run into a wall, don't want them to phase through. There's probably an easier way to do this but this all I can think of right now
        {
           // this is essentially a bunch of statements that check if the player is running into a wall or not for level 3, there is probably an easier way to do this but this was my first thought.
        }
        else // move right, nothing blocking the player
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
            //do nothing, player would run into games border
        } 
        else if(level2 && !(level3) && (/**wall 9 */ Math.round(char_position.right) == Math.round(wall_9_position.right) /**wall 11 */ || Math.round(char_position.right) == Math.round(wall_11_position.right) /**wall 13 */ || Math.round(char_position.right) == Math.round(wall_13_position.right)))
        {
            // this is essentially a bunch of statements that check if the player is running into a wall or not for level 2, there is probably an easier way to do this but this was my first thought.
        }
        else if((level3) && /**wall 1 */(((char_position.right >= wall_1_position.left) && (char_position.bottom + vhVwToPx(steps) >= wall_1_position.top)) /**wall 2 */ || ((char_position.bottom + vhVwToPx(steps) >= wall_2_position.top) && (Math.round(char_position.left) < Math.round(wall_2_position.right)) && (Math.round(char_position.bottom) == Math.round(wall_2_position.top))) /**wall 3 boundaries */|| ((char_position.right >= wall_3_position.left) && (Math.round(char_position.bottom + vhVwToPx(steps)) >= Math.round(wall_3_position.top)) && Math.round(char_position.bottom) >= Math.round(wall_3_position.top) && Math.round(char_position.top) <= Math.round(wall_4_position.bottom)) /**wall 4 */ || ((char_position.bottom + vhVwToPx(steps) >= wall_4_position.top) && (Math.round(char_position.left) < Math.round(wall_4_position.right)) && (Math.round(char_position.bottom) >= Math.round(wall_4_position.top) && Math.round(char_position.top) <= Math.round(wall_5_position.bottom))) /**wall 5 */ || ((char_position.right >= wall_5_position.left) && (Math.round(char_position.bottom + vhVwToPx(steps)) >= Math.round(wall_5_position.top)) && Math.round(char_position.bottom) >= Math.round(wall_5_position.top) && Math.round(char_position.top) <= Math.round(wall_6_position.bottom)) /**wall 6 */ || ((char_position.bottom + vhVwToPx(steps) >= wall_6_position.top) && (Math.round(char_position.left) < Math.round(wall_6_position.right)) && (Math.round(char_position.bottom) >= Math.round(wall_6_position.top) && Math.round(char_position.top) <= Math.round(wall_7_position.bottom))) /**wall 7 */ || ((char_position.right >= wall_7_position.left) && (Math.round(char_position.bottom + vhVwToPx(steps)) >= Math.round(wall_7_position.top)) && Math.round(char_position.bottom) >= Math.round(wall_7_position.top) && Math.round(char_position.top) <= Math.round(wall_8_position.bottom))))
        {
            // this is essentially a bunch of statements that check if the player is running into a wall or not for level 3, there is probably an easier way to do this but this was my first thought.
        }
        else // move down, nothing blocking the player
        {
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
        else if(level2 && !(level3) && (/**wall 10 */ Math.round(char_position.left) == Math.round(wall_10_position.left) /**wall 12 */ || Math.round(char_position.left) == Math.round(wall_12_position.left)))
        {
            // this is essentially a bunch of statements that check if the player is running into a wall or not for level 2, there is probably an easier way to do this but this was my first thought.
        }
        else if((level3) && (/*wall two */(char_position.top + vhVwToPx(steps) >= wall_2_position.bottom && char_position.right < wall_2_position.right && char_position.bottom != wall_1_position.bottom) /*wall three */ || ((Math.round(char_position.top + vhVwToPx(steps)) >= Math.round(wall_3_position.bottom) && Math.round(char_position.left) >= Math.round(wall_3_position.left) && (Math.round(char_position.bottom) >= Math.round(wall_2_position.top) && Math.round(char_position.top) <= Math.round(wall_3_position.bottom)))) /**wall 4 */|| (char_position.top + vhVwToPx(steps) >= wall_4_position.bottom && char_position.right < wall_4_position.right && (Math.round(char_position.bottom) >= Math.round(wall_5_position.top) && Math.round(char_position.top) <= Math.round(wall_4_position.bottom))) /**wall 5 */ || ((Math.round(char_position.top + vhVwToPx(steps)) >= Math.round(wall_5_position.bottom) && Math.round(char_position.left) >= Math.round(wall_5_position.left) && (Math.round(char_position.bottom) >= Math.round(wall_4_position.top) && Math.round(char_position.top) <= Math.round(wall_5_position.bottom)))) /**wall 6*/ || (char_position.top + vhVwToPx(steps) >= wall_6_position.bottom && char_position.right < wall_6_position.right && (Math.round(char_position.bottom) >= Math.round(wall_7_position.top) && Math.round(char_position.top) <= Math.round(wall_6_position.bottom))) /**wall 7 */ || ((Math.round(char_position.top + vhVwToPx(steps)) >= Math.round(wall_7_position.bottom) && Math.round(char_position.left) >= Math.round(wall_7_position.left) && (Math.round(char_position.bottom) >= Math.round(wall_6_position.top) && Math.round(char_position.top) <= Math.round(wall_7_position.bottom)))) /**wall 8 */ || (char_position.top + vhVwToPx(steps) >= wall_8_position.bottom && char_position.right < wall_8_position.right && (Math.round(char_position.top) <= Math.round(wall_8_position.bottom)))))
        {
            // this is essentially a bunch of statements that check if the player is running into a wall or not for level 3, there is probably an easier way to do this but this was my first thought.
        }
        else // move up, nothing blocking the player
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
    if(level3)
    {
        wall_1_position = document.getElementById("wall1").getBoundingClientRect();
        wall_2_position = document.getElementById("wall2").getBoundingClientRect();
        wall_3_position = document.getElementById("wall3").getBoundingClientRect();
        wall_4_position = document.getElementById("wall4").getBoundingClientRect();
        wall_5_position = document.getElementById("wall5").getBoundingClientRect();
        wall_6_position = document.getElementById("wall6").getBoundingClientRect();
        wall_7_position = document.getElementById("wall7").getBoundingClientRect();
        wall_8_position = document.getElementById("wall8").getBoundingClientRect();
    }
    if(level2)
    {
        wall_9_position = document.getElementById("wall9").getBoundingClientRect();
        wall_10_position = document.getElementById("wall10").getBoundingClientRect();
        wall_11_position = document.getElementById("wall11").getBoundingClientRect();
        wall_12_position = document.getElementById("wall12").getBoundingClientRect();
        wall_13_position = document.getElementById("wall13").getBoundingClientRect();
    }
    

    // end_position doesn't need to update since it should be the same

    // next compare char_position to the end_goal to check if the player made it to the end!
    if((Math.round(char_position.top) == Math.round(end_position.top) && Math.round(char_position.left) == Math.round(end_position.left)))
    {
        // clear the set interval
        clearInterval(goal_interval);
        clearInterval(time_interval);
        goal_interval = null;
        time_interval = null;
        // make win screen visible
        if(level3) // player beat the game!!
        {
             // REMINDER: MAKE A WINNING SCREEN FOR BEATING THE GAME!!!  
            document.getElementById("beat").style.visibility = "visible";

        }
        else // continue screen
        {
            document.getElementById("won").style.visibility = "visible";
        }
        // REMINDER: MAKE A WINNING SCREEN FOR BEATING THE GAME!!!  
        // event listener for yes and no buttons

        document.getElementById("continue").addEventListener("click", e=>{
            // in this function, the winning screen would be made hidden, and the next level would be call
            // have a function that sets up the level
            document.getElementById("won").style.visibility = "hidden";
            
            if(!(level2))
            {
                level2 = true; // flag for level 2
                document.getElementById("level2").style.visibility = "visible"; // makes level 2 visible
                time_interval = setInterval(() =>{
                    time_left--;
                    if(time_left >= 0)
                    {
                        document.getElementById("time").innerHTML = time_left;
                    }
                }, 1000);
                goal_interval = setInterval(() =>{
                    endGoal();
                }, 100);
            }
            else if(!(level3)) // checks if player has reached level 3 yet
            {
                level3 = true; // flag for level 3
                document.getElementById("level2").style.visibility = "hidden"; // makes level 2 hidden
                document.getElementById("level3").style.visibility = "visible"; // makes level 3 visible
                // sets up the timer and checking if the player has made it
                // if the interval is placed outside the if statement, it will call itself twice and make the timer go down by 2 each second, hence why it's inside here. :)
                time_interval = setInterval(() =>{
                    time_left--;
                    if(time_left >= 0)
                    {
                        document.getElementById("time").innerHTML = time_left;
                    }
                }, 1000);
                goal_interval = setInterval(() =>{
                    endGoal();
                }, 100);

            }
            

            reset();
        })

        document.getElementById("no").addEventListener("click", e=>{
            // will close the game if player chooses no
            // kick them out!
            document.getElementById("won").style.visibility = "hidden";
            document.getElementById("leave").style.visibility = "visible";
            self.close();
        })
        // need to reset the level and prompt the player to continue
    }

    if(time_left == 0)
    {
        // lost screen is visible
        clearInterval(goal_interval);
        clearInterval(time_interval);
        document.getElementById("lost").style.visibility = "visible";

        document.getElementById("again").addEventListener("click", e=>{
            // in this function, the winning screen would be made hidden, and the next level would be call
            // have a function that sets up the level
            document.getElementById("lost").style.visibility = "hidden";

            setUp();
            reset();
        })

        document.getElementById("exit").addEventListener("click", e=>{
            // will close the game if player chooses no
            // kick them out!
            // in case the game doesnt kick them out, it will to the player to exit the page.
            document.getElementById("won").style.visibility = "hidden";
            document.getElementById("leave").style.visibility = "visible";
            self.close();
        })
    }

    // more to be done with this function!!!
}

// function that sets up interval for the timer and checking the goal
function setUp()
{
    // will set up the intervals
    time_interval = setInterval(() =>{
        time_left--;
        if(time_left >= 0)
        {
            document.getElementById("time").innerHTML = time_left;
        }
    }, 1000);
    goal_interval = setInterval(() =>{
        endGoal();
    }, 100);
}

// to get the timer going!
time_interval = setInterval(() =>{
    time_left--;
    if(time_left >= 0)
    {
        document.getElementById("time").innerHTML = time_left;
    }
}, 1000);
goal_interval = setInterval(() =>{
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