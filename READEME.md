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