# 🎮 Desafio: Escrevendo as Classes de um Jogo

<p align="center">
  <img src="./img/demo-ataque.gif" alt="Demonstração do Jogo em Funcionamento" width="600px">
</p>

Este projeto foi desenvolvido como parte do curso de Lógica de Programação da **DIO (Digital Innovation One)**. O objetivo foi aplicar conceitos fundamentais de Programação Orientada a Objetos (POO) utilizando JavaScript.

---

## 📝 O que o código faz?
O programa simula a criação de heróis de diferentes classes (Guerreiro, Mago, Artista Marcial, Maga). 
Ao instanciar um herói, o sistema processa automaticamente o tipo de ataque baseado na sua classe:
- **Mago** ataca usando **magia**.
- **Guerreiro** ataca usando **espada**.
- **Artista Marcial** ataca usando **punhos e chutes**.
- **Maga** ataca usando **golpe básico**.

A lógica utiliza uma estrutura de decisão eficiente que mapeia o tipo de classe para o ataque correspondente, exibindo a mensagem: *"O heroí com (nome) de (idade), do (tipo) atacou usando (descrição do ataque)"*.

---

## 🚀 Tecnologias Utilizadas
- **JavaScript (ES6+)**
- **Node.js** (para execução local)

## 🧠 Conceitos Aplicados
- **Classes e Objetos**: Criação de uma estrutura genérica para heróis.
- **Encapsulamento**: Métodos internos para gerenciar a lógica de ataque.
- **Estruturas de Decisão**: Uso de objetos (dicionários) para mapear ações de forma eficiente.
- **Manipulação de Arrays**: Uso do método `forEach` para iterar sobre a lista de heróis.
- **Tratamento de Strings**: Uso de `.toLowerCase()` para garantir que a lógica funcione independente de letras maiúsculas ou minúsculas.

## 🛠️ Como rodar o projeto
1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone este repositório.
3. No terminal, execute:
   ```bash
   node index.js
   ``` 
---

## 👤 Autor:
 **Mauricio Jose Ribas (MSYonL)**
