function showPage() {
    var typed = new Typed('#loader_text', {strings:["Now's loading..."],typeSpeed: 100});
    setTimeout(function(){
        $("#overlay").addClass("animated fadeOutDown");
        $("#page_control").css({'display':'block'});
    },3000);
}
