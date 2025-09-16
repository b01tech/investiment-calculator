# 📊 Calculadora de Investimentos

Uma aplicação web moderna desenvolvida em Angular para calcular e visualizar o crescimento de investimentos ao longo do tempo. A calculadora permite simular diferentes cenários de investimento considerando aportes iniciais, contribuições anuais, taxa de retorno esperada e período de investimento.

## ✨ Funcionalidades

- **Cálculo de Investimentos**: Simule o crescimento do seu investimento ao longo dos anos
- **Parâmetros Personalizáveis**:
  - Investimento inicial
  - Aporte anual
  - Taxa de retorno esperada (%)
  - Duração do investimento (anos)
- **Resultados Detalhados**: Visualize ano a ano:
  - Juros acumulados
  - Valor total investido
  - Valor ao final de cada ano
  - Total de juros gerados
- **Interface Responsiva**: Design moderno e adaptável para diferentes dispositivos

## 🚀 Desenvolvimento

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Angular CLI

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Navegue até o diretório
cd investment-calculator

# Instale as dependências
npm install
```

### Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
ng serve
# ou
npm start
```

Acesse `http://localhost:4200/` no seu navegador. A aplicação será recarregada automaticamente quando você modificar os arquivos fonte.

### Outros Comandos

```bash
# Build para produção
ng build

# Executar testes
ng test

# Build com watch mode
ng build --watch --configuration development
```

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── investment-results/    # Componente de exibição dos resultados
│   │   └── user-input/           # Componente de entrada de dados
│   ├── core/
│   │   └── models/               # Interfaces e modelos de dados
│   ├── services/
│   │   └── calculator/           # Serviço de cálculos de investimento
│   └── shared/
│       └── header/               # Componente de cabeçalho
├── assets/                       # Recursos estáticos
└── styles.scss                   # Estilos globais
```

## 🛠️ Tecnologias Utilizadas

- **Angular 20.3.0** - Framework principal
- **TypeScript** - Linguagem de programação
- **RxJS** - Programação reativa
- **SCSS** - Pré-processador CSS
- **Jasmine & Karma** - Testes unitários

## 📝 Como Usar

1. **Investimento Inicial**: Digite o valor que você pretende investir inicialmente
2. **Aporte Anual**: Informe o valor que você planeja investir anualmente
3. **Taxa de Retorno**: Defina a taxa de retorno esperada (em porcentagem)
4. **Duração**: Escolha por quantos anos você pretende manter o investimento
5. **Calcular**: Clique no botão para ver os resultados detalhados

Os resultados mostrarão uma tabela com a evolução do investimento ano a ano, incluindo juros acumulados e valor total.

---

*Este projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) versão 20.3.1.*
