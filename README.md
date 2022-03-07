# Davi Silva Martins das Neves

O Projeto gerado com create react-app [Create React App](https://github.com/facebook/create-react-app).


## Como iniciar o projeto

### ` git clone [https://github.comDaviNeves0/Tinnova.git]`

## Scripts para inicializar

### `yarn install ou npm install`
utilize yarn ou npm no diretório da aplicação para instalar as dependências

### `yarn start ou npm start`

`yarn start` executa a aplicação no modo de desenvolvimento.]
Open [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## Conhecendo a aplicação

A aplicação possui um CRUD de usuarios onde é possível cadastrar, alterar e remover. Todos os dados estão sendo salvo no LocalStorage do navegador

### Página Incial 

Na página incial é possível fazer a visualização dos dados já cadastrados na plataforma, é possível adicionar um novo usuários clicando no botão "Cadastrar"

![pagina Home](https://i.ibb.co/3p7mCt6/Home.png)

Quando a página é carregada, é feita uma verificação se há ou não dados salvos anteriormente, se não houver, a aplicação realiza a gravação. 

![LocalStorage](https://i.ibb.co/V9ZyHT8/local-Store.pngv)

### Fluxo Cadastro 

Clicando no botão "Cadastrar" vamos para o fluxo de cadastro, onde é apresentado um formulário para o preenchimento das informações. 
O Botão "Cadastrar" da página de Cadastro só está ativo se todos os dados estiverem corretos.

![Cadastro](https://i.ibb.co/56x7t2F/Cadastrar.png)

### Validando o Formulário

Sempre que houver alguma informação errada, a validação mostrará para o usuário qual é a informação incorreta.

Nome: Deve conter mais de 3(três) caracteres.

![validar Nome](https://i.ibb.co/TvbTJHk/Validar-Nome.png)

Email: Deve ser uma email válido (conter um "@")

![validar Email](https://i.ibb.co/mJrv3jM/validar-Email.png)

CPF: Deve conter apenas números e ter 11 Digitos.

![Validar CPF](https://i.ibb.co/ZWC8K3R/Validar-Cpf.png)

Telefone: Deve conter apenas números e ter 10 Digitos.

![Validar Phone](https://i.ibb.co/YPgtKMt/Validar-Telefone.png)

Quando todas as informações estiverem corretas o botão é ativado e será possível cadastrar o usuário.

![Cadastro Ativo](https://i.ibb.co/4fwrnZK/Validacao-OK.png)

Usuário cadastrado com sucesso !

![Sucesso](https://i.ibb.co/qygW8F2/Adicionado.png)

### Fluxo Atualização 

Para realizar a atualização das informações, basta clicar no botão "Atualizar" presente nos cards.
Assim que a página de Atualização abrir, todos os dados daquele usuário serão carregados automaticamente para os campos do Formulário.

![Editar](https://i.ibb.co/JqvNrpg/atualizar.png)

Basta alterar as informações e clicar em atualizar

Usuário Atualizado com sucesso !

![Atualizado Sucesso](https://i.ibb.co/sgN1Tqn/Atualizado.png)

