
function addImage(e) {
  var imgUrl = $("#imgUrl").val();
  if (imgUrl.length) {
    $("#MyImg img").attr("src", imgUrl);
  }
  e.preventDefault();
}

$("#go").click(addImage);
$("#urlBox").submit(addImage);


function gray() {
	document.getElementById("myImg").style.filter = "grayscale(100%)";
}

function sepia() {
	document.getElementById("myImg").style.filter = "sepia(100%)";
}

function opacity() {
	document.getElementById("myImg").style.filter = "opacity(50%)";
}

function sat() {
	document.getElementById("myImg").style.filter = "saturate(200%)";
}

function invert() {
	document.getElementById("myImg").style.filter = "invert(100%)";
}

function blurr() {
	document.getElementById("myImg").style.filter = "blur(4px)";
}

function no() {

	document.getElementById("myImg").style.filter = "none";
}
