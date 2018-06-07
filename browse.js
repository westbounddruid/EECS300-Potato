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

function efilter(){
    var check,gone;
    //electronics=document.getElementById('electronics');
    check=document.getElementsByClassName("item_card");
    
    for (i = 0; i < check.length; i++) {
            if (check[i].classList[1] == "electronics") {
                gone = document.getElementById(check[i].id);
                gone.parentNode.removeChild(gone);
            } else {
            }
        }
}

function ffilter(){
 var check,gone;
    
    check=document.getElementsByClassName("item_card");
    
    for (i = 0; i < check.length; i++) {
            if (check[i].classList[1] == "furniture") {
                gone = document.getElementById(check[i].id);
                gone.parentNode.removeChild(gone);
            } else {
            }
        }
}

function mfilter(){
         var check,gone;
    check=document.getElementsByClassName("item_card");
    
    for (i = 0; i < check.length; i++) {
            if (check[i].classList[1] == "miscellaneous") {
                gone = document.getElementById(check[i].id);
                gone.parentNode.removeChild(gone);
            } else {
            }
        }
        for (i = 0; i < check.length; i++) {
            if (check[i].classList[1] == "miscellaneous") {
                gone = document.getElementById(check[i].id);
                gone.parentNode.removeChild(gone);
            } else {
            }
        }

}

  (function alert() {
    'use strict';
    var dialogButton = document.querySelector('.dialog-button');
    var dialog = document.querySelector('#dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialogButton.addEventListener('click', function() {
       dialog.showModal();
    });
	dialog.querySelector('button:not([disabled])')
    .addEventListener('click', function() {
      dialog.close();
    });
    
  }());

(function toastfunc() {
  'use strict';
  var snackbarContainer = document.querySelector('#email_submit');
  var showToastButton = document.querySelector('#submit');
  showToastButton.addEventListener('click', function() {
    'use strict';
    var data = {message: 'You will receive an email when an item becomes available.' };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
   dialog.querySelector('#submit').addEventListener('click', function() {
      dialog.close();
    });
}());
//Here goes all our javascript :)
