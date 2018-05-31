r(function(){
        var notification = document.querySelector('.mdl-js-snackbar');
        notification.MaterialSnackbar.showSnackbar(
          {
            message: 'Listing Posted!'
          }
        );
    });
	
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}