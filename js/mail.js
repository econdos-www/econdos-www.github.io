(function () {
  var btnContactUs = $('#btnContactUs');

  btnContactUs.on('click', function () {
    var form, name, email, password;

    form = $('form[name="contact"]');

    name = form.find('input.name');
    email = form.find('input.email');
    // password = form.find('input.password');

    if (name.val() === '' || email.val() === '') {
          return swal('Ops...', 'Por favor, para que possamos entrar em contato preencha todos os campos!', 'info');
    }

    $.ajax({
      type : "POST",
      url  : "https://econdos.herokuapp.com/api/v1/users",
      data : {
        name: name.val(),
        email: email.val()
        // ,
        // password: password.val()
      }
    }).success(function (response) {
      if (response._id) {
        swal('Obrigado!', 'Aguarde que logo entraremos em contato!', 'success');
        name.val('');
        email.val('');
        // password.val('');
      }
    });
  });
}());
