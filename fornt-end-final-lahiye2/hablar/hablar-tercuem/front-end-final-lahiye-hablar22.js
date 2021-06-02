$(document).ready(function () {
    var audio = new Audio(
      "https://www.wordreference.com/audio/es/Castellano/es188549.mp3"
    );
    $(".audio i").click(function () {
      audio.play();
    });
    var audio1 = new Audio(
      "https://www.wordreference.com/audio/es/Castellano/es186017.mp3"
    );
    $(".audio1 i").click(function () {
      audio1.play();
    });
  });
  