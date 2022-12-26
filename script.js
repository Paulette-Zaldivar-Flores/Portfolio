$('.nav-link').click(function() {
$('.nav-link').removeClass('active');
$(this).addClass('active');
})

// $('body').on('hidden.bs.modal', '.modal', function () {
//   $(this).removeData('bs.modal');
// });

$('#myModal').on('shown.bs.modal', function () {
  $('this').removeData('bs.modal')
})
