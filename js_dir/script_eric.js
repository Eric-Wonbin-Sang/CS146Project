
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function show_modal(image_input) {
    var modal = document.getElementById("generic_modal");
    var modal_image = document.getElementById("modal_image");
    modal_image.style.width = "100%"
    modal_image.src = image_input.src;
    modal.style.display = "block";
}

function close_modal() {
    document.getElementById("generic_modal").style.display = "none";
}
