// JQuery validation, separate from the ViaCEP API module.
$(function(){
  $('#formulario').on('submit',function(event){
    event.preventDefault();
    const email = $('#email').val().trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const idsObrigatorios=['nome','sobrenome','email','senha','cep','rua','bairro','cidade','estado','numero'];
    let valido = true;
    idsObrigatorios.forEach(id=>{
      const input=$('#'+id); const preenchido=String(input.val()??'').trim().length>0;
      input.toggleClass('is-invalid',!preenchido);
      if(!preenchido) valido=false;
    });
    if(!emailValido){$('#email').addClass('is-invalid'); valido=false;}
    if(!/^\d{8}$/.test($('#cep').val().replace(/\D/g,''))){$('#cep').addClass('is-invalid');valido=false;}
    $('#feedback').text(valido ? 'Cadastro validado localmente. Nenhum dado foi enviado.' : 'Revise os campos destacados e o formato do e-mail/CEP.');
  });
  $('#formulario input').on('input',function(){$(this).removeClass('is-invalid');});
});
