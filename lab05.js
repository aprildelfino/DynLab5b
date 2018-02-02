var inpNum = document.getElementById("num");
var guess = document.getElementById("guess");
var text = document.getElementById("display");
var answer = Math.round(Math.random()*100);
var score = 100;
//Math is number between 0-1 but *100 is 1-100

guess.addEventListener("click", function () {
    //console.log(parseInt("10")+1);
    var realNum = parseInt(inpNum.value);
    
    if (realNum == answer){
        text.innerHTML = "You are amazing!<br> Score:"+score;
    }
    else {
        text.innerHTML = "You suck";
        if(realNum > answer){
            text.innerHTML = "lol too big";
        } else if(realNum < answer){
            text.innerHTML = "go up";
        }
        score = score - 1;
        //else if is used for the second if
    }
});