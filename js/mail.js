(function () {
  var btnContactUs = $('#btnContactUs');

  btnContactUs.on('click', function () {
    var form, name, email, content;

    form = $('form[name="contact"]');

    name = form.find('input.name');
    email = form.find('input.email');

    if (name.val() === '' || email.val() === '') {
      return swal('Ops...', 'Por favor, para que possamos entrar em contato preencha todos os campos!', 'info');
    }

    content =
      'Olá, segue abaixo os dados para contato:<br>' +
      '<br><b>Nome: </b>' + name.val() +
      '<br><b>E-mail: </b>' + email.val()
    ;

    $.ajax({
      type : "POST",
      url  : "https://mandrillapp.com/api/1.0/messages/send.json",
      data : {
        'key'     : 'e7T7igev5Hu4lhSrsNdOGA',
        'message' : {
          'from_email' : 'no-reply@econdos.com.br',
          'from_name'  : 'eCondos',
          'to'         : [{'email' : 'contato@econdos.com.br'}],
          'subject'    : 'eCondos - Tenho Interesse',
          'html'       : content
        }
      }
    }).success(function (response) {
      if (response[0].status === 'sent') {
        swal('Obrigado!', 'Aguarde que logo entraremos em contato!', 'success');
        name.val(''); email.val('');
      }
    });
  });
}());
