var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#about-me'
})

$('.nav-link').click(function() {
  $('.nav-link').removeClass('active');
  $(this).addClass('active');
})
