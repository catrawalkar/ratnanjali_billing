var counter = 1;
var i;
var totalPrice = 0;
$(document).ready(function () {
  var content = "";

  showContent();

  showTotal();

  $("#add_item").click(function () {
    counter++;
    showContent();
  });

  function showTotal() {
    document.getElementById("total").innerHTML = "Rs. " + totalPrice;
  }

  function showContent() {
    contentCreator();
    $("#particulars").append(content);
  }

  function contentCreator() {
    content =
      '<div class="row" id="item-group' +
      counter +
      '">' +
      '<div class="col-4">' +
      '<div class="form-group">' +
      '<label for="item' +
      counter +
      '">Item:</label>' +
      '<input id="item' +
      counter +
      '" class="form-control" type="text" placeholder="Enter Item details">' +
      '</div>' +
      '</div>' +
      '<div class="col-2">' +
      '<div class="form-group">' +
      '<label for="rate' +
      counter +
      '">Rate:</label>' +
      '<input id="rate' +
      counter +
      '" class="form-control" type="number" placeholder="Rate"' +
      ' onchange="myfunction1(' +
      counter +
      ');">' +
      '</div>' +
      '</div>' +
      '<div class="col-2">' +
      '<div class="form-group">' +
      '<label for="weight' +
      counter +
      '">Weight:</label>' +
      '<input id="weight' +
      counter +
      '" class="form-control" type="number" placeholder="Weight"' +
      ' onchange="myfunction1(' +
      counter +
      ');">' +
      '</div>' +
      '</div>' +
      '<div class="col-2">' +
      '<div class="form-group">' +
      '<label for="price' +
      counter +
      '">Price:</label>' +
      '<input id="price' +
      counter +
      '" class="form-control" type="number" placeholder="Price" disabled value="0">' +
      '</div>' +
      '</div>' +
      '<div class="col-2">' +
      '<button class="btn btn-danger" id="del_item' +
      counter +
      '" style="margin-top: 32px;" onclick="' +
      '(function(){document.getElementById(\'item-group' +
      counter +
      '\').remove();myfunction3();})();\">' +
      '<i class = "fa fa-trash"> </i>' +
      '</button >' +
      '</div>' +
      '</div>';
  }
});