**PROJETO DE SITE FULLSTACK DE PERGUNTAS E RESPOSTAS UTILIZANDO HTML5, CSS3, EMBEDDED JAVASCRIPT, NODE.JS, MYSQL E BOOTSTRAP**

*Iniciando o projeto*

- Iniciar o projeto

        npm init -y

- Instalar o express

        npm i express --save

- Instalar o EJS

        npm i ejs --save

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


*EMBEDDED JAVASCRIPT (EJS)*

- Template Engine
- Desenha (renderiza) o HTML na tela
- Permite inserção de código JS no HTML