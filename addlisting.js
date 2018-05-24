function addImage() {
	var prompt = document.getElementById("uploadIcon");
	var one = document.getElementById("Image1");
	var two  = document.getElementById("Image2");
	var three = document.getElementById("Image3");
	
	if (prompt.style.display != "none") {
        prompt.style.display = "none";
		one.style.display = "flex";
    } else if (two.style.display != "flex"){
        two.style.display = "flex";
    }
	else {
		three.style.display = "flex";
	}
}

