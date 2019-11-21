$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();

    var nameInput = $("input#nameInput").val();
    var radioValue = $("input[name='gender']:checked").val();
    var genreInput = $("#genreInput").val();

    $(".nameInput").text(nameInput);
    $(".radioValue").text(radioValue);
    $(".genreInput").text(genreInput);

    $("form#survey").hide();
    $(".results").show();
  });
});
