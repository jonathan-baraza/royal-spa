$(document).ready(function () {
  $("#home").addClass("active");

  $("#home").click(function () {
    $("#home").addClass("active");
    $("#about").removeClass("active");
    $("#service").removeClass("active");
    $("#cont").removeClass("active");
  });

  $("#about").click(function () {
    $("#about").addClass("active");
    $("#home").removeClass("active");
    $("#service").removeClass("active");
    $("#cont").removeClass("active");
  });

  $("#service").click(function () {
    $("#service").addClass("active");
    $("#home").removeClass("active");
    $("#about").removeClass("active");
    $("#cont").removeClass("active");
  });

  $("#cont").click(function () {
    $("#cont").addClass("active");
    $("#home").removeClass("active");
    $("#service").removeClass("active");
    $("#about").removeClass("active");
  });
});
