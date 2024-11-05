
let paragraph = "";

function tellFortune(children, partner_name, location, job_title)
{
     paragraph = "You will be a " + job_title + " in " + location + ", and married to " + partner_name + " with " + children + " kids.";
     return paragraph;
}

paragraph = tellFortune("40", "bob", "the moon", "astronaut");
document.getElementById("my_para").innerHTML = paragraph;

paragraph = tellFortune("0", "Tyler", "Jupiter", "Chef");
document.getElementById("my_para_2").innerHTML = paragraph;

paragraph = tellFortune("2", "Francis", "Texas", "Animator");
document.getElementById("my_para_3").innerHTML = paragraph;


// calculate dog age 

function calculateDogAge(puppy_age)
{
    let dog_years = puppy_age * 7;
    return "Your doggie is " + dog_years + " years old in dog years!";
}

document.getElementById("my_para_4").innerHTML = calculateDogAge(8);
document.getElementById("my_para_5").innerHTML = calculateDogAge(4);
document.getElementById("my_para_6").innerHTML = calculateDogAge(12);

// reverse number

function reverseNumber(number)
{
    // make array of each individual number
    let length = number.length;
    let arr = [];
    let reverse_number = [];
    let string_num = "";

    for(let i = 0; i < length; i++)
    {
        arr.push(number[i]);
    }

    // now reverse the number

    for(let i = length - 1; i >= 0; i--)
    {
        reverse_number.push(arr[i]);
    }

    for(let i = 0; i < length; i++)
    {
        string_num += reverse_number[i];
    }
    return string_num;
}

// console.log(reverseNumber("1234"));

document.getElementById("my_para_7").innerHTML = "input: 1234 " + "output: " + reverseNumber("1234");
document.getElementById("my_para_8").innerHTML = "input: 6789 " + "output: " + reverseNumber("6789");
document.getElementById("my_para_9").innerHTML = "input: 54933 " + "output: " + reverseNumber("54933");


// alphbetical order function

function alphabeticalOrder(word)
{
    let arr = [];
    let length = word.length;
    let alphabetical_word = "";

    for(i = 0; i < length; i++)
    {
        arr.push(word[i]);
    }

    // now compare character sizes
    for(i = 0; i < length; i++)
    {
        for(j = 0; j < length; j++)
        {
            if(arr[i] < arr[j])
            {
                let holder = arr[j];
                arr[j] = arr[i];
                arr[i] = holder;
            }
        }
    }

    for(i = 0; i < length; i++)
    {
        alphabetical_word += arr[i];
    }

    return alphabetical_word;
}

console.log(alphabeticalOrder("webmaster"));


document.getElementById("my_para_10").innerHTML = "input: webmaster " + "output: " + alphabeticalOrder("webmaster");
document.getElementById("my_para_11").innerHTML = "input: happy " + "output: " + alphabeticalOrder("happy");
document.getElementById("my_para_12").innerHTML = "input: sandwich " + "output: " + alphabeticalOrder("sandwich");

// lower to upper function

function lowerToUpper(word) 
{
    // make given parameter array, and the make the string in each position have uppercase at position 0
   let word_2 = "";
   word_2 = word;
   let word_3 = word_2.split(" ");
   let length = word_3.length;

   

   for(i=0; i < length; i++)
   {
        word_3[i] = word_3[i][0].charAt(0).toUpperCase() + word_3[i].substring(1);
   }

   word_3 = word_3.join(" ");

   return word_3;
}

    document.getElementById("my_para_13").innerHTML = "input: hello how are you" + "output: " + lowerToUpper("hello how are you");
    document.getElementById("my_para_14").innerHTML = "input: spooky scary skeletons" + "output: " + lowerToUpper("spooky scary skeletons");

