
let comic = {};
const displayedComic = document.querySelector('comic');

// plan
// use random num gen to get random num for comic displayed, use fetch with that number, then using the response, change the img and alt in the html to the given response.

function getComic(){
    // let num = Math.floor(Math.random() * 3000) + 1;
    fetch(`https://xkcd.com/${Math.floor(Math.random() * 3000) + 1}/info.0.json`)
        .then(res =>{
            if(res.ok){
                console.log(res.alt);
                return res.json();
            }
            else{
                console.log(res);
            }
        }) .then(res =>{
                comic = res;
                displayedComic.src = comic.src;
                displayedComic.src = comic.alt;
                document.getElementById("title").innerHTML = comic.safe_title;
                document.getElementById("date").innerHTML = `${comic.month}/${comic.day}/${comic.year}`;
                // comic = res;
                // document.getElementById("comic").setAttribute('src', comic.img);
                // document.getElementById("comic").setAttribute('alt', comic.alt);
        })
        .catch(error => {console.log(error)})
}

document.getElementById("generate").addEventListener("click", e=> {getComic();})
