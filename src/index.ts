import inquirer from 'inquirer';
import {  TODAS_AS_RACAS, TODAS_AS_CLASSES} from './data/central'; 
import { Raça, Atributos, Classe } from './types/dnd.types'; 
import { calcularFicha } from './logic/atributos.logic';

const opcoesDeRaca = TODAS_AS_RACAS.map(raca => ({
    name: raca.nome, // O texto que o usuário vê
    value: raca,     // O objeto completo que será retornado
  }));
const opcoesDeClasse = TODAS_AS_CLASSES.map(classe => ({
    name: classe.nome, // O texto que o usuário vê
    value: classe,     // O objeto completo que será retornado
  }));




async function criarPersonagem() {
  // Limpa o console e dá as boas-vindas.
  console.clear();
  console.log('⚔️ Bem-vindo ao Gerador de Fichas de D&D 5e! ⚔️');
  console.log('--------------------------------------------------');

  // 1. PERGUNTAR A RAÇA
  const respostasRaca = await inquirer.prompt([
    {
      type: 'list',
      name: 'racaEscolhida',
      message: 'Primeiro, escolha a sua raça:',
      choices: opcoesDeRaca,
        loop: false, 
    },
  ]);
  const raca: Raça = respostasRaca.racaEscolhida;

// -------- ATRIBUTOS INICIAIS --------

console.log('\n--------------------------------------------------');
  console.log('Agora, defina seus atributos iniciais (valores de 3 a 20).');

  const nomesDosAtributos  = ['Força', 'Destreza', 'Constituição', 'Inteligência', 'Sabedoria', 'Carisma'];

  const respostaAtributos = await inquirer.prompt(nomesDosAtributos.map(atributo => ({
    type: 'number',
    name: atributo, 
    message: `Digite o valor de ${atributo}:`,
    default: 10, 
  })));

  const atributosBase = respostaAtributos as Atributos;

  console.log('--------------------------------------------------');

  // ----------------- CLASSE ------------------------
  const respostaClasse = await inquirer.prompt([
    {
      type: 'list',
      name: 'classeEscolhida',
      message: 'Primeiro, escolha a sua classe:',
      choices: opcoesDeClasse,
        loop: false, 
    },
  ]);
  const classe: Classe = respostaClasse.classeEscolhida;
// -------------NIVEL DO PERSONAGEM---------------


console.log ('\n--------------------------------------------------');
  console.log('Agora, diga o nivel do seu personagem')
  const respostaNivel = await inquirer.prompt([
    {
      type: 'number',
      name: 'nivel',
      message: 'Qual o seu nivel?',
      default: 1,
    },
  ]);
  const nivel = respostaNivel.nivel;
 // ----------------- CÁLCULO E EXIBIÇÃO DA FICHA -------------------

  // 2. CHAME A FUNÇÃO UMA ÚNICA VEZ
  const fichaFinal = calcularFicha(raca, classe, nivel, atributosBase);

  // 3. EXIBA OS RESULTADOS OBTIDOS DO OBJETO
  console.log('\n==================================================');
  console.log('✅ FICHA DE PERSONAGEM GERADA! ✅');
  console.log('==================================================\n');

  console.log(`👤 Raça: ${raca.nome}`);
  console.log(`🔰 Classe: ${classe.nome}`);
  console.log(`⭐ Nível: ${nivel}\n`);

  console.log('Atributos Finais (com bônus racial):');
  console.log(JSON.stringify(fichaFinal.atributosFinais, null, 2));

  const modFormatado = fichaFinal.modConstituicao >= 0 ? `+${fichaFinal.modConstituicao}` : fichaFinal.modConstituicao;
  console.log(`❤️  Vida Máxima: ${fichaFinal.vidaMaxima}`);
}
criarPersonagem()
// startando o gerador de fichas  --->  npx ts-node src/index.ts