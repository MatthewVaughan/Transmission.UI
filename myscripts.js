function setParam(id,val) {
	var param = document.getElementById(id);
	param.innerHTML = Math.round(val) + id.toString();
}

function move(id,pos){
	var tag = document.getElementById(id);
	tag.style.left = pos + "%";
}

window.onload = function(){
	setParam("mph",50);
	setParam("rpm",50);
	move("arrow",50);
	move("1", 10);
	move("2", 10);
	move("3", 10);
	move("4", 10);
	move("5", 10);
	move("6", 10);
	move("7", 10);
	move("8", 10);
	move("9", 10);
	move("0", 10);
}

function arrowPointer() {

	var arr = [1,9,2,8,3,7,4,6,5,0];
	var orderedArray = [1,2,3,4,5,6,7,8,9,0];
	var arrow = document.getElementById("arrow");
	
	for(i=0; i <= 10; i++)
	{
			switch(orderedArray[i]) {
		case 1:
			arrow.style.left = 8 + "%";
			break;
		case 2:
			arrow.style.left = 16.25 + "%";
			break;
		case 3:
			arrow.style.left = 24.5 + "%";
			break;
		case 4:
			arrow.style.left = 32.75 + "%";
			break;
		case 5:
			arrow.style.left = 41 + "%";
			break;
		case 6:
			arrow.style.left = 49.25 + "%";
			break;
		case 7:
			arrow.style.left = 57.5 + "%";
			break;
		case 8:
			arrow.style.left = 65.75 + "%";
			break;
		case 9:
			arrow.style.left =  76 + "%";
			break;
		case 0:
			arrow.style.left = 82.25 + "%";
		}
	}
}