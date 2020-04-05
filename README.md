#Teste de monorepo com Lerna

## Ideia
Consiste em compartilhar o modulo lib em quantas actions eu quiser.

## Comandos

```bash
    npx lerna bootstrap -- --production //retira o jest do node_modules
    npx lerna bootstrap //insta os modulos
    npx lerna clean // limpa os modulos
```

## Notas
    Em alguns casos, o lerna pode confundir o seu pacote 'lib' por exemplo com um pacote do npm mesmo, estranho mas acontece
    solução inicial
    ```bash
        lib/package.json
            "name": "lib-do-max",
        root
            npx lerna add lib-do-max functions/store
    ```
    Alterei o nome do modulo.. ai funciona

    Tem uma outra solucao que só descobri depois
    ```bash
        npx lerna create @yourproject/common -y
        'Using scoped names for your project packages is a clear way to distinguish them from publicly available NPM packages.

        We can make sure we have the same version of the React and ReactDOM in each package by calling lerna add from the root of the repository.'

        npx lerna add @yourproject/common
    ```


## Instalacao do projeto

```bash
    npm install
    npx lerna boostrap
```

## Testando

```bash
    node functions/store/
```
Deveria printar que alguem do orange deve morrer HAUAHUA