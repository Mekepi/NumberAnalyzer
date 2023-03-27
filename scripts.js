var numbs = [];

function listar() {

    let numb = document.querySelector("input#numero").value;

    if (numb === '') {
        alert("Digite um número, por favor.");
        return;
    }
    
    numb = Number(numb)
    if (numb > 100 || numb < 1) {
        alert("Digite um número válido, por favor.")
        return;
    } if (numbs.includes(numb)) {
        alert("Digite um número novo, por favor.");
        document.querySelector("input#numero").value = '';
        return;
    }

    if(!document.querySelector("#gerado")) {
        let criando = document.createElement("optgroup");
        criando.id = "gerado";
        document.querySelector("select").appendChild(criando);
    };

    numbs.push(numb);

    let opti = document.createElement("option");
    opti.value = `${numb}`;
    opti.text = `Valor ${numb} adicionado.`;
    document.querySelector("#gerado").appendChild(opti);

    document.querySelector("input#numero").value = '';
    return;
};

function resultado() {

    if (!document.querySelector("#gerado")) {
        alert("Adicione um número, por favor.")
        return;
    }

    let soma = 0, max = 0, min = Infinity;
    for(let i = 0; i<numbs.length;) {
        if (numbs[i] < min) min = numbs[i];
        if (numbs[i] > max) max = numbs[i];
        soma += numbs[i++];
    };
    
    if (document.querySelector("#paragrafo")) {
        document.querySelector("#paragrafo").remove();
    }

    criando = document.createElement("p");
    criando.dataTable 
    criando.id = "paragrafo";
    criando.innerHTML = `Ao todo, temos ${numbs.length} números cadastrados.<br></br>
    O maior valor informado foi ${max}.<br></br>
    O menor valor informado foi ${min}.<br></br>
    Somando todos os valores, temos ${soma}.<br></br>
    A média dos valores digitados é ${(soma/(numbs.length)).toLocaleString('pt-BR', {maximumFractionDigits: 2 })}.`;

    document.querySelector("section").appendChild(criando);

    return;
};