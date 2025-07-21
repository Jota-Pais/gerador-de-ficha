# 🤝 Guia de Contribuição

Ficamos muito felizes com seu interesse em contribuir para o **Gerador de Fichas D\&D 5e**\! Toda ajuda é bem-vinda, seja com código, documentação, sugestões de funcionalidades ou reporte de bugs.

Para garantir que o projeto continue organizado e que a experiência seja positiva para todos, criamos este guia com algumas diretrizes.

## 💻 Como Começar

1.  **Encontre uma Tarefa:** O melhor lugar para começar é a nossa [**página de Issues**](https://github.com/Jota-Pais/gerador-de-ficha/issues). Lá você encontrará uma lista de tarefas, bugs e ideias.
      * Procure por issues com a etiqueta `good first issue` se você é novo no projeto.
2.  **Pegue a Tarefa:** Antes de começar, comente na Issue que você gostaria de trabalhar nela e, se possível, atribua-a a si mesmo. Isso evita que duas pessoas trabalhem na mesma coisa.
3.  **Prepare o Ambiente:** Garanta que você consegue rodar o projeto localmente. As instruções completas estão no nosso `README.md`.

## ⚙️ Nosso Fluxo de Trabalho (Workflow)

Seguimos um fluxo de trabalho baseado em *feature branches* e *Pull Requests*. A branch `main` é protegida e deve estar sempre funcional.

1.  **Crie sua Branch:** A partir da branch `main` atualizada, crie uma nova branch para a sua tarefa. Utilize nosso padrão de nomes (veja abaixo).

    ```bash
    # Exemplo para uma nova funcionalidade
    git checkout -b feature/calculo-classe-armadura
    ```

2.  **Desenvolva:** Faça sua mágica\! Escreva o código, adicione os testes e garanta que tudo está funcionando como esperado.

3.  **Faça Commits:** Crie commits pequenos e com mensagens claras que descrevam a alteração.

    ```bash
    git commit -m "feat: Adiciona função para calcular CA base"
    ```

4.  **Abra um Pull Request (PR):** Quando sua funcionalidade estiver pronta, envie sua branch para o GitHub e abra um **Pull Request (PR)** em direção à branch `main`.

5.  **Descreva seu PR:** Preencha o template do PR. Um bom PR tem:

      * Um título claro e conciso.
      * Uma descrição do que foi feito.
      * Um link para a Issue que ele resolve (ex: `Resolve #15`).

6.  **Peça uma Revisão (Code Review):** Marque pelo menos **um** outro membro da equipe para revisar suas alterações. A revisão de código é uma ferramenta de aprendizado e qualidade essencial para nós.

7.  **Discuta e Ajuste:** Esteja aberto a feedbacks e sugestões. Faça os ajustes necessários com base nos comentários da revisão.

8.  **Merge:** Após a aprovação, seu PR será integrado (mergiado) à branch `main`. Parabéns e obrigado pela sua contribuição\!

## 🌿 Padrões de Nomes de Branch

Para manter nosso repositório organizado, por favor, use os seguintes prefixos para suas branches:

  * **`feature/`**: Para novas funcionalidades (ex: `feature/adicionar-equipamentos`).
  * **`bug/`**: Para correção de bugs (ex: `bug/vida-negativa-anao`).
  * **`docs/`**: Para melhorias na documentação (ex: `docs/atualiza-readme`).
  * **`refactor/`**: Para mudanças no código que não adicionam funcionalidades nem corrigem bugs (ex: `refactor/simplifica-funcao-de-calculo`).

## ✨ Padrões de Código

Nosso projeto utiliza **ESLint** e **Prettier** para manter um padrão de código limpo e consistente.

  * Por favor, configure seu editor de código para usar essas ferramentas ou rode os scripts de formatação antes de fazer o "commit" de suas alterações. Isso evita discussões sobre estilo e foca no que realmente importa: a lógica do código.

Obrigado por fazer parte deste projeto\!