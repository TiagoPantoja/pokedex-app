# Interface Projeto Pokédex
Esta é uma aplicação front-end utilizando React e TypeScript que interage com o projeto API Pokédex.

## Pré-requisitos
Node.js instalado em sua máquina.

1. Clone o repositório:
```
git clone https://github.com/TiagoPantoja/pokedex-app.git
```
2. Navegue até o diretório `pokedex-app`
```
cd pokedex-app
```
3. Execute o comando para construir a imagem Docker:
```
docker buiild -t pokedex-app:latest .
```
4. Execute o cônteiner com o comando:
```
docker run -p 8080:80 pokedex-app:latest
```

5. Instale as dependências:
```
npm install
```

6. Inicie o servidor de desenvolvimento:
```
npm start
```
A aplicação estará acessível em http://localhost:3000.

### Build
Construir a aplicação para produção:
```
npm run build
```

## Como usar:
### Buscar um Pokémon:
1. Insira o nome ou ID do Pokémon na barra de pesquisa.
2. Clique no botão "Buscar".

### Ver lista de Pokémon:
1. Visite: http://localhost:3000
2. Clique nos nomes dos Pokémons para mais detalhes.

### Ver detalhes de Pokémon:
1. Clique no nome de um Pokémon na lista para ver informações detalhadas.
2. Cique no botão "Salvar no Banco de Dados" para salvar o Pokémon no banco.

### Integração com a API Pokédex
A aplicação interage com a API Pokédex em `http://localhost:8080`. A API deve estar em execução antes de usar a aplicação front-end.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
