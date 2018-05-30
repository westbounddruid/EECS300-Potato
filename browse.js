
function searchFunction(event) {
    var x = event.keyCode;
    if (x == 13) {

        var input, filter, a, bye_node, c, d, e, z, ex;
        input = document.getElementById('search-input');
        filter = input.value.toLowerCase();
        ex = document.getElementsByClassName("item_card");

        for (i = 0; i < ex.length; i++) {
            if (ex[i].id == filter) {
            } else {
                bye_node = document.getElementById(ex[i].id);
                bye_node.parentNode.removeChild(bye_node);
            }
        }
        for (i = 0; i < ex.length; i++) {
            if (ex[i].id == filter) {
            } else {
                bye_node = document.getElementById(ex[i].id);
                bye_node.parentNode.removeChild(bye_node);
            }
        }
        for (i = 0; i < ex.length; i++) {
            if (ex[i].id == filter) {
            } else {
                bye_node = document.getElementById(ex[i].id);
                bye_node.parentNode.removeChild(bye_node);
            }
        }
    } else {}

}

function showGiver(){
	console.log("foo");
	var giverInfo = document.getElementById("giverInfo");
	giverInfo.innerHTML = ('(123) 456-7890');
}
var curPic = 1;
var pics = ["images/listing/lamp1.png","images/listing/lamp2.png","images/listing/lamp3.png"];

function picRight(){
	var elem = document.getElementById("listingItem");
	if(curPic == 3){
		curPic = 1;
	}
	else{
		curPic += 1;
	}

	elem.src = pics[curPic-1];
}

function picLeft(){
	var elem = document.getElementById("listingItem");
	if(curPic == 1){
		curPic = 3;
	}
	else{
		curPic -= 1;
	}

	elem.src = pics[curPic-1];
}

		
		
		
		
	

;//Here goes all our javascript :)
