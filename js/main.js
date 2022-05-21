$(document).ready(function () {
    $("#draggable").draggable();
    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this).siblings('div').hide();
        }
    });
});