function add_row() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;

  var table = document.getElementById("data_table");
  var table_len = table.rows.length - 1;
  var row = (table.insertRow(table_len).outerHTML =
    "<tr id='row" +
    table_len +
    "'><td id='name_row" +
    table_len +
    "'>" +
    input1 +
    "</td><td id='country_row" +
    table_len +
    "'>" +
    input2 +
    "</td><td id='age_row" +
    table_len +
    "'>" +
    input3 +
    "</td><td><input type='button' value='Delete' class='delete' onclick='delete_row(" +
    table_len +
    ")'></td></tr>");

  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
}

function delete_row(no) {
  document.getElementById("row" + no + "").outerHTML = "";
}

$(document).ready(function () {
  $("tr").each(function () {});
});
