window.addEventListener('load', eventWindowLoaded, false);	

function eventWindowLoaded() {
    if (audio_support()) {
	set_up_audio();
    }
}

function audio_support () {
    return Modernizr.audio;
}

function set_up_audio() {
    var epub_audio = document.getElementById("epub");
    var mobi_audio = document.getElementById("mobi");
    var pdf_audio = document.getElementById("pdf");
    // Add play button functionality
    var epub_play_button = document.getElementById("epub_button");
    var mobi_play_button = document.getElementById("mobi_button");
    var pdf_play_button = document.getElementById("pdf_button");
    epub_play_button.addEventListener("click", play_epub, false);
    mobi_play_button.addEventListener("click", play_mobi, false);
    pdf_play_button.addEventListener("click", play_pdf, false);
    function play_epub() {
	epub_audio.play();
    }
    function play_mobi() {
	mobi_audio.play();
    }
    function play_pdf() {
	pdf_audio.play();
    }
}