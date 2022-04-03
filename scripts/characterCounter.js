$(document).ready(function () {

  $("#textAreaToType").on("input", function (event) {
    let newVal = $("#textAreaToType").val().length;
    let $numberToShow = $("#letterCounter");
    $numberToShow.val(newVal);
  });
});