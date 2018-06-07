var possibleRemove = null;

function possible_remove(buttonPressed) {
	console.log(buttonPressed.id);
	if (buttonPressed.id == "backpack_button"){
		possibleRemoveID = "backpack_button";
	}
	if (buttonPressed.id == "knives_button"){
		possibleRemoveID = "knives_button";
	}
	if (buttonPressed.id == "desk_button"){
		possibleRemoveID = "desk_button";
	}
	if (buttonPressed.id == "couch_button"){
		possibleRemoveID = "couch_button";
	}
}

function remove_post() {
	console.log("here we go " + possibleRemoveID);
	if (possibleRemoveID == "backpack_button"){
		var card = document.getElementById("backpack_card");
		card.style.display = "none";
	}
	if (possibleRemoveID == "knives_button"){
		var card = document.getElementById("knives_card");
		card.style.display = "none";
	}
	if (possibleRemoveID == "desk_button"){
		var card = document.getElementById("desk_card");
		card.style.display = "none";
	}
	if (possibleRemoveID == "couch_button"){
		var card = document.getElementById("couch_card");
		card.style.display = "none";
	}
	var dialog = document.querySelector('#dialog');
	dialog.close();
}

(function alert() {
    'use strict';
    var dialogButton1 = document.querySelector('#backpack_button');
	var dialogButton2 = document.querySelector('#knives_button');
	var dialogButton3 = document.querySelector('#desk_button');
	var dialogButton4 = document.querySelector('#couch_button');
    var dialog = document.querySelector('#dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialogButton1.addEventListener('click', function() {
       dialog.showModal();
    });
	dialogButton2.addEventListener('click', function() {
       dialog.showModal();
    });
	dialogButton3.addEventListener('click', function() {
       dialog.showModal();
    });
	if (dialogButton4 != null){
		dialogButton4.addEventListener('click', function() {
       dialog.showModal();
    });
	}
    dialog.querySelector('button:not([disabled])')
    .addEventListener('click', function() {
      dialog.close();
    });
  }());
