$(document).ready(function() {
  $("form#english").submit(function(event) {
    event.preventDefault();

    var input = $("#eng").val();
    var pigLatin = function(x) {
      $("#result").text(input + "way");
    }
    pigLatin();
  });
});
