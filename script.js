// document.cookie = "score=0";
var score = 0;
var cursorcost = 15;
var cursors = 0;
var clickspersecond = 0;
var multiplier = 1;
var multiplierCost = 100;
var multiplierowned = 0;

var bmans = 0;
var bmancost = 300;
var bmanshired = 0;

var mines = 0;
var minecost = 1000;

var RobCost = 5000;
var deposit = 0;
var BanksRobbed = 0;

var buildings = 0;
var buildingcost = 10000;

var rocketsOwned = 0;
var rocketCost = 20000;
var rockets = 0;
function cursorstyle1(){
    if (score >= 1000){
        document.body.style.cursor = "url(http://bringerp.free.fr/Files/RotMG/cursor.gif), pointer";
        score -= 1000;
    }

}
function cursorstyle2(){
    if (score >= 10){
        document.body.style.cursor = "url(cursor-3-32.gif), pointer";
        score -= 10;
    }else{
        alert("You cannot afford this beautiful cursor yet! :-(")
    }
}
function cursorstyle3(){
    if (score >= 10){
        document.body.style.cursor = "url(pin-6-32.png), pointer";
        score -= 10;
    }else{
        alert("You cannot afford this beautiful cursor yet! :-(")
    }
}
function cursorstyle4(){
    if (score >= 10){
        document.body.style.cursor = "url(cursor-3-32.png), pointer";
        score -= 10;
    }else{
        alert("You cannot afford this beautiful cursor yet! :-(")
    }
}
function cursorstyle5(){
    if (score >= 10){
        document.body.style.cursor = "url(https://www.cursor.cc/cursor/181/10/cursor.png), pointer";
        score -= 10;
    }else{
        alert("You cannot afford this beautiful cursor yet! :-(")
    }
}
function cursorstyle6(){
    if (score >= 10){
        document.body.style.cursor = "url(https://th.bing.com/th/id/R.76bd303ed4e8e0ab03c66f3fc9635659?rik=ccYf0qZavCje7g&riu=http%3a%2f%2fcursors4.totallyfreecursors.com%2fthumbnails%2f1pointer63.gif&ehk=gURt7TrV9H%2fVqD6WrztABKk37Et4LjlOOYJaY1VSNp4%3d&risl=&pid=ImgRaw&r=0), pointer";
        score -= 10;
    }else{
        alert("You cannot afford this beautiful cursor yet! :-(")
    }
}
function cursorstyle7(){
    if (score >= 10){
        document.body.style.cursor = "url(https://www.cursor.cc/cursor/649/1/cursor.png), pointer";
        score -= 10;
    }else{
        alert("You cannot afford this beautiful cursor yet! :-(")
    }
}
function autoclick(){
    if (score > cursorcost){
        cursors = cursors + 1;
        clickspersecond = clickspersecond + 1;
        document.getElementById('cps').innerHTML = clickspersecond;
        score = score - cursorcost;
        cursorcost =  Math.round(cursorcost * 1.15);
        document.getElementById("cursorcost").innerHTML = cursorcost;
        document.getElementById("cursors").innerHTML = cursors;
        document.getElementById("score").innerHTML = score;
        var img = document.createElement('img');
        img.src = 'https://th.bing.com/th/id/R.3d895e39604fb76fa0103f8959468b6d?rik=r8yOXURhBrXIYQ&pid=ImgRaw&r=0';
        img.style.width = '25px';
        img.style.height = '25px';
        document.getElementById('autoc').appendChild(img);
        var audio = document.createElement('audio');
        audio.src = '91924__benboncan__till-with-bell.wav';
        audio.play();
    }
}
function times2(){
    if (score > multiplierCost){
        score = score - multiplierCost;
        multiplierowned += 1;
        multiplier = multiplier + 1;
        multiplierCost = Math.round(multiplierCost * 1.15);
        document.getElementById("multiplierCost").innerHTML = multiplierCost;
        document.getElementById("multiplierowned").innerHTML = multiplierowned;
        document.getElementById("score").innerHTML = score;
        var img = document.createElement('img'); 
        img.src = 'https://th.bing.com/th/id/R.8709b0da00cae07e1da04024f9f07d80?rik=3%2ba1Gl5an2uS8g&riu=http%3a%2f%2fwww.vantagefilm.com%2ffile%2fedee%2fdownloads%2flogos%2f2x.png&ehk=Oq3sAOedRXxRUe2T9UAVgCKZs%2fMtW43BKQi%2f7widOys%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'; 
        img.style.width = '25px';
        img.style.height = '25px';
        document.getElementById('x2').appendChild(img);
        var audio = document.createElement('audio');
        audio.src = '91924__benboncan__till-with-bell.wav';
        audio.play();
    }
}
function scoreAdded(amount){
    score = score + (amount*multiplier);
    document.getElementById("score").innerHTML = score;
}
function bman(){
    if (score >= bmancost){
        bmans = bmans + 5;
        clickspersecond = clickspersecond + 5;
        document.getElementById('cps').innerHTML = clickspersecond;
        bmanshired += 1;
        score = score - bmancost;
        bmancost = Math.round(bmancost * 1.15);
        document.getElementById("bmancost").innerHTML = bmancost;
        document.getElementById("bmanshired").innerHTML = bmanshired;
        document.getElementById("score").innerHTML = score;
        var img = document.createElement('img'); 
        img.src = 'https://th.bing.com/th/id/R.425c80cd0ae7438db8422c221a1a73dd?rik=kwDBgZam3UrL9A&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_548737.png&ehk=Pqvg6omtYcAQH4qeeV7W4%2f3YjukcQPBKg1WayYpUjgM%3d&risl=&pid=ImgRaw&r=0'; 
        img.style.width = '25px';
        img.style.height = '25px';
        // document.getElementById('img').style.left=150;
	    document.getElementById('bman').appendChild(img);
        var audio = document.createElement('audio');
        audio.src = '91924__benboncan__till-with-bell.wav';
        audio.play();
    }
}
 function RobBank(){
   if (score >= RobCost){
       deposit = deposit + 500;
       clickspersecond = clickspersecond + 500;
       document.getElementById('cps').innerHTML = clickspersecond;
       BanksRobbed += 1;
       score = score - RobCost;
       RobCost = Math.round(RobCost * 1.15);
       document.getElementById("RobCost").innerHTML = RobCost;
       document.getElementById("BanksRobbed").innerHTML = BanksRobbed;
       document.getElementById("score").innerHTML = score;
       var img = document.createElement('img'); 
       img.src = 'https://cdn.discordapp.com/attachments/915424661842559056/925167617696759818/bank-emoji-clipart-md.png'; 
       img.style.width = '25px';
       img.style.height = '25px';
         // document.getElementById('img').style.left=150;
 	   document.getElementById('bank').appendChild(img);
        var audio = document.createElement('audio');
        audio.src = '91924__benboncan__till-with-bell.wav';
        audio.play();
     }
 }

var mineowed = 0;
function mine(){
    if (score >= minecost){
        mines = mines + 50;
        clickspersecond = clickspersecond + 50;
        document.getElementById('cps').innerHTML = clickspersecond;
        score = score - minecost;
        mineowed = mineowed + 1;
        minecost = Math.round(minecost * 1.15);
        document.getElementById("minecost").innerHTML = minecost;
        document.getElementById("mineowed").innerHTML = mineowed;
        document.getElementById("score").innerHTML = score;
        var img = document.createElement('img'); 
        img.src = 'https://cdn.discordapp.com/attachments/915424661842559056/925165761557843978/marengo-mining-clipart-limited-7.png'; 
        img.style.width = '25px';
        img.style.height = '25px';
        // document.getElementById('img').style.left=150;
	    document.getElementById('mine').appendChild(img);
        var audio = document.createElement('audio');
        audio.src = '91924__benboncan__till-with-bell.wav';
        audio.play();
    }
}

var buildingowed = 0;
function building(){
    if (score >= buildingcost){
        buildings = buildings + 5000;
        clickspersecond = clickspersecond + 5000;
        document.getElementById('cps').innerHTML = clickspersecond;
        score = score - buildingcost;
        buildingowed = buildingowed + 1;
        buildingcost = Math.round(buildingcost * 1.15);
        document.getElementById("buildingcost").innerHTML = buildingcost;
        document.getElementById("buildingowed").innerHTML = buildingowed;
        document.getElementById("score").innerHTML = score;
        var img = document.createElement('img'); 
        img.src = 'https://cdn.discordapp.com/attachments/915424661842559056/925184352634155028/R.png'; 
        img.style.width = '25px';
        img.style.height = '25px';
        // document.getElementById('img').style.left=150;
	    document.getElementById('building').appendChild(img);
        // setInterval(function(){
        // }, 2000);
        var audio = document.createElement('audio');
        audio.src = '91924__benboncan__till-with-bell.wav';
        audio.play();
    }
}

function rocket(){
    if (score >= rocketCost){
       rockets = rockets + 10000;
       clickspersecond = clickspersecond + 10000;
       document.getElementById('cps').innerHTML = clickspersecond;
       rocketsOwned += 1;
       score = score - rocketCost;
       rocketCost = Math.round(rocketCost * 1.15);
       document.getElementById("rocketCost").innerHTML = rocketCost;
       document.getElementById("rocketsOwned").innerHTML = rocketsOwned;
       document.getElementById("score").innerHTML = score;
       var img = document.createElement('img'); 
       img.src = 'https://cdn.onlinewebfonts.com/svg/img_452053.png'; 
       img.style.width = '25px';
       img.style.height = '25px';
         // document.getElementById('img').style.left=150;
 	   document.getElementById('rocket').appendChild(img);
        var audio = document.createElement('audio');
        audio.src = '91924__benboncan__till-with-bell.wav';
        audio.play();
     }
}
var elons = 0;
var elonmuskcost = 100000;
var elonsowned = 0;
function elonmuskbuy(){
    if (score >= elonmuskcost){
        elons = elons + 50000; 
        clickspersecond = clickspersecond + 50000;
        document.getElementById('cps').innerHTML = clickspersecond;
        elonsowned += 1;
        score = score - elonmuskcost;
        elonmuskcost = Math.round(elonmuskcost * 1.15);
        document.getElementById("eloncost").innerHTML = elonmuskcost;
        document.getElementById("elonowned").innerHTML = elonsowned;
        document.getElementById("score").innerHTML = score;
        var img = document.createElement('img'); 
        img.src = 'https://th.bing.com/th/id/R.43e969979dfd8ae4b364f517571aee58?rik=iBJuUmfu9wwg8Q&pid=ImgRaw&r=0'; 
        img.style.width = '25px';
        img.style.height = '25px';
        document.getElementById('elonid').appendChild(img);
        var audio = document.createElement('audio');
        audio.src = '91924__benboncan__till-with-bell.wav';
        audio.play();
    }
}

var lotteriess=0;
var lotterycost=4000;
var lotteryowned=0
function Lottery(){
    var randomnum = Math.floor(Math.random()*5)+1;
    if (score >= lotterycost){
        score = score - lotterycost;
        var img = document.createElement('img'); 
        img.src = 'https://media.discordapp.net/attachments/915424661842559056/925196406308876329/latest.png';
        img.style.width = '25px';
        img.style.height = '25px';
        document.getElementById('lotter').appendChild(img);
        var audio = document.createElement('audio');
        audio.src = '91924__benboncan__till-with-bell.wav';
        audio.play();
        if(randomnum === 1){
            lotteriess = lotteriess + 50000;
            score += lotteriess;
            lotteryowned += 1;
            document.getElementById("lotterycost").innerHTML = lotterycost;
            document.getElementById("lotteryowned").innerHTML = lotteryowned;
            document.getElementById("score").innerHTML = score;
        }
    }
}
function saveGame(){
    var gameSave = {
        score : score,
        clickspersecond : clickspersecond,
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}
setInterval(function(){
    score += clickspersecond;
    document.getElementById("score").innerHTML = score;
}, 1000);
setInterval(function(){
    saveGame();
}, 30000);

function first(){
    score -= 350;
    var chance = Math.random(1,100)*100;
    chance = Math.round(chance);
    console.log(chance)
    if (chance >= 50){
        score += Math.random(360,700)*100;
    }if(chance >= 25 && chance < 50){
        score += Math.random(330,350)*100;
    }if(chance < 25){
        alert("Clipvidia has crashed! General sell-off has forced you to panic sell");
        score += Math.random(200,250)*100;
    }
    score=Math.round(score);
}

function second(){
    score -= 350;
    var chance = Math.random(1,100)*100;
    chance=Math.round(chance);
    console.log(chance)
    if (chance >= 70){
        score += Math.random(440,700)*100;
    }if(chance >= 50 && chance < 70){
        score += Math.random(330,350)*100;
    }if(chance < 50){
        alert("Clipvidia has crashed! General sell-off has forced you to panic sell");
        score += Math.random(150,225)*100;
    }
    score=Math.round(score);
}
function third(){
    score -= 350;
    var chance = Math.random(1,100)*100;
    chance=Math.round(chance);
    console.log(chance)
    if (chance >= 90){
        score += Math.random(500,700)*100;
    }if(chance > 70 && chance < 90){
        score += Math.random(330,350)*100;
    }if(chance < 70){
        alert("Clipvidia has crashed! General sell-off has forced you to panic sell");
        score += Math.random(100,200)*100;
    }    
    score=Math.round(score);
}

function fourth(){
    score -= 500;
    var chance = Math.random(1,100)*100;
    chance = Math.round(chance);
    console.log(chance)
    if (chance >= 55){
        score += Math.random(550,800)*100;
    }if(chance >= 25 && chance < 50){
        score += Math.random(400,500)*100;
    }if(chance < 25){
        alert("Clapple has crashed! General sell-off has forced you to panic sell");
        score += Math.random(200,300)*100;
    }
    score=Math.round(score);
}
function fifth(){
    score -= 500;
    var chance = Math.random(1,100)*100;
    chance = Math.round(chance);
    console.log(chance)
    if (chance >= 70){
        score += Math.random(600,800)*100;
    }if(chance >= 25 && chance < 50){
        score += Math.random(400,500)*100;
    }if(chance < 25){
        alert("Clapple has crashed! General sell-off has forced you to panic sell");
        score += Math.random(150,250)*100;
    }
    score=Math.round(score);
}
function sixth(){
    score -= 500;
    var chance = Math.random(1,100)*100;
    chance = Math.round(chance);
    console.log(chance)
    if (chance >= 80){
        score += Math.random(700,800)*100;
    }if(chance >= 25 && chance < 50){
        score += Math.random(400,500)*100;
    }if(chance < 25){
        alert("Clapple has crashed! General sell-off has forced you to panic sell");
        score += Math.random(100,200)*100;
    }
    score=Math.round(score);
}
function seven(){
    score -= 1000;
    var chance = Math.random(1,100)*100;
    chance = Math.round(chance);
    console.log(chance)
    if (chance >= 85){
        score += Math.random(1500,2000)*100;
    }if(chance >= 25 && chance < 50){
        score += Math.random(600,700)*100;
    }if(chance < 25){
        alert("Clipto has crashed! General sell-off has forced you to panic sell");
        score += Math.random(50,150)*100;
    }
    score=Math.round(score);
}
function eight(){
    score -= 1000;
    var chance = Math.random(1,100)*100;
    chance = Math.round(chance);
    console.log(chance)
    if (chance >= 90){
        score += Math.random(2300,2500)*100;
    }if(chance >= 40 && chance < 65){
        score += Math.random(400,500)*100;
    }if(chance < 40){
        alert("Clipto has crashed! General sell-off has forced you to panic sell");
        score += Math.random(25,75)*100;
    }
    score=Math.round(score);
}
function nine(){
    score -= 500;
    var chance = Math.random(1,100)*100;
    chance = Math.round(chance);
    console.log(chance)
    if (chance >= 95){
        score += Math.random(3000,5000)*100;
    }if(chance >= 50 && chance < 95){
        score += Math.random(200,300)*100;
    }if(chance < 25){
        alert("Clipto has crashed! General sell-off has forced you to panic sell");
        score += Math.random(100,200)*100;
    }
    score=Math.round(score);
}

function play(){
    var audio=new Audio('Cash_Register_-_Sound_Effect.mp3');
    audio.play();
}
play();