function buscarProdutos(param = '', type = '') {
    const url = `/src/feminino.json`;
    console.log(url)
    fetch(url).then((response) => response.json()).then((dados) => {
        dados.map(produto => {
            if(type === 'id'){
                if (produto.id === param){
                    mostrarProduto(produto)
                }
                
            } else {
                if (param === '') {
                    mostrarProdutos(produto)
                    
                } else {
                    if (produto[type] === param) {
                        mostrarProdutos(produto)
                    }
                }
            }
        })
    })
        .catch(err => console.error(err))
}

function mostrarProdutos(produto) {
    const root = document.querySelector('#products-grid')
    const valor = String(produto.valor)
    root.innerHTML += `
    <article class="iten-product">
        <a href="/src/produto/?id=${produto.id}">
            <div class="">
                <img src="${produto.imagem}" alt="">
            </div>
            <div class="text-iten-product">
                <strong class="title-iten">
                    ${produto.nome}
                </strong>
                <div class="info-preco">
                    <span class="preco">R$ ${produto.valor}</span>
                    <span> a vista</span>
                    <p>em até</p>
                    <p><strong class="price">5x</strong class="price"> de <strong class="price">R$ ${converteParela(valor)}</strong class="price"> no cartão de crédito sem juros</p>
                </div>
            </div>
        </a>
    </article>
`
}

function mostrarProduto(produto) {
    const root = document.querySelector('#main-product')
    const valor = String(produto.valor)
    
    root.innerHTML += `
    <div class="produto-container width-content">
                <div class="path-view"><a href="/">paginal inicial</a> > <a href="/src/produtos/${produto.genero}/?genero=${produto.genero}" >${produto.genero}</a> > <a href="/src/produtos/${produto.genero}/?categoria=${produto.categoria}">${produto.categoria}</a></div>
                <div id="product-main">
                    <div class="product-view">
                        <div class="img-product">
                            <div class="miniatures">
                                <div class="img-miniature"><img src="${produto.imagem}" alt=""></div>
                                <div class="img-miniature"><img src="${produto.imagem}" alt=""></div>
                                <div class="img-miniature"><img src="${produto.imagem}" alt=""></div>
                                <div class="img-miniature"><img src="${produto.imagem}" alt=""></div>                
                            </div>
                            <div class="normal"><img src="${produto.imagem}" alt=""></div>
                        </div>
                    </div>
                    <div class="product-info">
                        <h1>${produto.nome}</h1>
                        <div class="classifica-product">
                            <a href="#">
                                <span class="star">☆☆☆☆☆</span>
                                <span>(0)</span>
                            </a>
                        </div>
                        <div class="info-preco">
                            <p>por:
                                <span class="preco">R$ ${produto.valor}</span>
                            </p>
                            <p>em até <b>5x</b> de <b>R$ ${converteParela(valor)}</b> no cartão de crédito sem juros</p>
                        </div>
                        <div id="tamanhos">
                            
                            <span>tamanhos</span>
                        </div>
                        <div class="action-buy">
                            <button class="buy">comprar</button>
                        </div>
                        <div class="description">
                        <p>Descrição:</p>
                        ${produto.descricao}</div>
                    </div>
                </div>
            </div>
`
mostrarTamanho(produto)
}

function mostrarTamanho(produto){
    const root = document.querySelector('#tamanhos')
    produto.tamanho.map(size => {
        return(
            root.innerHTML += `<button class="tamanho-iten">${size}</button>`)
             })
}

function getProdutoPorTipo() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params.categoria) {
        buscarProdutos(params.categoria, 'categoria')
    } else if (params.id) {
        buscarProdutos(params.id, 'id')
    } else if(params.genero){
        buscarProdutos(params.genero, 'genero')
    }
}

function converteParela(valor) {
    const parcela = String(valor / 5)
    if (parcela[2] === '.') {
        return `${parcela[0]}${parcela[1]},${parcela[3]}${parcela[4]}`
    } else {
        return `${parcela[0]},${parcela[2]}${parcela[3]}`
    }
}