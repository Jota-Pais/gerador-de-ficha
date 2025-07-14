import { Classe } from "../types/dnd.types";
// --- BÁRBARO ---
export const BARBARO: Classe = {
  nome: "Bárbaro",
  dado_vida: 12,
  proficiencias: ["Armaduras leves", "Armaduras médias", "Escudos", "Armas simples", "Armas marciais"],
  resistencias: ["Força", "Constituição"],
  pericias: ["Adestrar Animais", "Atletismo", "Intimidação", "Natureza", "Percepção", "Sobrevivência"] // Escolha duas
};

// --- BARDO ---
export const BARDO: Classe = {
  nome: "Bardo",
  dado_vida: 8,
  proficiencias: ["Armaduras leves", "Armas simples", "Bestas de mão", "Espadas longas", "Rapiers", "Espadas curtas"],
  resistencias: ["Destreza", "Carisma"],
  pericias: ["Qualquer perícia"] // Escolha três
};

// --- BRUXO ---
export const BRUXO: Classe = {
  nome: "Bruxo",
  dado_vida: 8,
  proficiencias: ["Armaduras leves", "Armas simples"],
  resistencias: ["Sabedoria", "Carisma"],
  pericias: ["Arcanismo", "Enganação", "História", "Intimidação", "Investigação", "Natureza", "Religião"] // Escolha duas
};

// --- CLÉRIGO ---
export const CLERIGO: Classe = {
  nome: "Clérigo",
  dado_vida: 8,
  proficiencias: ["Armaduras leves", "Armaduras médias", "Escudos", "Armas simples"],
  resistencias: ["Sabedoria", "Carisma"],
  pericias: ["História", "Intuição", "Medicina", "Persuasão", "Religião"] // Escolha duas
};

// --- DRUIDA ---
export const DRUIDA: Classe = {
  nome: "Druida",
  dado_vida: 8,
  proficiencias: ["Armaduras leves (não metálicas)", "Armaduras médias (não metálicas)", "Escudos (não metálicos)", "Clavas", "Adagas", "Dardos", "Azagaias", "Maças", "Bordões", "Cimitarras", "Fuinhas", "Lanças"],
  resistencias: ["Inteligência", "Sabedoria"],
  pericias: ["Arcanismo", "Adestrar Animais", "Intuição", "Medicina", "Natureza", "Percepção", "Religião", "Sobrevivência"] // Escolha duas
};

// --- FEITICEIRO ---
export const FEITICEIRO: Classe = {
  nome: "Feiticeiro",
  dado_vida: 6,
  proficiencias: ["Adagas", "Dardos", "Fuinhas", "Bordões", "Bestas leves"],
  resistencias: ["Constituição", "Carisma"],
  pericias: ["Arcanismo", "Enganação", "Intuição", "Intimidação", "Persuasão", "Religião"] // Escolha duas
};

// --- GUERREIRO ---
export const GUERREIRO: Classe = {
  nome: "Guerreiro",
  dado_vida: 10,
  proficiencias: ["Todas as armaduras", "Escudos", "Armas simples", "Armas marciais"],
  resistencias: ["Força", "Constituição"],
  pericias: ["Acrobacia", "Adestrar Animais", "Atletismo", "História", "Intuição", "Intimidação", "Percepção", "Sobrevivência"] // Escolha duas
};

// --- LADINO ---
export const LADINO: Classe = {
  nome: "Ladino",
  dado_vida: 8,
  proficiencias: ["Armaduras leves", "Armas simples", "Bestas de mão", "Espadas longas", "Rapiers", "Espadas curtas"],
  resistencias: ["Destreza", "Inteligência"],
  pericias: ["Acrobacia", "Atletismo", "Atuação", "Enganação", "Furtividade", "Intimidação", "Intuição", "Investigação", "Percepção", "Persuasão", "Prestidigitação"] // Escolha quatro
};

// --- MAGO ---
export const MAGO: Classe = {
  nome: "Mago",
  dado_vida: 6,
  proficiencias: ["Adagas", "Dardos", "Fuinhas", "Bordões", "Bestas leves"],
  resistencias: ["Inteligência", "Sabedoria"],
  pericias: ["Arcanismo", "História", "Intuição", "Investigação", "Medicina", "Religião"] // Escolha duas
};

// --- MONGE ---
export const MONGE: Classe = {
  nome: "Monge",
  dado_vida: 8,
  proficiencias: ["Armas simples", "Espadas curtas"],
  resistencias: ["Força", "Destreza"],
  pericias: ["Acrobacia", "Atletismo", "Furtividade", "História", "Intuição", "Religião"] // Escolha duas
};

// --- PALADINO ---
export const PALADINO: Classe = {
  nome: "Paladino",
  dado_vida: 10,
  proficiencias: ["Todas as armaduras", "Escudos", "Armas simples", "Armas marciais"],
  resistencias: ["Sabedoria", "Carisma"],
  pericias: ["Atletismo", "Intuição", "Intimidação", "Medicina", "Persuasão", "Religião"] // Escolha duas
};

// --- RANGER ---
export const RANGER: Classe = {
  nome: "Ranger (Patrulheiro)",
  dado_vida: 10,
  proficiencias: ["Armaduras leves", "Armaduras médias", "Escudos", "Armas simples", "Armas marciais"],
  resistencias: ["Força", "Destreza"],
  pericias: ["Adestrar Animais", "Atletismo", "Furtividade", "Intuição", "Investigação", "Natureza", "Percepção", "Sobrevivência"] // Escolha três
};