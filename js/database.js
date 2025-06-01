// Simulação do banco de dados usando localStorage
const Database = {
    // Inicializa o banco de dados
    init: function() {
        if (!localStorage.getItem('produtos')) {
            // Produtos iniciais
            const produtosIniciais = [
                { id: 1, nome: 'Camiseta', preco: 29.99, estoque: 10 },
                { id: 2, nome: 'Calça Jeans', preco: 89.99, estoque: 5 },
                { id: 3, nome: 'Tênis', preco: 199.99, estoque: 3 }
            ];
            localStorage.setItem('produtos', JSON.stringify(produtosIniciais));
        }

        if (!localStorage.getItem('vendas')) {
            localStorage.setItem('vendas', JSON.stringify([]));
        }
    },

    // Métodos para produtos
    getProdutos: function() {
        return JSON.parse(localStorage.getItem('produtos'));
    },

    atualizarProduto: function(produto) {
        const produtos = this.getProdutos();
        const index = produtos.findIndex(p => p.id === produto.id);
        if (index !== -1) {
            produtos[index] = produto;
            localStorage.setItem('produtos', JSON.stringify(produtos));
            return true;
        }
        return false;
    },

    // Métodos para vendas
    registrarVenda: function(itens) {
        const vendas = JSON.parse(localStorage.getItem('vendas'));
        const venda = {
            id: Date.now(),
            data: new Date().toISOString(),
            itens: itens,
            total: itens.reduce((total, item) => total + (item.preco * item.quantidade), 0)
        };
        vendas.push(venda);
        localStorage.setItem('vendas', JSON.stringify(vendas));

        // Atualiza o estoque
        const produtos = this.getProdutos();
        itens.forEach(item => {
            const produto = produtos.find(p => p.id === item.id);
            if (produto) {
                produto.estoque -= item.quantidade;
            }
        });
        localStorage.setItem('produtos', JSON.stringify(produtos));

        return venda;
    },

    getVendas: function() {
        return JSON.parse(localStorage.getItem('vendas'));
    }
};

// Inicializa o banco de dados
Database.init(); 