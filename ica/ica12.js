let myData = {};

function getJoke(){
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
        .then(res =>{
            if(res.ok){
                return res.json();
            }
            else{
                console.log(res);
            }
        }) .then(res =>{
            displayRes(res);
            // myData = res;
            // document.getElementById("paragraph").innerHTML = myData.joke;
        })
        .catch(error => {
            console.log(error)
            alert("Error!");
        })
}

function displayRes(e){
    myData = e;
    document.getElementById("paragraph").innerHTML = myData.joke;
}

document.getElementById("generate").addEventListener("click", e=> {getJoke();})
