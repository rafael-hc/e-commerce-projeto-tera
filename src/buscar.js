

const linksImg = ['https://cea.vtexassets.com/arquivos/ids/50703278-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/53014000-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/53636133-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/43785847-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/47547311-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/51495586-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/50612401-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/50782963-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/50725250-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/51503024-426-512?width=426&height=512&aspect=true']

const nameList = ['vestido curto de tule estampado xadrez vichy com recorte manga bufante marrom', 'vestido de paetês com fenda laranja neon', 'Vestido Chemise de Viscose Estampado de Poá com Babado Curto Manga Longa Preto', 'vestido midi canelado halter neck com fenda preto', 'Vestido Feminino Curto em Tule Estampado Poá Manga Bufante 3/4 Decote em V Verde', 'vestido midi com lastex e babados manga curta rosa', 'vestido midi estampado de poá manga curta decote redondo  com recortes off white', 'vestido longo jeans alça larga decote reto com recortes azul claro', 'vestido canelado midi básico com fenda alça média decote redondo  pink', 'vestido midi com lastex e babados manga curta preto']

const priceList = ['169.99', '159.99', '129.99', '71.99', '149.99', '86.99', '141.99', '159.99', '79.99', '86.99']



for (let i = 0; i < 10; i++) {
    
        console.log(`
        {
            "id": "${i+41}",
            "nome": "${nameList[i]}",
            "imagem": "${linksImg[i]}",
            "valor": "${priceList[i]}",
            "tamanho":[
                "PP","P","M", "G", "GG"
              ],
            "resumo": "lorem ipsum..........",
            "descricao": "lorem ipsum dolor sit.........",
            "categoria": "vestidos",
            "genero": "Feminino"
        },
        `)
    
}