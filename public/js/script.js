// Função para buscar endereço usando a API ViaCEP
function fetchAddress(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById('endereco').value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
            } else {
                alert('CEP inválido!');
            }
        })
        .catch(error => console.error('Erro ao buscar endereço:', error));
}

// Função para validar o formulário de cadastro
function validateForm(event) {
    event.preventDefault(); // Previne o envio do formulário

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const cep = document.getElementById('cep').value.trim();

    if (nome === '') {
        alert('Por favor, preencha o campo Nome.');
        return false;
    }

    if (email === '') {
        alert('Por favor, preencha o campo E-mail.');
        return false;
    }

    if (telefone === '') {
        alert('Por favor, preencha o campo Telefone.');
        return false;
    }

    if (cep === '') {
        alert('Por favor, preencha o campo CEP.');
        return false;
    }

    // Se tudo estiver válido, exibe uma mensagem de sucesso
    alert('Formulário enviado com sucesso!');
    return true;
}

// Adiciona evento de submit ao formulário para validar antes de enviar
document.getElementById('cadastro-form').addEventListener('submit', validateForm);
