var period = 100; // milliseconds
var interval = null;
function start(){
    updateDisplay(500,0); // 500 RPM, 0 speed
    interval = setInterval(runSimulation,period);
}
function stop(){
    clearInterval(interval);
}

var rpm = 700;
var speed = 0;
var simulationStage = 0;
function runSimulation(){
    var accel = 10;
    var decel = 20;
    switch(simulationStage){
        // acceleration
        case 0:
            rpm += accel;
            if(rpm > 1100) simulationStage++;
            break;
        case 1:
            rpm -= decel;
            if(rpm < 770) simulationStage++;
            break;
        case 2:
            rpm += accel;
            if(rpm > 1150) simulationStage++;
            break;
        case 3:
            rpm -= decel;
            if(rpm < 810) simulationStage++;
            break;
        case 4:
            rpm += accel;
            if(rpm > 1230) simulationStage++;
            break;
        case 5:
            rpm -= decel;
            if(rpm < 850) simulationStage++;
            break;
        case 6:
            rpm += accel;
            if(rpm > 1300) simulationStage++;
            break;
        case 7:
            rpm -= decel;
            if(rpm < 880) simulationStage++;
            break;
        case 8:
            rpm += accel;
            if(rpm > 1350) simulationStage++;
            break;
        case 9:
            rpm -= decel;
            if(rpm < 930) simulationStage++;
            break;
        case 10:
            rpm += accel;
            if(rpm > 1430) simulationStage++;
            break;
        case 11:
            rpm -= decel;
            if(rpm < 960) simulationStage++;
            break;
        case 12:
            rpm += accel;
            if(rpm > 1490) simulationStage++;
            break;
        case 13:
            rpm -= decel;
            if(rpm < 1020) simulationStage++;
            break;
        case 14:
            rpm += accel;
            if(rpm > 1560) simulationStage++;
            break;
        case 15:
            rpm -= decel;
            if(rpm < 1050) simulationStage++;
            break;
        case 16:
            rpm += accel;
            if(rpm > 1610) simulationStage++;
            break;
        case 17:
            rpm -= decel;
            if(rpm < 1070) simulationStage++;
            break;
        case 18:
            rpm += accel;
            if(rpm > 1900) simulationStage++;
            decel = 15;
            break;
        // end of acceleration, begin deceleration
        case 19:
            rpm -= decel;
            if(rpm < 1200) simulationStage++;
            accel = 30;
            break;
        case 20:
            rpm += accel;
            if(rpm > 1510) simulationStage++;
            break;
        case 21:
            rpm -= decel;
            if(rpm < 1150) simulationStage++;
            break;
        case 22:
            rpm += accel;
            if(rpm > 1470) simulationStage++;
            break;
        case 23:
            rpm -= decel;
            if(rpm < 1120) simulationStage++;
            break;
        case 24:
            rpm += accel;
            if(rpm > 1400) simulationStage++;
            break;
        case 25:
            rpm -= decel;
            if(rpm < 1050) simulationStage++;
            break;
        case 26:
            rpm += accel;
            if(rpm > 1350) simulationStage++;
            break;
        case 27:
            rpm -= decel;
            if(rpm < 1010) simulationStage++;
            break;
        case 28:
            rpm += accel;
            if(rpm > 1290) simulationStage++;
            break;
        case 29:
            rpm -= decel;
            if(rpm < 950) simulationStage++;
            break;
        case 30:
            rpm += accel;
            if(rpm > 1230) simulationStage++;
            break;
        case 31:
            rpm -= decel;
            if(rpm < 920) simulationStage++;
            break;
        case 32:
            rpm += accel;
            if(rpm > 1160) simulationStage++;
            break;
        case 33:
            rpm -= decel;
            if(rpm < 870) simulationStage++;
            break;
        case 34:
            rpm += accel;
            if(rpm > 1110) simulationStage++;
            break;
        case 35:
            rpm -= decel;
            if(rpm < 810) simulationStage++;
            break;
        case 36:
            rpm += accel;
            if(rpm > 1050) simulationStage++;
            break;
        case 37:
            rpm -= decel;
            if(rpm < 700) simulationStage=0;
            break;
        // end deceleration
    }
    var dividor = 50;
    if(simulationStage%2) speed=speed-decel/dividor/2;
    else speed=speed+accel/dividor;
    

    updateDisplay(rpm,speed);
}


// This function updates all portions of the display
function updateDisplay(rpm, speed){
    updateArrow(rpm);
    updateGears(speed);
}

function button_clicked(){
	stop();
}

//********************************************************************
// The functions below update different portions of the display
//********************************************************************

// Update the speed or RPM
function updateParam(id,val) {
	var param = document.getElementById(id);
	param.innerHTML = Math.round(val) + id.toString();
}

// Move elements horizontally
function move(id,pos){
	var tag = document.getElementById(id);
	tag.style.left = pos + "%";
}

// Update the arrow according to the RPM
var maxRpm = 2000;
var minRpm = 0;
function updateArrow(rpm){
    updateParam("rpm", rpm);
    if(rpm > maxRpm) rpm = maxRpm;
    else if(rpm < minRpm) rpm = minRpm;
    var percentage = (rpm-minRpm)*100/(maxRpm-minRpm)
    //console.log(percentage);
    move("arrow",percentage);
    //move("bar_long",(700-minRpm)*100/(maxRpm-minRpm));
    //move("bar_short",(1100-minRpm)*100/(maxRpm-minRpm))
}

// Update the line of numbers and puts them in the proper position
// according to speed
var maxSpeed = 60;
var minSpeed = 0;
var mainGearRatio = 2;
var gearRatios = [1, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256, 1/512, 1/1024];
var num_gears = 10;
var offset = -75/9;
function updateGears(speed){
    updateParam("mph",speed);
    for(var id = 1; id <= 10; id++)
    {
        var pos = (speed-minSpeed)*100/(maxSpeed-minSpeed)*mainGearRatio*gearRatios[id-1] + offset*(id-1);
        if(speed*gearRatios[id-1] < 1 && id > 1) pos = -1000;
        move(id,pos);
    }
}

window.onload = function(){
    updateDisplay(700,0); // 500 RPM, 0 speed
    start();
}