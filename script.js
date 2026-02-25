function tmCalculator() {
    window.location="index3.html";
}
function smCalculator() {
    window.location="index4.html";
}

function tmTimer() {
    window.location="index.html";
    match = 1;
    a = 1;
    countdown = 3;
    document.getElementById('periodDisplay').innerHTML="Autonomous:";
    document.getElementById('tTimerDisplay').innerHTML = "00:15";
    document.getElementById('tOfMatch').innerHTML="Normal Match";
    document.getElementById('startT').innerHTML="Start Autonomous";
    document.getElementById('pProtection').innerHTML="";
}

function smTimer() {
    window.location="index2.html";
    document.getElementById('tTimerDisplay').innerHTML = "01:00";
    document.getElementById('sPeriodDisplay').innerHTML="Skills:";
    sMin = 1;
    sSec = 0;
    sCountdown = 3;
}

a = 1;
match = 1;
countdown = 3;

function aOnly(){
    match = 3;
    a = 1;
    countdown = 3;
    document.getElementById('periodDisplay').innerHTML="Autonomous:";
    document.getElementById('tTimerDisplay').innerHTML = "00:15";
    document.getElementById('tOfMatch').innerHTML="Autonomous Only";
    document.getElementById('startT').innerHTML="Start Autonomous";
    document.getElementById('pProtection').innerHTML="";
}

function tOnly(){
    match = 2;
    a = 2;
    countdown = 3;
    document.getElementById('periodDisplay').innerHTML="Driver Control:";
    document.getElementById('tTimerDisplay').innerHTML = "01:45";
    document.getElementById('tOfMatch').innerHTML="Teamwork Only";
    document.getElementById('startT').innerHTML="Start Teamwork";
    document.getElementById('pProtection').innerHTML="";
}

function nMatch(){
    match = 1;
    a = 1;
    countdown = 3;
    document.getElementById('periodDisplay').innerHTML="Autonomous:";
    document.getElementById('tTimerDisplay').innerHTML = "00:15";
    document.getElementById('tOfMatch').innerHTML="Normal Match";
    document.getElementById('startT').innerHTML="Start Autonomous";
    document.getElementById('pProtection').innerHTML="";
}

//https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
//https://www.delftstack.com/howto/javascript/play-audio-javascript/
countDownNoise = new Audio('Countdown.m4a');
startSound = new Audio("Start Sound.m4a");
stopSound = new Audio("Stop Sound.m4a");

function startT() {
    if(match == 1){
        timer = setInterval(function () {
            if(countdown > 0){
                countDownNoise.play();
                document.getElementById('periodDisplay').innerHTML="Countdown:";
                document.getElementById('tTimerDisplay').innerHTML=countdown;
                countdown--;
                min = 0;
                sec = 15;
            }
            else{
                if(a === 1){
                    if (sec === 0) {
                        stopSound.play();
                        document.getElementById('tTimerDisplay').innerHTML = "00:00";
                        clearInterval(timer);
                        a = 2;
                        min = 1;
                        sec = 45;
                        document.getElementById('startT').innerHTML="Start Teamwork";
                        return;
                    }
                    if(sec >= 10){
                        document.getElementById('tTimerDisplay').innerHTML="00:"+sec;
                    }
                    else{
                        document.getElementById('tTimerDisplay').innerHTML="00:0"+sec;
                    }
                    if (sec === 15) {
                        startSound.play();
                        document.getElementById('periodDisplay').innerHTML="Autonomous:";
                    }
                    sec--;
                }
                else{
                    if (min === 0 && sec === 0) {
                        stopSound.play();
                        document.getElementById('tTimerDisplay').innerHTML = "00:00";
                        clearInterval(timer);
                        a = 1;
                        document.getElementById('startT').innerHTML="Start Autonomous";
                        document.getElementById('pProtection').innerHTML="";
                        countdown = 3;
                        return;
                    }
                    if(sec >= 10){
                        document.getElementById('tTimerDisplay').innerHTML="0"+min+":"+sec;
                    }
                    else{
                        document.getElementById('tTimerDisplay').innerHTML="0"+min+":0"+sec;
                    }
                    if (min === 1 && sec === 45) {
                        document.getElementById('periodDisplay').innerHTML="Driver Control:";
                        startSound.play();
                    }
                    if (min === 0 && sec === 20) {
                        document.getElementById('pProtection').innerHTML="Parking Protected";
                    }
                    sec--;
                    if (sec < 0 && min > 0) {
                        min--;
                        sec = 59;
                    }
                }
            }
        }, 1000);
    }
    else if(match == 2){
        timer = setInterval(function () {
            if(countdown > 0){
                countDownNoise.play();
                document.getElementById('periodDisplay').innerHTML="Countdown:";
                document.getElementById('tTimerDisplay').innerHTML=countdown;
                countdown--;
                min = 1;
                sec = 45;
            }
            else{
                if (min === 0 && sec === 0) {
                    stopSound.play();
                    document.getElementById('tTimerDisplay').innerHTML = "00:00";
                    clearInterval(timer);
                    document.getElementById('startT').innerHTML="Start Teamwork";
                    document.getElementById('periodDisplay').innerHTML="Driver Control:";
                    document.getElementById('pProtection').innerHTML="";
                    countdown = 3;
                    return;
                }
                if(sec >= 10){
                    document.getElementById('tTimerDisplay').innerHTML="0"+min+":"+sec;
                }
                else{
                    document.getElementById('tTimerDisplay').innerHTML="0"+min+":0"+sec;
                }
                if (min === 1 && sec === 45) {
                    document.getElementById('periodDisplay').innerHTML="Driver Control:";
                    startSound.play();
                }
                if (min === 0 && sec === 20) {
                    document.getElementById('pProtection').innerHTML="Parking Protected";
                }
                sec--;
                if (sec < 0 && min > 0) {
                    min--;
                    sec = 59;
                }
            }
        }, 1000);
    }
    else{
        timer = setInterval(function () {
            if(countdown > 0){
                countDownNoise.play();
                document.getElementById('periodDisplay').innerHTML="Countdown:";
                document.getElementById('tTimerDisplay').innerHTML=countdown;
                countdown--;
                min = 0;
                sec = 15;
            }
            else{
                if (sec === 0) {
                    stopSound.play();
                    document.getElementById('tTimerDisplay').innerHTML = "00:00";
                    clearInterval(timer);
                    document.getElementById('startT').innerHTML="Start Autonomous";
                    min = 0;
                    sec = 15;
                    countdown = 3;
                    return;
                }
                    if(sec >= 10){
                        document.getElementById('tTimerDisplay').innerHTML="00:"+sec;
                    }
                    else{
                        document.getElementById('tTimerDisplay').innerHTML="00:0"+sec;
                    }
                    if (sec === 15) {
                        startSound.play();
                        document.getElementById('periodDisplay').innerHTML="Autonomous:";
                    }
                    sec--;
            }
        }, 1000);
    }
}

function sRT(){
    clearInterval(timer);
    if(match == 1){
        min = 0;
        sec = 15;
        a = 1;
        countdown = 3;
        document.getElementById('periodDisplay').innerHTML="Autonomous:";
        document.getElementById('tTimerDisplay').innerHTML = "00:15";
        document.getElementById('tOfMatch').innerHTML="Normal Match";
        document.getElementById('startT').innerHTML="Start Autonomous";
        document.getElementById('pProtection').innerHTML="";
    }
    else if(match == 2){
        min = 1;
        sec = 45;
        a = 2;
        countdown = 3;
        document.getElementById('periodDisplay').innerHTML="Driver Control:";
        document.getElementById('tTimerDisplay').innerHTML = "01:45";
        document.getElementById('tOfMatch').innerHTML="Teamwork Only";
        document.getElementById('startT').innerHTML="Start Teamwork";
        document.getElementById('pProtection').innerHTML="";
    }
    else{
        min = 0;
        sec = 15;
        a = 1;
        countdown = 3;
        document.getElementById('periodDisplay').innerHTML="Autonomous:";
        document.getElementById('tTimerDisplay').innerHTML = "00:15";
        document.getElementById('tOfMatch').innerHTML="Autonomous Only";
        document.getElementById('startT').innerHTML="Start Autonomous";
        document.getElementById('pProtection').innerHTML="";
    }
}

sMin = 1;
sSec = 0;
sCountdown = 3;

function startS(){
    sTimer = setInterval(function () {
        if(sCountdown > 0){
            countDownNoise.play();
            document.getElementById('sPeriodDisplay').innerHTML="Countdown:";
            document.getElementById('sTimerDisplay').innerHTML=sCountdown;
            sCountdown--;
            sMin = 1;
            sSec = 0;
        }
        else{
            if (sMin === 0 && sSec === 0) {
                stopSound.play();
                document.getElementById('sTimerDisplay').innerHTML = "00:00";
                clearInterval(sTimer);
                sCountdown = 3;
                sMin = 1;
                sSec = 0;
                return;
            }
            if(sSec >= 10){
                document.getElementById('sTimerDisplay').innerHTML="0"+sMin+":"+sSec;
            }
            else{
                document.getElementById('sTimerDisplay').innerHTML="0"+sMin+":0"+sSec;
            }
            if (sMin === 1 && sSec === 0) {
                startSound.play();
                document.getElementById('sPeriodDisplay').innerHTML="Skills:";
            }
            sSec--;
            if (sSec < 0 && sMin > 0) {
                sMin--;
                sSec = 59;
            }
        }
    }, 1000);
}

function sRTS(){
    clearInterval(sTimer);
    document.getElementById('sTimerDisplay').innerHTML = "01:00";
    sCountdown = 3;
    sMin = 1;
    sSec = 0;
    document.getElementById('sPeriodDisplay').innerHTML="Skills:";
}

function tcScore(){
    rS = 0;
    bS = 0;

    aB = Number(document.getElementById('aB').value);
    if(aB === 1){
        rS += 10;
    } else if(aB === 2){
        bS += 10;
    } else if(aB === 3){
        rS += 5;
        bS += 5;
    }

    // block counts - clamp to 44
    rBS = Number(document.getElementById('rBS').value);
    if(rBS > 44){
        rBS = 44;
        document.getElementById('rBS').value = 44;
    }
    rS += rBS * 3;

    bBS = Number(document.getElementById('bBS').value);
    if(bBS > 44){
        bBS = 44;
        document.getElementById('bBS').value = 44;
    }
    bS += bBS * 3;

    lGO = Number(document.getElementById('lGO').value);
    if(lGO === 1){
        rS += 10;
    } else if(lGO === 2){
        bS += 10;
    }

    lGT = Number(document.getElementById('lGT').value);
    if(lGT === 1){
        rS += 10;
    } else if(lGT === 2){
        bS += 10;
    }

    uCG = Number(document.getElementById('uCG').value);
    if(uCG === 1){
        rS += 8;
    }
    else if(uCG === 2){
        bS += 8;
    }

    lCG = Number(document.getElementById('lCG').value);
    if(lCG === 1){
        rS += 6;
    }
    else if(lCG === 2){
        bS += 6;
    }

    rROP = Number(document.getElementById('rROP').value);
    rRTP = Number(document.getElementById('rRTP').value);
    if(rROP === 1 && rRTP === 1){
        rS += 30;
    }
    else if(rROP === 1 || rRTP === 1){
        rS += 8;
    }

    bROP = Number(document.getElementById('bROP').value);
    bRTP = Number(document.getElementById('bRTP').value);
    if(bROP === 1 && bRTP === 1){
        bS += 30;
    }
    else if(bROP === 1 || bRTP === 1){
        bS += 8;
    }

    document.getElementById('rS').innerHTML = "Red Alliance Score: " + rS;
    document.getElementById('bS').innerHTML = "Blue Alliance Score: " + bS;

    if(rS > bS){
        document.getElementById('tW').innerHTML = "Red Alliance Wins!";
    }
    else if(bS > rS){
        document.getElementById('tW').innerHTML = "Blue Alliance Wins!";
    }
    else {
        document.getElementById('tW').innerHTML = "Tie!";
    }
}

function tcFields(){
    document.getElementById('aB').value=0;
    document.getElementById('rBS').value=0;
    document.getElementById('bBS').value=0;
    document.getElementById('lGO').value=0;
    document.getElementById('lGT').value=0;
    document.getElementById('uCG').value=0;
    document.getElementById('lCG').value=0;
    document.getElementById('rROP').value=0;
    document.getElementById('rRTP').value=0;
    document.getElementById('bROP').value=0;
    document.getElementById('bRTP').value=0;
    document.getElementById('rS').innerHTML = "Red Alliance Score: 0";
    document.getElementById('bS').innerHTML = "Blue Alliance Score: 0";
    document.getElementById('tW').innerHTML = "";
}

function scScore(){
    sS = 0;
    sBS = Number(document.getElementById('sBS').value);
    if(sBS > 88){
        sBS = 88;
        document.getElementById('sBS').value = 88;
    }
    sS += sBS;
    sLGCZ = Number(document.getElementById('sLGCZ').value);
    if(sLGCZ === 1){
        sS += 5;
    }
    else if(sLGCZ === 2){
        sS += 10;
    }
    sUCG = Number(document.getElementById('sUCG').value);
    if(sUCG === 1){
        sS += 10;
    }
    sLCG = Number(document.getElementById('sLCG').value);
    if(sLCG === 1){
        sS += 10;
    }
    pZC = Number(document.getElementById('pZC').value);
    sS += pZC * 5;
    lC = Number(document.getElementById('lC').value);
    sS += lC * 5;
    rP = Number(document.getElementById('rP').value);
    if(rP === 1){
        sS += 15;
    }
    document.getElementById('sS').innerHTML = "Score: " + sS;
}

function scFields(){
    document.getElementById('sBS').value=0;
    document.getElementById('sLGCZ').value=0;
    document.getElementById('sUCG').value=0;
    document.getElementById('sLCG').value=0;
    document.getElementById('pZC').value=0;
    document.getElementById('lC').value=0;
    document.getElementById('rP').value=0;
    document.getElementById('sS').innerHTML = "Score: 0";
}