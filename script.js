$(document).ready(function () { 
    // ينشاءالجدول عند النقر فوق الزر إرسال
  $('#SizePicker').submit(function makeGrid(grid) { 
    // يتم مسح الجدول عند الضغط على زر الارسال 
    $('table tr').remove(); 
    // يسمح للمستخدم باضافة قيمة اختيارية داخل مربع الإدخال لإضافة صفوف
    var row_input = $('#Input_Height').val(); 
    // يسمح للمستخدم بإضافة قيمة اختيارية داخل مربع الإدخال الثاني لإضافة أعمدة
    var col_input = $('#Input_Width').val();
    // يقوم الحلقة بإنشاء صف من الخلايا 
    for (var i = 1; i <= row_input; i++) { 
      $('table').append("<tr></tr>");
   // تضيف هذي الحلقة خلية بعد كل صف 
      for (var j = 1; j <= col_input; j++) {
        $('tr:last').append("<td></td>");
        $('td').attr("class", 'cells') 
      }
    }
    // يمنع الشبكة من حذفها بعد إنشائها بالصفحة
    grid.preventDefault(); 
   // الوظيفة تسمح للمستخدم تلوين الخلية عند الضغط عليها
    $('.cells').click(function (event) { 
      var paint = $('#ColorTool').val();
    // يسمح  اللون الذي تم اختياره في الحدث الضغط لإضافته إلى الشبكة
      $(event.target).css('background-color', paint);
    });
  }); 
});