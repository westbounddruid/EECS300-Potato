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
;//Here goes all our javascript :)
