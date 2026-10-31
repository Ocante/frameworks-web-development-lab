// Consulta pública via ViaCEP; nenhum dado é persistido no servidor.
async function consultarCEP(cep, campos, feedback) {
  const digits = cep.replace(/\D/g, '');
  if (digits.length !== 8) { feedback.textContent = 'Informe um CEP com 8 dígitos.'; return false; }
  feedback.textContent = 'Consultando CEP...';
  try {
    const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`, {headers:{Accept:'application/json'}});
    if (!response.ok) throw new Error('Serviço indisponível');
    const endereco = await response.json();
    if (endereco.erro) { feedback.textContent = 'CEP não encontrado.'; return false; }
    for(const [campo, origem] of Object.entries({rua:'logradouro',bairro:'bairro',cidade:'localidade',estado:'uf'})) {
       if(campos[campo]) campos[campo].value = endereco[origem] ?? '';
    }
    feedback.textContent = 'Endereço encontrado.';
    return true;
  } catch(e) { feedback.textContent = 'Não foi possível consultar o CEP. Confira a conexão.'; return false; }
}
const form=document.querySelector('#formulario');const feedback=document.querySelector('#feedback');
form.cep.addEventListener('blur',()=>consultarCEP(form.cep.value,form,feedback));
form.addEventListener('submit',(event)=>{event.preventDefault(); feedback.textContent = form.checkValidity() ? 'Formulário validado localmente. Nenhum dado foi enviado.' : 'Preencha os campos obrigatórios.'; if(!form.checkValidity())form.reportValidity();});
