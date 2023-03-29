(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then(res => res.json())
    .then(estados => {
        estados.forEach(function(cada) {
            estado.innerHTML += `<option value="${cada.sigla}">${cada.nome}</option>`
        });
    });
})();



function buscarCep()
{
    if(cep.value.length == 8) {
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(res => res.json())
        .then(dados => {
            logradouro.value = dados.logradouro;
            bairro.value = dados.bairro;
            localidade.value = dados.localidade;
            estado.value = dados.uf;
        })        
    }
}