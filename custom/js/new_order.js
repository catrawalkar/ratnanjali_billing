var counter = 1;
// var i;
var totalPrice = 0;

function updatePrice(i) {
  var a = document.getElementById('rate' + i).value;
  var b = document.getElementById('weight' + i).value;
  var c = a * b;
  document.getElementById('price' + i).value = c;
  updateTotal();
}

function updateTotal() {
  var totalPrice = 0;
  for (var i = 1; i <= counter; i++) {
    if (document.getElementById('price' + i) != null) {
      totalPrice += Number(document.getElementById('price' + i).value);
    }
  }
  document.getElementById('total').innerHTML = 'Rs. ' + totalPrice;
}

function removeItem(i) {
  document.getElementById('item-group' + i).remove();
  updateTotal();
}



$(document).ready(function () {
  var content = "";

  showContent();

  showTotal();

  $("#submit_Invoice").click(function () {

  });

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
      '<div class="row" id="item-group' + counter + '">' +
      '<div class="col-4">' +
      '<div class="form-group">' +
      '<label for="item' + counter + '">Item:</label>' +
      '<input id="item' + counter + '" class="form-control" type="text" placeholder="Enter Item details">' +
      '</div>' +
      '</div>' +
      '<div class="col-2">' +
      '<div class="form-group">' +
      '<label for="rate' + counter + '">Rate:</label>' +
      '<input id="rate' + counter + '" class="form-control" type="number" placeholder="Rate"' +
      ' oninput="updatePrice(' + counter + ');">' +
      '</div>' +
      '</div>' +
      '<div class="col-2">' +
      '<div class="form-group">' + '<label for="weight' + counter +
      '">Weight:</label>' +
      '<input id="weight' + counter + '" class="form-control" type="number" placeholder="Weight"' +
      ' oninput="updatePrice(' + counter + ');">' +
      '</div>' +
      '</div>' +
      '<div class="col-2">' +
      '<div class="form-group">' +
      '<label for="price' + counter + '">Price:</label>' +
      '<input id="price' + counter + '" class="form-control" type="number" placeholder="Price" disabled value="0">' +
      '</div>' +
      '</div>' +
      '<div class="col-2">' +
      '<button class="btn btn-danger" id="del_item' + counter + '" style="margin-top: 32px;" onclick="' +
      'removeItem(' + counter + ');\">' +
      '<i class = "fa fa-trash"> </i>' +
      '</button >' +
      '</div>' +
      '</div>';
  }
});