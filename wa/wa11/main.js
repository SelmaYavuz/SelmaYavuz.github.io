const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alt = ["black long hair cat on a sidewalk", "white and brown long hair cat next to a sink", "grey shorthair cat on sidewalk", "black shorthair cat", "grey long hair cat relaxing"];
/* Looping through images */

for(i = 0; i < 5; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/" + pics[i]);
    newImage.setAttribute('alt', alt[i]);
    thumbBar.appendChild(newImage);

    // event listener
    newImage.addEventListener('click', function(e){
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
        // target gets the current value of the input
    })
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function(){
    // getting the class
    const current_class = btn.getAttribute("class");
    if(current_class == "dark") // checking if class is dark
    {
        // since class is dark, must change class to light, and darken the image.
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)"
    }
    else // if it's not dark
    {
        // change class to dark and lighten the image (no dark overlay)
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)"
    }
})