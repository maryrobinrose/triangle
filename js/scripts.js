$(document).ready(function() {
  $("form#triangleForm").submit(function(event){

    var alpha = parseInt($("#sideA").val());
    var beta = parseInt($("#sideB").val());
    var capa = parseInt($("#sideC").val());

    if (alpha === beta && beta === capa && capa === alpha){
      $("#equilateral").show();
    }

    console.log("hit")


    event.preventDefault();
  });
});
