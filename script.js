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

// $(document).ready(function () {
//   $("tr").each(function () {
//     var totalMarks = 0;
//     $(this)
//       .find(".rows")
//       .each(function () {
//         var Marks = $(this).text();
//         if (Marks.length !== 0) {
//           totalMarks += parseFloat(Marks);
//         }
//       });
//     $(this)
//       .find("#TotalMarks")
//       .html("= " + totalMarks);
//   });
// });

// var table = document.getElementsByClassName("rows");
// var sumVal = 0;

// for (var i = 1; i < table.rows.length; i++) {
//   sumVal += parseInt(table.rows[i].cells[2].innerHTML);
// }
// console.log(sumVal)

function Myload() {
  const cols = document.getElementsByTagName("input");
  for (let index = 0; index < cols.length; index++) {
    cols[index].addEventListener("change", function () {
      var ls_nm = cols[index].name;
      Total(ls_nm);
    });
  }
}

function Total(ls_nm) {
  var base = documet.getElementsByName(ls_nm);

  var ls_sum = 0;
  for (let index = 0; index < base.length; index++) {
    var ls_base = base[index].value;

    ls_sum = +ls_sum + +ls_base;
  }
  document.getElementById(ls_nm + "_total").value = ls_sum;
}
