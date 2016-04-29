// force reload at top
$(this).scrollTop( 0 );

// disable right arrow key because it circumvents overflow-x: hidden
$('html')
.keydown(function (event) {
    if (event.which == '39') { //13 = Enter
        event.preventDefault();
    }
})
