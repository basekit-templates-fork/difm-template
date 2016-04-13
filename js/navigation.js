// Menu Navigation Toggle
$(function() {
    FastClick.attach(document.body);
});

// Toggles class open to display/hide the whole navigation
$( ".navigation-toggle" ).click(function() {
    $( ".navigation-body" ).toggleClass( "open" );
});

// Toggles class open to display/hide folders
$( ".navigation-item.folder" ).each(function() {
    $( this ).click(function() {
        $( this ).toggleClass( "open" );
    });
});