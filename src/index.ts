import inquirer from 'inquirer';
import {  TODAS_AS_RACAS,} from './data/central'; 
import { Raça, Atributos } from './types/dnd.types'; 

const opcoesDeRaca = TODAS_AS_RACAS.map(raca => ({
    name: raca.nome, // O texto que o usuário vê
    value: raca,     // O objeto completo que será retornado
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

  // Lista dos atributos para gerar as perguntas dinamicamente
  const nomesDosAtributos  = ['Força', 'Destreza', 'Constituição', 'Inteligência', 'Sabedoria', 'Carisma'];

  const respostaAtributos = await inquirer.prompt(nomesDosAtributos.map(atributo => ({
    type: 'number',
    name: atributo, 
    message: `Digite o valor de ${atributo}:`,
    default: 10, 
  })));

  const atributosBase = respostaAtributos as Atributos;


console.log('\n--------------------------------------------------');
console.log(raca)
console.log(atributosBase)
}
criarPersonagem()
// startando o gerador de fichas  --->  npx ts-node src/index.ts