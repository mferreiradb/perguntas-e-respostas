**PROJETO DE SITE FULLSTACK DE PERGUNTAS E RESPOSTAS UTILIZANDO HTML5, CSS3, EMBEDDED JAVASCRIPT, NODE.JS, MYSQL E BOOTSTRAP**

*Iniciando o projeto*

- Iniciar o projeto

        npm init -y

- Instalar o express

        npm i express --save

- Instalar o EJS

        npm i ejs --save

*EMBEDDED JAVASCRIPT (EJS)*

- Template Engine
- Desenha (renderiza) o HTML na tela
- Permite inserção de código JS no HTML

*Necessário configurar ejs para exibir o html*

- Para configurar o ejs como template engine, basta inserir uma linha de código antes as rotas. Nesta linha, a variável app utiliza a função set, passando passando dois parâmetros, um é a declaração de definição da view engine e o segundo é qual será a biblioteca utilizada (nesse caso, ejs)
- Usa-se res.render para renderizar a página criada desejada que esteja em views. A função render() terá como valor o nome do arquivo desejado

        app.set('view engine', 'ejs');

        app.get('/', (req, res) => {
            res.render('index');
        });

- Os htmls utilizados no projeto devem ser armazenados em uma pasta views, pois, por padrão o express busca dentro desta pasta os arquivos
- Por estar sendo usado o EJS, os arquivos terão ejs como extensão, ao invés de html
    - Apenas a extensão muda, mas a sintaxe do html permanece
- Para renderizar arquivos dentro de pastas basta inserir o nome da pasta / o nome o arquivo, desde que a pasta esteja dentro da pasta views

        app.get('/perfil', (req, res) => {
            res.render('main/Perfil');
        });

*Exibir variáveis no HTML*

- Para exportar as variáveis do backend, passa-se na função render() um segundo parâmetro, que é um objeto, onde os valores das chaves serão as vaiáveis que serão utilizadas. Dessa forma, render() passa a ter dois parâmetros: o primeiro é o arquivo que será renderizado e o segundo são as variáveis que serão exportadas para o arquivo ter acesso
- O objeto também pode ter dados definidos fora de variáveis
- A variável será acessada utilizando a propriedade definida no objeto

        app.get('/', (req, res) => {
            let nome = 'Mauricio';
            let lang = 'JavaScript';
            res.render('index', {
                nome: nome,
                lang: lang,
                empresa: 'TicBox Sistemas',
                colaboradores: 12
            });
        });

- Para exibir no html variáveis vindas do backend, usa-se no html uma tag especial, que contem a variável desejada

        <p><b>Nome:</b> <%= nome %></p>

        <p><b>Linguagem preferida:</b> <%= lang %></p>

        <p><b>Empresa:</b> <%= empresa %></p>

        <p><b>Total de colaboradores:</b> <%= colaboradores %></p>

*Expressões no HTML*

- Usa-se uma tag especial, que contém a estrutura

        - Estruturas condicionais
                
                <% if(msg){ %>
                
                <% } %>
                
                <% if(msg){ %>
                <h3>Mensagem de erro</h3>
                <% } %>

                <% if(msg){ %>

                <% } else { %>

                <% } %>

                <% if(msg){ %>
                <h3>Mensagem de erro</h3>
                <% } else { %>
                <h3>Mensagem de aprovação</h3>
                <% } %>
        
        - Estruturas de repetição

                <% produtos.forEach((produto) => { %>

                <% }) %>
                
                <% produtos.forEach((produto) => { %>
                        <ul><li>
                        <b>Produto:</b> <%=produto.nome%>
                        <b>Preço:</b> <%=produto.valor%>
                        </li></ul>
                <% }) %>


                <% for (let produto of produtos) { %>
                        <ul><li>
                        <b>Produto:</b> <%=produto.nome%>
                        <b>Preço:</b> <%=produto.valor%>
                        </li></ul>
                <% } %>

                <% for (produto of produtos) { %>
                        <% if (produto.ativo == true) { %>
                        <ul><li>
                                <b>Produto:</b> <%=produto.nome%>
                                <b>Preço:</b> <%=produto.valor%>
                        </li></ul>
                        <% } %>
                <% } %>

*Arquivos Estáticos no Express (CSS, IMG, JS, etc.)*

- Necessário apenas realziar a configuração, executando a função use, que tem como parâmetro express.static()
- A função static tem como parâmetro o nome da pasta que irá conter os arquivos. Por padrão de projeto, normalmente colocamos o nome desta pasta como public

                app.set('view engine', 'ejs');
                app.use(express.static('./public'));

- O link com css fica da seguinte forma:

                <link rel="stylesheet" href="/css/style.css">

- O link de imagens e demais arquivos seguem a mesma lógica do link de css

                <img src="/img/back.jpg" alt="fundo" class="image">

*BOOTSTRAP*

- Baixar no site e jogar os arquivos dentro  do projeto (versão 4.5 é usada neste projeto)
- Importar o CSS e JS do bootstrap no html

                <link rel="stylesheet" href="/css/bootstrap.min.css">

- Para a importação do JS são necessárias duas dependências
- Os demais CSS, que não forem do bootstrap, devem ser colocados depois do CSS do bootstrap
- Faz-se a importação das dependências e do arquivo JS do bootstrap
- A ordem deve ser a exata a seguir

                <script
                src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossorigin="anonymous"
                ></script>
                <script
                src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
                integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
                crossorigin="anonymous"
                ></script>
                <script src="/js/bootstrap.min.js"></script>

*REUTILIZANDO HTML COM PARTIALS*

- Partes de layouts que podem ser reutilizadas em outras páginas (componentes)
- Usa-se a função include para chamar o arquivo do componente desejado, apontando a propriedade partials seguido do caminho e nome do arquivo

                <%- include('partials/header.ejs') %>

*ENVIO DE DADOS PARA O BACKEND*

- Usando GET, os dados são enviados utilizando os query params (aparecem na url)
- Usando POST, os dados são enviados utilizando os body params (não aparecem na url)

- É necesspario configurar o express para receber os dados do front

                // Configura o Express para receber os dados do front
                app.use(express.urlencoded({ extended: false }));
                // Permite a leitura de dados via JSON
                app.use(express.json());

**SEQUELIZE**

- ORM (Object Relational Mapper - Mapeamento objeto-relacional)
    - Sistema para abstração da camada de Banco de Dados. Remove a necessidade de digitação das queries
- Framework que auxilia a trabalhar com banco de Dados a partir do node
- Seguir a documentação em https://www.npmjs.com/package/sequelize

    *npm i --save sequelize*

- Necessária a instalação do módulo relativo ao Banco de Dados que será utilizado. Ver na documentação

    *npm install --save mysql2*

*Conectando com o banco de dados*

        const Sequelize = require('sequelize')
        const sequelize = new Sequelize('nome_banco', 'usuario', 'senha', {
            host: 'nome_host',
            dialect: 'banco_de_dados'
        })
        *EX*
            const Sequelize = require('sequelize')
            const sequelize = new Sequelize('test', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
            })

*Verificando se a conexão foi bem sucedida*

- Basta adicionar ao fim do código:

        sequelize.authenticate().then(function(){
            console.log('Conectado')
        }).catch(function(erro) {
            console.log('Falha na conexão' + erro)
        })
        
*then*

- Funciona como uma funcção de callback. Neste caso para sequelize.authenticate(), de forma que caso a conexão seja estabelecida, será chamada.

*catch*

- Funciona como uma funcção de callback. Neste caso para sequelize.authenticate(), de forma que caso a conexão seja estabelecida, será chamada.

- As funções funcionam como *if/else* que testa se a conexão foi estabelecida, onde *then* é *if* e *catch* é *else*
    
    - As funções *then* e *catch* fazem parte do paradgma **Programação Assincrona**
    
*Criando model*

- Model é uma referência de uma tabela no Sequelize, podendo ser usado para manipular o Banco de Dados

*Criar tabelas*

- Cria-se uma variável, atribuindo a ela a variável sequelize, utilizando a função define(), passando como parâmetro o nome da tabela e seus campos com seus tipos, de acordo com o Sequelize

        const Postagem = sequelize.define('postagens', {
            titulo: {
                type: Sequelize.STRING
            },
            conteudo: {
                type: Sequelize.TEXT
            }
        })

*STRING*

    - Possui limite de caracteres
    - Varchar (255)

*TEXT*

    - Não possui limite de caracteres
    - Text

*INTERGER*

    - Int

*allowNull*

        - Define se o campo será not null
    
- Para que o comando seja executado, usa-se a função *sync* ao chamar a variável criada, passando como parãmetro o objeto *force*, que determinará se o Sequelize irá forçar a criação da tabela mesmo que ela exista. Force recebe um valor booleano

        const Postagem = sequelize.define('postagens', {
        titulo: {
            type: Sequelize.STRING
        },
        conteudo: {
            type: Sequelize.TEXT
        }
        })

        Postagem.sync({force: true})

*Inserir dados nas tabelas*

- Chama-se o model e usa-se a função *create*, passando como parâmetro, os campos com seus valores

        Postagem.create({
        titulo: 'Teste de Titulo',
        conteudo: 'Teste de conteudo'
        })

*Exibindo na tela dados do Banco de Dados*

- Usa-se a função findAll atribuida à variável referente ao model da tabela que deseja exibir os dados
                
                app.get('/', function(req, res) {
                Post.findAll()
                res.render('Home')
                })

- Após isso, usa-se a função then atribuida a Post.findAll(), passando uma função que tem um parâmetro, e como valor, passa-se a função render atrubuida a res

- Render recebe como valor o nome da página que será renderizada e um objeto que possui como propriedade e valor da propriedade o parâmetro passado na função em .then

- Isto fornece para apágina indicada o acesso aos dados da tabela no banco de dados

                app.get('/', function(req, res) {
                Post.findAll().then(function(posts) {
                res.render('Home', {posts: posts})
                })
                })

- O conteúdo pode ser ordenado passando para a função findAll um objeto com o atributo order e que tem como valor um array englobado por colchetes, onde o primeiro valor será a coluna que será referenciada para ordenamento e o segundo valor será o tipo de oredem: ascendente ou descentente

                app.get('/', function(req, res) {
                Post.findAll({order: [['id', 'desc']]}).then(function(posts) {
                res.render('Home', {posts: posts})
                })
                })

- Podemos obrigar o sequelize a mostrar no console apenas os registros do banco, sem informações adicionais, utilizando a propriedade raw

                app.get('/', function(req, res) {
                Post.findAll({order: [['id', 'desc']], raw: true}).then(function(posts) {
                res.render('Home', {posts: posts})
                })
                })

*Exibindo as perguntas no EJS*

- Percorre-se o array de dados do banco para que sejam exibidos