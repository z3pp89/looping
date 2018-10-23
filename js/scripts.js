$(document).ready(function(){
    $("form#myForm").submit(function(event){
  
      var countBy = parseInt($("#countby").val());
      var countTo = parseInt($("#countto").val());
  
      if (!countBy || !countTo) {
        alert("Enter the numbers please");
      }
  
  
  
    for (var index = countBy; index <= countTo; index += countBy){
      $("#results").append( index + "<br>");
    }
  
  
    (event).preventDefault();
    });
  });