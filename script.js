var timer = 60;
var score = 0;
var hitrn = 0;

//EVENT BUBBLING: JIS PY CLICK KROGY WOH ELEMENT PAR EVENT RAISE HOGA AUR EVENT LISTENER NA MILNY PAR EVENT ELEMENT KY PARENT PAR LISTENER DEYGA WAHN BHI NA MILNY PAR EVENT PARENT KY PARENT PAR LISTENER DHUNDEYGA


function increaseScore(){
    score+= 10;
    document.querySelector(".scoreval").innerHTML = score;
}

function makeBubble() {
    var clutter = " ";
    for (var i = 1; i <= 160; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer() {
    var timeint = setInterval(function () {
        if (timer > 0) {
            
            timer--;
            document.querySelector(".timer-value").innerHTML = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbottom").innerHTML = `<h1>GAME OVER</h1>`;
        }
    }, 1000);
}

function hitChange(){
    hitrn = Math.floor(Math.random()*10);
    for(var i = 1; i<=hitrn; i++){
        document.querySelector(".hit-value").innerHTML = hitrn;
    }
}

document.querySelector("#pbottom").addEventListener("click", function(dets){
    var clickedNum = (Number(dets.target.textContent));
    if(clickedNum===hitrn){
        increaseScore();
        makeBubble();
        hitChange();
    }
});

runTimer();
makeBubble();
hitChange();
