

const linksImg = ['https://cea.vtexassets.com/arquivos/ids/12639573-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/51535364-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/12639577-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/34642218-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/22116258-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/8920434-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/37019532-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/53691261-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/52429891-426-512?width=426&height=512&aspect=true', 'https://cea.vtexassets.com/arquivos/ids/39486964-426-512?width=426&height=512&aspect=true']

const nameList = ['Calça Masculina Esportiva Ace Básica com Vivo Contrastante Azul Marinho', 'calça de sarja carrot Preta', 'Calça Masculina Esportiva Ace Básica com Vivo Contrastante  Preta', 'Calça Jeans Masculina Slim Azul Médio', 'calça de sarja carrot bege', 'Calça Social Masculina Preta', 'Calça de Moletom Felpado Masculina Esportiva Ace com Listras Laterais Preta', 'Calça Slim Jeans com Bolsos Azul Claro', 'calça social masculina chino carrot chumbo', 'Calça Reta Jeans Azul Escuro']

const priceList = ['43.99', '139.99', '43.99', '129.99', '139.99', '99.99', '119.99', '129.99', '139.99', '129.99']



for (let i = 0; i < 10; i++) {
    
        console.log(`
        {
            "id": "${i+71}",
            "nome": "${nameList[i]}",
            "imagem": "${linksImg[i]}",
            "valor": "${priceList[i]}",
            "tamanho":[
              "36","38","40","42","44","46","48"
              ],
            "resumo": "lorem ipsum..........",
            "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facilis quis illo reprehenderit asperiores cumque explicabo, pariatur provident quibusdam incidunt ipsum doloribus illum odio consequatur, iusto nulla in excepturi fugit!",
            "categoria": "calças-masculinas",
            "genero": "Masculino"
        },
        `)
    
}