let comic = {};

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
                document.getElementById("comic").setAttribute('src', comic.img);
                document.getElementById("comic").setAttribute('alt', comic.alt);
        })
        .catch(error => {console.log(error)})
}

document.getElementById("generate").addEventListener("click", e=> {getComic();})
