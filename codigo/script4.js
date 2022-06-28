//tarefas do dia
// Função para converter string para array

const getBanco = () => JSON.parse(localStorage.getItem ('ItemCheck')) ?? [];

// Função para converter array para string

const setBanco = (banco) => localStorage.setItem ('ItemCheck', JSON.stringify(banco))

// Função para criar uma tarefa
// Tarefa é o texto digitado, status é a caixa de checked e indice é qual dos itens o cursor do mouse está clicando (primeiro, segundo, terceiro etc)
const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('check_item')
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}> 
    `
    document.getElementById('checkTable').appendChild(item);

}

// Caso o atualizarTela ocorra mais de uma vez, o limparTarefas limpa o último item, vê o banco e cria denovo.

const limparTarefas = () =>{
    const checkTable = document.getElementById('checkTable');
    while (checkTable.firstChild) {
        checkTable.removeChild(checkTable.lastChild);
    }
}

// Função para renderizar a tela quando adicionado um novo item no banco.

const atualizarTela = () =>{
    limparTarefas()
    const banco = getBanco();
    banco.forEach ((item, indice) => criarItem (item.tarefa, item.status, indice))
}

// Função para acrescentar um novo item através do checkNew-item do html

const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value
    if (tecla === 'Enter'){
        const banco = getBanco();
        banco.push({'tarefa': texto, 'status':''})
        setBanco(banco);
        atualizarTela();
        evento.target.value = ''; // Limpar barra no checkNew-item
    } 
}

// Função para remover o item 1

const removerItem = (indice) => {
    const banco = getBanco();
    banco.splice (indice, 1);
    setBanco (banco);
    atualizarTela();
}

// Função para atualizar o banco ao apertar na caixa de checked

const atualizarItem = (indice) =>{
    const banco = getBanco();
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    setBanco (banco);
    atualizarTela();
}

// Função para saber onde o cursor do mouse está clicando nos itens (caixa de check, conteiner ou x)

const clickItem = (evento) => {
    const elemento = evento.target;
    if (elemento.type === 'button'){
        const indice = elemento.dataset.indice;
        removerItem(indice); 
    }else if(elemento.type === 'checkbox'){
        const indice = elemento.dataset.indice;
        atualizarItem (indice);

    } 
}

document.getElementById('checkNew-item').addEventListener('keypress',inserirItem);
document.getElementById('checkTable').addEventListener('click', clickItem);

atualizarTela();

//OBS: todas as funções de remover ou adicionar itens possuem um getBanco e um setBanco