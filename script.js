$.datepicker.regional['ru'] = {
    closeText:'Закрыть',
    prevText:'Предыдущий',
    monthNames:['Январь','февраль','Март','Апрель'],
    dayNamesMin:['пн','вт','ср','чт','пт','сб','вс']
}
$.datepicker.setDefaults($.datepicker.regional['ru']);
$(function(){
    $('#datepickers').datepicker();
});


// $('.blocks').click (function(){
//     $('.blocks').css('color="red"')
// })

$('input').change(function() {
    let el = $(this).parent();
    if ($(this).val()) {
      el.addClass('success');
      el.removeClass('error');
    } else {
      el.addClass('error');
      el.removeClass('success');
    }
  });



$('.block1').click(function(){
    $('.blocks').css('margin-left:"100px"')
})