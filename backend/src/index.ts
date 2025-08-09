import inquirer from 'inquirer';
import {  TODAS_AS_RACAS, TODAS_AS_CLASSES, TODOS_OS_ANTECEDENTES} from './data/central'; 
import { Raça, Atributos, Classe, Resistencias, Pericias } from './types/dnd.types'; 
import { calcularFicha, calcularModificador } from './logic/atributos.logic';
import { calculateProficiencia } from './logic/proeficiencia.logic'; 


const opcoesDeRaca = TODAS_AS_RACAS.map(raca => ({
    name: raca.nome, // O texto que o usuário vê
    value: raca,     // O objeto completo que será retornado
  }));
const opcoesDeClasse = TODAS_AS_CLASSES.map(classe => ({
    name: classe.nome, // O texto que o usuário vê
    value: classe,     // O objeto completo que será retornado
  }));
const opcoesDeAntecedente = TODOS_OS_ANTECEDENTES.map(antecedente => ({
    name: antecedente.nome, // O texto que o usuário vê
    value: antecedente,     // O objeto completo que será retornado
}))
 


async function criarPersonagem() {
  // Limpa o console e dá as boas-vindas.
  console.clear();
  console.log('⚔️ Bem-vindo ao Gerador de Fichas de D&D 5e! ⚔️');
  console.log('--------------------------------------------------');

  // ----------------- RAÇA ------------------------
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

  // ----------------- CLASSE ------------------------
  const respostaClasse = await inquirer.prompt([
    {
      type: 'list',
      name: 'classeEscolhida',
      message: 'Agora, escolha a sua classe:',
      choices: opcoesDeClasse,
        loop: false, 
    },
  ]);
  const classe: Classe = respostaClasse.classeEscolhida;
// ------------------ANTECEDENTE-------------------

console.log ('\n--------------------------------------------------');
const respostaAntecedente = await inquirer.prompt([
  {
    type: 'list',
    name: 'antecedenteEscolhido',
    message: 'Agora, escolha o seu antecedente:',
    choices: opcoesDeAntecedente,
    loop: false,
  },
]);
const antecedente = respostaAntecedente.antecedenteEscolhido;
const periciasAntecedente = antecedente.pericias
// ------------------ ATRIBUTOS INICIAIS ------------------

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

// ------------------ pericias treinado ------------------
const periciasDisponiveis = classe.pericias .filter(pericia => !periciasAntecedente.includes(pericia)); // Remove as perícias do antecedente

console.log ('\n--------------------------------------------------');
console.log('Agora, escolha as perícias treinadas de acordo com a sua classe:');

const respostaPericias = await inquirer.prompt([
  {
    type: 'checkbox',
    name: 'periciasEscolhidas',
    message: 'Escolha suas perícias de classe, voce tem direito á escolha de ' + classe.numero_pericias_escolha + ' perícias:',
    choices: periciasDisponiveis,
    validate: function (respostas) {
      if (respostas.length !== classe.numero_pericias_escolha) {
        return `Você deve escolher exatamente ${classe.numero_pericias_escolha} perícias.`;
      }
      return true;
    },
  },
]);
const periciasTreinadas = [...periciasAntecedente, ...respostaPericias.periciasEscolhidas].sort();








// ----------------- CÁLCULOS -------------------

// função ficha final não faz a ficha final, tem que arrumar isso aí
  // da pra colocar essa função de calcular o midificador dentro da calcular ficha
  // e retornar o modificador junto com os atributos finais
  const proeficiencia = calculateProficiencia(nivel);
 const fichaFinal = calcularFicha(raca, classe, nivel, atributosBase);
 const modificadores: Atributos = {
  Força : calcularModificador(fichaFinal.atributosFinais.Força),
  Destreza : calcularModificador(fichaFinal.atributosFinais.Destreza),
  Constituição : calcularModificador(fichaFinal.atributosFinais.Constituição),
  Inteligência : calcularModificador(fichaFinal.atributosFinais.Inteligência),
  Sabedoria : calcularModificador(fichaFinal.atributosFinais.Sabedoria),
  Carisma : calcularModificador(fichaFinal.atributosFinais.Carisma)

 }
// ----------------- RESISTENCIAS -------------------


const resistencias: Resistencias = {
    forca: modificadores.Força,
    destreza: modificadores.Destreza,
    constituicao: modificadores.Constituição,
    inteligencia: modificadores.Inteligência,
    sabedoria: modificadores.Sabedoria,
    carisma: modificadores.Carisma,
};
// Adiciona o bônus de proficiência às resistências da classe
classe.resistencias.forEach(res => {
    const chave = res.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "") as keyof Resistencias; // Remove acentos e caracteres especiais e converte para minúsculo
    if (resistencias.hasOwnProperty(chave)) { // Verifica se a chave existe em resistências
        (resistencias[chave] as number) += proeficiencia; // Adiciona o bônus de proficiência
    }
});
// ----------------- PERICIAS -------------------
const periciasFinais: Pericias = {
  acrobacia:       modificadores.Destreza,
  adestrar_animais: modificadores.Sabedoria,
  arcanismo:       modificadores.Inteligência,
  atletismo:       modificadores.Força,
  atuacao:         modificadores.Carisma,
  enganacao:       modificadores.Carisma,
  furtividade:     modificadores.Destreza,
  historia:        modificadores.Inteligência,
  intimidacao:     modificadores.Carisma,
  intuicao:        modificadores.Sabedoria,
  investigacao:    modificadores.Inteligência,
  medicina:        modificadores.Sabedoria,
  natureza:        modificadores.Inteligência,
  percepcao:       modificadores.Sabedoria,
  persuasao:       modificadores.Carisma,
  prestidigitacao: modificadores.Destreza,
  religiao:        modificadores.Inteligência,
  sobrevivencia:   modificadores.Sabedoria,
};

periciasTreinadas.forEach(pericia => {
  const chave = pericia.toLowerCase() as keyof Pericias;
  if (periciasFinais.hasOwnProperty(chave)) {
    periciasFinais[chave] += proeficiencia; 
  }
});











//------------------- TESTES -------------------



  //----------------- EXIBE RESULTADOS -------------------
  
  console.log('\n==================================================');
  console.log('✅ FICHA DE PERSONAGEM GERADA! ✅');
  console.log('==================================================\n');

  console.log(`👤 Raça: ${raca.nome}`);
  console.log(`🔰 Classe: ${classe.nome}`);
  console.log(`⭐ Nível: ${nivel}\n`);
  console.log(`📜 Antecedente: ${antecedente.nome}`);
  console.log(`❤️  Vida Máxima: ${fichaFinal.vidaMaxima}`);
  

  console.log('Atributos Finais:');
  console.log(JSON.stringify(fichaFinal.atributosFinais, null, 2));
  
  console.log('\n🎯 Pericias :', periciasFinais);

  console.log(`\n📊 Proficiência: +${proeficiencia}`)

  console.log('Resistências:');
  console.log(JSON.stringify(resistencias, null, 2));

  
}
criarPersonagem()
// startando o gerador de fichas  --->  npx ts-node src/index.ts