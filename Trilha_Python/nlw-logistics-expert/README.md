# Project Trilha Python

Ao momento o projeto é a construção de uso lógistico com código em barras. Devido alguns conflitos e compilação para registrar o processo de desenvolvimento dessa trilha em específico, fiz essa alternativa para orientações.

## Configurações de Ambiente

Esse projeto usa o Venv, que basicamente é um ambiente virtualizado para fazer operações de gerenciamento de pacotes sem a necessidade de instalar as dependências específicas globalmente. De forma que possa ser exemplificado e integrado no próprio projeto específicado.

### Venv - Diretório de Ambiente `.venv`

A instalação do Venv é um dos primeiros pré-requisitos do projeto. Pode pesquisar pela documentação oficial do próprio Venv ou inserir o comando `pip install virtualenv`, que ao instalar, pode criar o diretório `.venv` com o comando `python -m Venv .venv`.

Por padrão o editor responsável reconhecerá o diretório e selecionará o interpretador no próprio terminal. Caso esteja no VsCode, pode usar as teclas CRLT + Shift + P > Pesquisar por Select Interpreter e ajustar as devidas configurações, para assim a própria IDE faz as devidas configurações.

### Pylint e Pre-commit

Essas duas dependências tive algumas problematicas para realizar os commits necessários para o desenvolvimento e continuidade do projeto.

Para exemplificar a instalação de ambos, podemos pesquisar pela documentação ou basta inserir `pip install pylint` e ao instalar, inserir o `pip install pre-commit`.

Desse modo as configurações dessas dependências para serem usadas no projeto, serão totalmente diferentes.

#### Pylint

Ao instalar a dependência, podemos usar o comando `pylint --generate-rcfile > .pylintrc` para gerar o arquivo `.pylintrc` na raiz do projeto.

Serve para definimos propriedades para seguir determinados padrões de escrita e desenvolvimento da produção do próprio projeto.

O arquivo responsável nesse projeto específico, as propriedades que ao momento estão sendo inseridas é o arquivo `pyl.txt`, no qual tem as nossas propriedades que estão sendo usadas.

Qualquer alteração posterior, será inserido nesse arquivo.

#### Pre-Commit

Ao instalar essa dependência será criado um hook integrado na pasta oculta `.git`, específicamente no caminho `.git/hooks/`, no qual com ausencia do `.sample` pode ser ussado como um gancho na execução do próprio git ou rodar scripts. Boa parte dos arquivos estão com a extensão `.sample`, no qual não são executáveis pelo Git, até que essa extensão seja removida.

Ao continuamos, conforme a documentação do pre-commit. Temos que criar um arquivo chamado `.pre-commit-config.yaml`, no qual terá o conteúdo que está exemplificado no arquivo `pc.txt`.

Qualquer alteração referente, estará nesse arquivo responsável.

Uma das problematicas que estive, é que o arquivo `.pylintrc` não estava sendo encontrado e sempre estará ocorrendo erros. Desse modo, resolvi desinstalar boa parte dessas dependências e simplificar ainda mais o uso do verisonamento desse grande projeto de estudos que estou realizando.

## Considerações Finais

Quais quer alterações referentes, modificarei o ``README.md`` para mais detalhes do projeto, alterando e agrupando o histórico de alteração:

-  Alteração: dia 12 de Maio de 2024, às 20h56
