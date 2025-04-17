
$(document).ready(function () {
  $('#loginBtn').click(function () {
    $.ajax({
      url: 'http://localhost:4000/login',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        email: $('#email').val(),
        password: $('#password').val()
      }),
      success: function (data) {
        $('#result').text('Token: ' + data.token);
      },
      error: function (xhr) {
        $('#result').text('Login failed: ' + xhr.responseJSON?.error || xhr.statusText);
      }
    });
  });

  $('#registerBtn').click(function () {
    $.ajax({
      url: 'http://localhost:4001/register?email=' + $('#email').val() + '&password=' + $('#password').val(),
      method: 'POST',
      success: function (data) {
        $('#result').text('Register success: ' + data);
      },
      error: function (xhr) {
        $('#result').text('Register failed: ' + xhr.responseText);
      }
    });
  });
});
