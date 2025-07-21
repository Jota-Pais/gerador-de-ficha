🎲 Gerador de Fichas D&D 5e (CLI)
Bem-vindo ao Gerador de Fichas de D&D 5e! Este é um projeto de código aberto, focado em aprendizado e colaboração, para criar uma ferramenta de linha de comando (CLI) que automatiza e simplifica a criação de fichas de personagem para Dungeons & Dragons 5ª Edição.

🎯 Objetivo do Projeto
O objetivo principal desta primeira versão é desenvolver uma ferramenta interativa no terminal que guia o usuário através do processo de criação de um personagem, desde a escolha da raça e classe até o cálculo final de seus atributos, vida, perícias e resistências, com base nas regras do Livro do Jogador.

✨ Funcionalidades Principais
Criação Interativa: Um passo a passo guiado no terminal para todas as escolhas importantes.

Seleção Completa: Escolha de Raça, Classe e Antecedente com dados baseados no Livro do Jogador.

Cálculos Automáticos:

Cálculo dos Atributos Finais (aplicando bônus raciais e respeitando o limite de 20).

Cálculo da Vida Máxima com base no nível, classe e modificador de Constituição.

Cálculo do Bônus de Proficiência baseado no nível total do personagem.

Determinação dos bônus de Resistências e Perícias (incluindo as proficiências de classe e antecedente).

Validação de Dados: Garante que os dados inseridos pelo usuário (como valores de atributos) sigam as regras do sistema.

💻 Stack Tecnológico do Projeto
Categoria	Ferramenta/Stack	Observações
Runtime	Node.js	Ambiente de execução principal para o projeto em JavaScript/TypeScript.
Linguagem	TypeScript	Adiciona tipagem estática, melhorando a organização e a prevenção de bugs no código.
Gerenciador de Pacotes	npm	Padrão do Node.js, utilizado para instalar e gerenciar as dependências (npm install).
Interface de Terminal	Inquirer.js	Biblioteca principal para criar as perguntas interativas (listas, inputs, etc.) no console.
Execução	ts-node	Permite executar os arquivos TypeScript diretamente (npx ts-node ...) sem compilação manual.
Versionamento	Git & GitHub	Git para histórico local e GitHub para repositório remoto, colaboração e gerenciamento de tarefas.
Qualidade de Código	ESLint & Prettier	Ferramentas recomendadas para padronizar a formatação e identificar erros automaticamente.
Estrutura de Dados	Módulos .ts	Os dados do jogo (raças, classes) são organizados em módulos exportáveis para fácil manutenção.

Exportar para as Planilhas
🚀 Começando
Para rodar este projeto localmente, siga os passos abaixo.

Pré-requisitos
Node.js (versão 18 ou superior recomendada)

Git

Instalação e Execução
Clone o repositório:

Bash

git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
Navegue até a pasta do projeto:

Bash

cd NOME_DA_PASTA_DO_REPOSITORIO
Instale as dependências:

Bash

npm install
Execute a aplicação:

Bash

npx ts-node src/index.ts
🤝 Como Contribuir
Estamos abertos a colaboradores que queiram aprender e ajudar a construir esta ferramenta! Para garantir que o trabalho seja organizado, temos um fluxo de contribuição definido.

Por favor, leia nosso GUIA DE CONTRIBUIÇÃO para entender nosso fluxo de trabalho, padrões de branch, e como abrir um Pull Request.

📜 Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
