let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    // PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value.trim(); 
    // Remover espaços em branco extras

    // SE NÃO FOR VAZIO
    if (valorInput !== "") 
    
    ++contador
     {
        let novoItem = `<div id="${contador}"class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="marcarTarefa(${contador})"class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick ="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
            </div>
        </div>`;

        // ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        // ZERAR OS CAMPOS
        input.value = ""; // Remover o espaço extra
        input.focus();

        ++contador;
    }
}


function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
    }

    function marcarTarefa(id){
        var item = document.getElementById(id);
        var classe = item.getAttribute('class');
        console.log(classe);

        if(classe=="item"){
            item.classList.add('clicado')

            var icone = document.getElementById('icone_'+id);
            icone.classList.remove('mdi-circle-outline');
            icone.classList.add('mdi-check-circle');

            var novoItem = item.cloneNode(true);
            novoItem.classList.add('clicado');
            main.appendChild(novoItem);
            item.remove();
   
        }else{
            item.classList.remove('clicado')

            var icone = document.getElementById('icone_'+id);
            icone.classList.remove('mdi-check-circle');
            icone.classList.add('mdi-circle-outline'); 
        }
    
    
    }

// Adicionando um ouvinte de eventos para a tecla Enter no input
input.addEventListener("keyup", function(event) {
    //se teclou 13 
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});



