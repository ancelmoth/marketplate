const produtos = [
    { 
        nome: "Fone de Ouvido", 
        descricao: "Fone de alta qualidade", 
        preco: "R$ 99,99", 
        categoria: "eletronicos", 
        link: "https://siteexterno.com/fone", 
        imagem: "link-imagem-do-produto.jpg" 
    },
    { 
        nome: "Caixa de Som Bluetooth", 
        descricao: "Som potente e portátil", 
        preco: "R$ 199,99", 
        categoria: "eletronicos", 
        link: "https://siteexterno.com/caixa", 
        imagem: "link-imagem-do-produto.jpg" 
    },
    { 
        nome: "Creme Hidratante", 
        descricao: "Hidratação intensa para a pele", 
        preco: "R$ 29,99", 
        categoria: "beleza", 
        link: "https://siteexterno.com/creme", 
        imagem: "link-imagem-do-produto.jpg" 
    },
    { 
        nome: "Vitaminas", 
        descricao: "Suplemento vitamínico diário", 
        preco: "R$ 49,99", 
        categoria: "saude", 
        link: "https://siteexterno.com/vitaminas", 
        imagem: "link-imagem-do-produto.jpg" 
    }
];

const listaProdutos = document.getElementById("lista-produtos");
const searchBar = document.getElementById("search-bar");
const categoriaButtons = document.querySelectorAll("#categorias button");

// Função para renderizar produtos
function renderProdutos(produtosParaExibir) {
    listaProdutos.innerHTML = ""; // Limpa a lista antes de renderizar
    produtosParaExibir.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto");

        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p>Preço: ${produto.preco}</p>
            <a href="${produto.link}" target="_blank">Ver Produto</a>
        `;

        listaProdutos.appendChild(produtoDiv);
    });
}

// Função para filtrar produtos por categoria
function filtrarPorCategoria(categoria) {
    if (categoria === "todos") {
        renderProdutos(produtos);
    } else {
        const produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);
        renderProdutos(produtosFiltrados);
    }
}

// Função para buscar produtos
function buscarProdutos(query) {
    const produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(query.toLowerCase()));
    renderProdutos(produtosFiltrados);
}

// Eventos para os botões de categoria
categoriaButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const categoria = e.target.getAttribute("data-categoria");
        filtrarPorCategoria(categoria);
    });
});

// Evento para a barra de busca
searchBar.addEventListener("input", (e) => {
    const query = e.target.value;
    buscarProdutos(query);
});

// Renderiza todos os produtos ao carregar a página
renderProdutos(produtos);
