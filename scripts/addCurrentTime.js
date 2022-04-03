$(document).ready(function () {

  $("#buttonAddTime").on("click", function (event) {
    console.log("pressed")
    let newTime = new Date();
    let $time = $(`<div class="individualTime">${newTime}</div></br>`);
    $('#timeHolder').append($time);
  });
});