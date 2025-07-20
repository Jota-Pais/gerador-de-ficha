import { Classe } from "../types/dnd.types";

// --- BÁRBARO ---
export const BARBARO: Classe = {
  nome: "Bárbaro",
  dado_vida: 12,
  proficiencias: ["Armaduras leves", "Armaduras médias", "Escudos", "Armas simples", "Armas marciais"],
  resistencias: ["Forca", "Constituicao"],
  pericias: ["Adestrar_Animais", "Atletismo", "Intimidacao", "Natureza", "Percepcao", "Sobrevivencia"], // Escolha duas
  numero_pericias_escolha: 2
};

// --- BARDO ---
export const BARDO: Classe = {
  nome: "Bardo",
  dado_vida: 8,
  proficiencias: ["Armaduras leves", "Armas simples", "Bestas de mão", "Espadas longas", "Rapiers", "Espadas curtas"],
  resistencias: ["Destreza", "Carisma"],
  pericias: [ "Acrobacia","Arcanismo","Atletismo","Atuacao","Enganacao","Furtividade","Histria","Intimidacao","Intuicao","Investigacao","Adestrar_animais","Medicina","Natureza","Percepcao","Persuasao","Prestidigitacao", "Religiao","Sobrevivencia",], 
  numero_pericias_escolha: 3
};

// --- BRUXO ---
export const BRUXO: Classe = {
  nome: "Bruxo",
  dado_vida: 8,
  proficiencias: ["Armaduras leves", "Armas simples"],
  resistencias: ["Sabedoria", "Carisma"],
  pericias: ["Arcanismo", "Enganacao", "Historia", "Intimidacao", "Investigacao", "Natureza", "Religiao"], // Escolha duas
  numero_pericias_escolha: 2
};

// --- CLÉRIGO ---
export const CLERIGO: Classe = {
  nome: "Clérigo",
  dado_vida: 8,
  proficiencias: ["Armaduras leves", "Armaduras médias", "Escudos", "Armas simples"],
  resistencias: ["Sabedoria", "Carisma"],
  pericias: ["Historia", "Intuicao", "Medicina", "Persuasao", "Religiao"], // Escolha duas
  numero_pericias_escolha: 2
};

// --- DRUIDA ---
export const DRUIDA: Classe = {
  nome: "Druida",
  dado_vida: 8,
  proficiencias: ["Armaduras leves (não metálicas)", "Armaduras médias (não metálicas)", "Escudos (não metálicos)", "Clavas", "Adagas", "Dardos", "Azagaias", "Maças", "Bordões", "Cimitarras", "Fuinhas", "Lanças"],
  resistencias: ["Inteligencia", "Sabedoria"],
  pericias: ["Arcanismo", "Adestrar_Animais", "Intuicao", "Medicina", "Natureza", "Percepcao", "Religiao", "Sobrevivencia"], // Escolha duas
  numero_pericias_escolha: 2
};

// --- FEITICEIRO ---
export const FEITICEIRO: Classe = {
  nome: "Feiticeiro",
  dado_vida: 6,
  proficiencias: ["Adagas", "Dardos", "Fuinhas", "Bordões", "Bestas leves"],
  resistencias: ["Constituicao", "Carisma"],
  pericias: ["Arcanismo", "Enganacao", "Intuicao", "Intimidacao", "Persuasao", "Religiao"], // Escolha duas
  numero_pericias_escolha: 2
};

// --- GUERREIRO ---
export const GUERREIRO: Classe = {
  nome: "Guerreiro",
  dado_vida: 10,
  proficiencias: ["Todas as armaduras", "Escudos", "Armas simples", "Armas marciais"],
  resistencias: ["Forca", "Constituicao"],
  pericias: ["Acrobacia", "Adestrar_Animais", "Atletismo", "Historia", "Intuicao", "Intimidacao", "Percepcao", "Sobrevivencia"], // Escolha duas
  numero_pericias_escolha: 2
};

// --- LADINO ---
export const LADINO: Classe = {
  nome: "Ladino",
  dado_vida: 8,
  proficiencias: ["Armaduras leves", "Armas simples", "Bestas de mão", "Espadas longas", "Rapiers", "Espadas curtas"],
  resistencias: ["Destreza", "Inteligencia"],
  pericias: ["Acrobacia", "Atletismo", "Atuacao", "Enganacao", "Furtividade", "Intimidacao", "Intuicao", "Investigacao", "Percepcao", "Persuasao", "Prestidigitacao"], // Escolha quatro
  numero_pericias_escolha: 4
};

// --- MAGO ---
export const MAGO: Classe = {
  nome: "Mago",
  dado_vida: 6,
  proficiencias: ["Adagas", "Dardos", "Fuinhas", "Bordões", "Bestas leves"],
  resistencias: ["Inteligencia", "Sabedoria"],
  pericias: ["Arcanismo", "Historia", "Intuicao", "Investigacao", "Medicina", "Religiao"], // Escolha duas
  numero_pericias_escolha: 2
};

// --- MONGE ---
export const MONGE: Classe = {
  nome: "Monge",
  dado_vida: 8,
  proficiencias: ["Armas simples", "Espadas curtas"],
  resistencias: ["Forca", "Destreza"],
  pericias: ["Acrobacia", "Atletismo", "Furtividade", "Historia", "Intuicao", "Religiao"], // Escolha duas
  numero_pericias_escolha: 2
};

// --- PALADINO ---
export const PALADINO: Classe = {
  nome: "Paladino",
  dado_vida: 10,
  proficiencias: ["Todas as armaduras", "Escudos", "Armas simples", "Armas marciais"],
  resistencias: ["Sabedoria", "Carisma"],
  pericias: ["Atletismo", "Intuicao", "Intimidacao", "Medicina", "Persuasao", "Religiao"], // Escolha duas
  numero_pericias_escolha: 2
};

// --- RANGER ---
export const RANGER: Classe = {
  nome: "Ranger (Patrulheiro)",
  dado_vida: 10,
  proficiencias: ["Armaduras leves", "Armaduras médias", "Escudos", "Armas simples", "Armas marciais"],
  resistencias: ["Forca", "Destreza"],
  pericias: ["Adestrar_Animais", "Atletismo", "Furtividade", "Intuicao", "Investigacao", "Natureza", "Percepcao", "Sobrevivencia"], // Escolha três
  numero_pericias_escolha: 3
};