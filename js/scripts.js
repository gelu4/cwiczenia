var triangleArea1 = getTriangleArea(3, 6);
var triangleArea2 = getTriangleArea(0, 9);
var triangleArea3 = getTriangleArea(2, 8);
function getTriangleArea(a, h) {
	if(a<= 0 || h <= 0){
		return"Nieprawidłowe dane";
	}
	return(a*h/2);
}

console.log(getTriangleArea(10, 6));
console.log(triangleArea1);
console.log(triangleArea2);
console.log(triangleArea3);

function triangleArea(a, h) {
	var result = (a*h/2);
	return result;
}


function area(){
	var a = document.getElementById("a").value;
	var h = document.getElementById("h").value;
	if(isNaN(a) || isNaN(h)){
	document.getElementById("wynik").innerHTML = "Nieprawidłowe dane";
	}
	else if(a === ""  || h === "") {
		document.getElementById("wynik").innerHTML = "Musisz wpisac obie wartości";
	}
	else {
		document.getElementById("wynik").innerHTML = "Triangle area is:" + triangleArea(a,h);
	}
}
