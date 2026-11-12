# Programação Orientada a Objetos — RI5

Repositório destinado ao desenvolvimento da atividade **RI5**, realizada na disciplina de **Programação Orientada a Objetos**, do curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **Faculdade de Tecnologia de São José dos Campos (FATEC-SJC)**.

## Sobre o Projeto

O projeto consiste em uma aplicação desenvolvida em **TypeScript** para representar a estrutura de uma empresa, seus funcionários, endereços e telefones, aplicando conceitos de programação orientada a objetos.

A atividade explora a implementação de classes com tipagem estática, construtores, modularização, composição de objetos e separação de responsabilidades.

O sistema permite criar uma empresa, associar funcionários e informações de contato e apresentar os dados organizados no console.

## Funcionalidades

- Criação de objetos representando empresas, funcionários, endereços e telefones.
- Armazenamento de informações cadastrais de empresas.
- Associação de funcionários a uma empresa.
- Associação de endereços e telefones aos objetos.
- Utilização de atributos com tipos definidos.
- Implementação de construtores para inicialização dos objetos.
- Organização das classes em arquivos independentes.
- Exportação e importação de módulos TypeScript.
- Implementação de uma classe responsável pela apresentação dos dados.
- Exibição formatada das informações no console.

## Estrutura das Classes

A aplicação utiliza cinco classes principais.

### Telefone

Responsável por representar as informações de contato telefônico.

**Atributos:**
- `ddd: string`: código de área.
- `numero: string`: número do telefone.

### Endereco

Responsável por armazenar as informações de localização de empresas e funcionários.

**Atributos:**
- `numero: number`: número do imóvel.
- `rua: string`: nome da rua.
- `bairro: string`: bairro.
- `cidade: string`: cidade.

### Funcionario

Responsável por representar os funcionários vinculados à empresa.

**Atributos:**
- `nome: string`: nome do funcionário.
- `matricula: string`: identificação do funcionário.
- `cpf: string`: CPF do funcionário.
- `endereco: Endereco`: objeto contendo seu endereço.
- `telefone: Telefone`: objeto contendo seu telefone.

### Empresa

Responsável por representar uma empresa e reunir suas informações cadastrais e funcionários.

**Atributos:**
- `funcionarios: Funcionario[]`: lista de funcionários.
- `endereco: Endereco`: endereço da empresa.
- `razaoSocial: string`: razão social.
- `nomeFantasia: string`: nome fantasia.
- `cnpj: string`: CNPJ.
- `telefones: Telefone[]`: lista de telefones.

### Descriptor

Responsável pela apresentação das informações da empresa e de seus funcionários no console.

**Método:**
- `descrever(empresa: Empresa): void`: recebe um objeto da classe `Empresa` e exibe suas informações cadastrais, endereço e dados dos funcionários.

A utilização dessa classe permite separar a estrutura dos objetos da lógica de apresentação das informações.

## Modularização do Código

O projeto organiza cada classe em um arquivo TypeScript independente, utilizando `export default` para disponibilizar as classes e `import` para reutilizá-las em outros módulos.

Essa abordagem facilita a organização, manutenção e reutilização do código.

O arquivo `main.ts` é responsável por instanciar os objetos e executar a aplicação, enquanto `descriptorEmpresa.ts` concentra a apresentação dos dados.

## Funcionamento

Inicialmente, o programa cria objetos das classes `Endereco` e `Telefone`, representando informações de localização e contato.

Em seguida, é instanciado um funcionário, contendo nome, matrícula, CPF, endereço e telefone.

O funcionário é armazenado em um array e associado a um objeto da classe `Empresa`, que também recebe informações como razão social, nome fantasia, CNPJ, endereço e telefones.

Posteriormente, é criado um objeto da classe `Descriptor`, responsável por apresentar os dados da empresa.

Por fim, o método `descrever()` é executado, exibindo no console as informações cadastrais da empresa e dos funcionários associados.

## Conceitos Aplicados

- Programação orientada a objetos.
- Classes e construtores.
- Criação e instanciação de objetos.
- Atributos e métodos.
- Tipagem estática com TypeScript.
- Composição e associação entre objetos.
- Arrays tipados.
- Modularização de código.
- Exportação e importação de classes.
- Separação de responsabilidades.
- Estruturas de repetição `for...of`.
- Compilação de TypeScript para JavaScript.

## Tecnologias Utilizadas

- **TypeScript:** linguagem utilizada para implementar as classes e a lógica da aplicação.
- **JavaScript:** linguagem gerada após a compilação do TypeScript.
- **Node.js:** ambiente de execução da aplicação.
- **npm:** gerenciamento de dependências e scripts.
- **TypeScript Compiler (tsc):** compilação do código TypeScript.

## Estrutura do Repositório

```text
RI5/
├── src/
│   ├── descriptorEmpresa.ts
│   ├── empresa.ts
│   ├── endereco.ts
│   ├── funcionario.ts
│   ├── main.ts
│   └── telefone.ts
│
├── dist/
│   ├── descriptorEmpresa.js
│   ├── empresa.js
│   ├── endereco.js
│   ├── funcionario.js
│   ├── main.js
│   └── telefone.js
│
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Como Executar

**1.** Clone o repositório:

```bash
git clone https://github.com/WendyMininel/RI5.git
```

**2.** Acesse a pasta do projeto:

```bash
cd RI5
```

**3.** Instale as dependências:

```bash
npm install
```

**4.** Execute a versão JavaScript já compilada:

```bash
npm start
```

O comando executa o arquivo `dist/main.js`, apresentando as informações da empresa e de seus funcionários no terminal.

Para recompilar o projeto a partir dos arquivos TypeScript, é necessário que o `tsconfig.json` esteja configurado para incluir a pasta `src`.

Após ajustar a configuração, utilize:

```bash
npm run build
npm start
```

## Objetivo Acadêmico

Aplicar e aprofundar os conceitos de programação orientada a objetos utilizando TypeScript, com foco na implementação de classes, tipagem de atributos, construtores e relacionamentos entre objetos.

A atividade também busca desenvolver habilidades relacionadas à modularização, organização de arquivos, separação de responsabilidades e utilização de ferramentas de compilação para o desenvolvimento de aplicações estruturadas.

## Autora

**Wendy Santos Mininel**

Análise e Desenvolvimento de Sistemas — FATEC São José dos Campos

[GitHub — WendyMininel](https://github.com/WendyMininel)

---

Projeto desenvolvido para fins acadêmicos na disciplina de Programação Orientada a Objetos.
