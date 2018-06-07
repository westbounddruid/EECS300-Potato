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

(function contact() {
    'use strict';
    var dialogButton = document.querySelector('.contact-button');
    var dialog = document.querySelector('#contact');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialogButton.addEventListener('click', function() {
       dialog.showModal();
    });

 
  }());

(function toastfunclisting() {
  'use strict';
  var dialog = document.querySelector('#contact');
  var snackbarContainer = document.querySelector('#listing_contact');
  var showToastButton = document.querySelector('#submit-contact');
  showToastButton.addEventListener('click', function() {
    'use strict';
    var data = {message: 'Thank you for submitting a request. The seller will contact you at their earliest convenience.' };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
   dialog.querySelector('#submit-contact')
        .addEventListener('click', function() {
          dialog.close();
        });
}());
