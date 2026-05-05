# Sistema de Reserva de Hotéis

Projeto desenvolvido para a disciplina de **Prática Profissional em Análise e Desenvolvimento de Sistemas** — Universidade Presbiteriana Mackenzie, 2026.

## Integrantes

- Gabriela Refosco
- Julio de Moura Stelzer
- Lazaro Junior dos Santos
- Samyra Driele Alborgueti

## Links

- **Repositório:** https://github.com/gabixr/Mackenzie-ADS
- **Aplicação publicada:** https://faculdade-mack.vercel.app/
- **Quadro Kanban:** https://github.com/users/devsamyra/projects/1

---

## Sobre o Projeto

Aplicação web para pesquisa e reserva de hotéis, permitindo ao usuário buscar acomodações por destino e datas, visualizar detalhes e quartos disponíveis, e realizar o processo completo de reserva com checkout e pagamento.

## Tecnologias Utilizadas

- **React 19** com TypeScript
- **Vite** como ferramenta de build
- **Tailwind CSS 4** para estilização
- **shadcn/ui** para componentes de interface
- **Wouter** para roteamento client-side

## Funcionalidades — 2ª Iteração

- Pesquisa de hotéis por destino, datas de check-in/check-out e número de hóspedes
- Listagem de hotéis com foto, avaliação, preço por noite e comodidades
- Página de detalhes do hotel com quartos disponíveis e cálculo do valor total da estadia
- Processo de reserva com formulário de dados pessoais e pagamento (Cartão de Crédito ou PIX)
- Tela de confirmação de reserva com resumo completo

---

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado em seu computador:

- **Node.js** versão 18 ou superior — https://nodejs.org/
- **npm** versão 9 ou superior (já vem junto com o Node.js)

Para verificar se já possui o Node.js instalado, execute no terminal:

```bash
node -v
npm -v
```

---

## Como Executar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/gabixr/Mackenzie-ADS.git
```

### 2. Acesse a pasta do projeto

```bash
cd Mackenzie-ADS
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Acesse a aplicação

Abra o navegador e acesse:

```
http://localhost:5173
```

---

## Build para Produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

Os arquivos gerados ficam na pasta `dist/`. Para visualizar localmente:

```bash
npm run preview
```

---

## Versões
| Tag | Descrição |
|-----|-----------|
| v2  |  Iteração 2 da Fase de Construção |
