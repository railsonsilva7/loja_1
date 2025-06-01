// Carrinho de compras
let carrinho = [];

// Função para carregar os produtos na página
function carregarProdutos() {
    const produtos = Database.getProdutos();
    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';

    produtos.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.className = 'produto';
        divProduto.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <p>Estoque: ${produto.estoque}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})" 
                    ${produto.estoque === 0 ? 'disabled' : ''}>
                ${produto.estoque === 0 ? 'Sem Estoque' : 'Adicionar ao Carrinho'}
            </button>
        `;
        listaProdutos.appendChild(divProduto);
    });
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = Database.getProdutos().find(p => p.id === produtoId);
    if (!produto || produto.estoque === 0) return;

    const itemCarrinho = carrinho.find(item => item.id === produtoId);
    if (itemCarrinho) {
        if (itemCarrinho.quantidade < produto.estoque) {
            itemCarrinho.quantidade++;
        } else {
            alert('Quantidade máxima atingida para este produto!');
            return;
        }
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: 1
        });
    }

    atualizarCarrinho();
}

// Função para remover item do carrinho
function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const tbody = document.getElementById('itens-carrinho');
    const totalSpan = document.getElementById('total-carrinho');
    tbody.innerHTML = '';

    let total = 0;

    carrinho.forEach(item => {
        const tr = document.createElement('tr');
        const totalItem = item.preco * item.quantidade;
        total += totalItem;

        tr.innerHTML = `
            <td>${item.nome}</td>
            <td>
                <button onclick="alterarQuantidade(${item.id}, -1)">-</button>
                ${item.quantidade}
                <button onclick="alterarQuantidade(${item.id}, 1)">+</button>
            </td>
            <td>R$ ${item.preco.toFixed(2)}</td>
            <td>R$ ${totalItem.toFixed(2)}</td>
            <td>
                <button onclick="removerDoCarrinho(${item.id})">Remover</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    totalSpan.textContent = total.toFixed(2);
}

// Função para alterar a quantidade de um item no carrinho
function alterarQuantidade(produtoId, delta) {
    const item = carrinho.find(item => item.id === produtoId);
    const produto = Database.getProdutos().find(p => p.id === produtoId);

    if (item) {
        const novaQuantidade = item.quantidade + delta;
        if (novaQuantidade > 0 && novaQuantidade <= produto.estoque) {
            item.quantidade = novaQuantidade;
            atualizarCarrinho();
        }
    }
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    try {
        Database.registrarVenda(carrinho);
        alert('Compra finalizada com sucesso!');
        carrinho = [];
        atualizarCarrinho();
        carregarProdutos();
    } catch (error) {
        alert('Erro ao finalizar a compra: ' + error.message);
    }
}

// Carrega os produtos quando a página é carregada
document.addEventListener('DOMContentLoaded', carregarProdutos); 