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

*Arquivos Estátivos no Express (CSS, IMG, JS, etc.)*

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