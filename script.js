$(document).ready(function () { 
    // ينشاءالجدول عند الضغط على زر إرسال
  $('#SizePicker').submit(function makeGrid(grid) { 
    // يتم مسح الجدول عند الضغط على زر الارسال 
    $('table tr').remove(); 
    // يسمح للمستخدم باضافة قيمة اختيارية داخل مربع الإدخال لإضافة صفوف
    var row_input = $('#Input_Height').val(); 
    // يسمح للمستخدم باضافة قيمة اختيارية داخل مربع الإدخال الثاني لإضافة أعمدة
    var col_input = $('#Input_Width').val();
    // تقوم الحلقة بإنشاء صف من الخلايا 
    for (var i = 1; i <= row_input; i++) { 
      $('table').append("<tr></tr>");
   // تضيف هذي الحلقة خلية بعد كل صف 
      for (var j = 1; j <= col_input; j++) {
        $('tr:last').append("<td></td>");
        $('td').attr("class", 'cells') 
      }
    }
    // يمنع حذف الجدول بعد إنشائه بالصفحة
    grid.preventDefault(); 
   // الوظيفة تسمح للمستخدم تلوين الخلية عند الضغط عليها
    $('.cells').click(function (event) { 
      var paint = $('#ColorTool').val();
    // يسمح  اللون الذي تم اختياره اضافته إلى الجدول
      $(event.target).css('background-color', paint);
    });
  }); 
});