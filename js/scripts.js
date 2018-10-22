$(document).ready(function(event) {
    $("#formInfo").submit(function(event) {
      event.preventDefault();
      var name= $("input#nameInput").val();
      var color= $("input#colorInput").val();
      var animal= $("input#animalInput").val();
      var city= $("input#cityInput").val();

      var totalArray = [name, color, animal];
      var newArray = [];

      newArray.push(totalArray[1]);
      newArray.push(totalArray[0]);
      newArray.push(totalArray[2]);
      newArray.push(city);

      //console.log(newArray);

      $("#firstSpan").text(newArray[0]);
      $("#secondSpan").text(newArray[1]);
      $("#thirdSpan").text(newArray[2]);
      $("#fourthSpan").text(newArray[3]);

})});
