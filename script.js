$(document).ready(function () { 
   // Creates the grid upon clicking the button Submit
  $('#SizePicker').submit(function makeGrid(grid) { 
    // Lets the grid be cleared when hitting the Submit button again
    $('table tr').remove(); 
    // Allows the user to add a chosen value inside the input box to add rows 
    var row_input = $('#Input_Height').val(); 
    // Allows the user to add a chosen value inside the 2nd input box to add columns
    var col_input = $('#Input_Width').val(); 
    for (var i = 1; i <= row_input; i++) { 
      // This loop creates a row of cells
      $('table').append("<tr></tr>"); 
      for (var j = 1; j <= col_input; j++) {
         // This loop adds a cell after every row
        $('tr:last').append("<td></td>");
        // For every 'td', a class of 'cells' is created
        $('td').attr("class", 'cells') 
      }
    }
    // Prevents the grid to be deleted after it is created

    grid.preventDefault(); 
    // The function allows the user to color a cell on click
    $('.cells').click(function (event) { 
      var paint = $('#ColorPicker').val();
       // Lets the chosen color on a click event to be added to the grid
      $(event.target).css('background-color', paint);
    });
  }); 
});