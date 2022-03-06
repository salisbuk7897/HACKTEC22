function pred() {
  var data = {sen: $(`#sen`).val(), mid: $(`#mid`).val()};
  $.ajax({
      type: 'post',
      url: '/predict',
      data: data
  })
  .done(function(e){
    $('#pr').html(e);
    document.getElementById('divpred').style.display = 'block';
  });
}

function myFunction() {
  var x = document.getElementById("divpred");
  x.style.display = "none";
}