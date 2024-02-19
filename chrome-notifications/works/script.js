// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

$( "#verzend" ).on( "click", function() {
    Notification.requestPermission()
    .then( permission => {
        if(permission === 'granted'){
            new Notification($('.melding').val())
        }
    })
});