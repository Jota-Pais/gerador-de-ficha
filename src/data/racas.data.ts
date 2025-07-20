import { Raça } from '../types/dnd.types';

export const ANAO_DA_COLINA: Raça = {
  nome: "Anão da Colina",
  bonus_atributos: { "Constituição": 2, "Sabedoria": 1 },
  tracos: [
    "VisaoNoEscuro",
    "ResilienciaAna",
    "TreinamentoAnaoEmCombate",
    "ProficienciaComFerramentas",
    "EspecializacaoEmRochas",
    "TenacidadeAna"
  ],
  deslocamento: 7.5,
  idiomas: ["Comum", "Anão"]
};

export const ANAO_DA_MONTANHA: Raça = {
  nome: "Anão da Montanha",
  bonus_atributos: { "Constituição": 2, "Força": 2 },
  tracos: [
    "VisaoNoEscuro",
    "ResilienciaAna",
    "TreinamentoAnaoEmCombate",
    "ProficienciaComFerramentas",
    "EspecializacaoEmRochas",
    "TreinamentoAnaoComArmadura"
  ],
  deslocamento: 7.5,
  idiomas: ["Comum", "Anão"]
};

// --- ELFO ---
export const ALTO_ELFO: Raça = {
  nome: "Alto Elfo",
  bonus_atributos: { "Destreza": 2, "Inteligência": 1 },
  tracos: [
    "VisaoNoEscuro",
    "SentidosAgucados",
    "AncestralFeerico",
    "Transe",
    "TreinamentoComArmasElficas",
    "TruqueAdicional",
    "IdiomaAdicional"
  ],
  deslocamento: 9,
  idiomas: ["Comum", "Élfico"]
};

export const ELFO_DA_FLORESTA: Raça = {
  nome: "Elfo da Floresta",
  bonus_atributos: { "Destreza": 2, "Sabedoria": 1 },
  tracos: [
    "VisaoNoEscuro",
    "SentidosAgucados",
    "AncestralFeerico",
    "Transe",
    "TreinamentoComArmasElficas",
    "MascaraDaNatureza"
  ],
  deslocamento: 10.5,
  idiomas: ["Comum", "Élfico"]
};

export const ELFO_NEGRO_DROW: Raça = {
    nome: "Elfo Negro (Drow)",
    bonus_atributos: { "Destreza": 2, "Carisma": 1 },
    tracos: [
      "VisaoNoEscuro", // Drows têm visão no escuro superior (36m), mas o texto base é o mesmo.
      "SentidosAgucados",
      "AncestralFeerico",
      "Transe",
      "SensibilidadeALuzSolar",
      "MagiaDrow",
      "TreinamentoDrowComArmas"
    ],
    deslocamento: 9,
    idiomas: ["Comum", "Élfico", "Subterrâneo"]
};

// --- HALFLING ---
export const HALFLING_PES_LEVES: Raça = {
    nome: "Halfling Pés Leves",
    bonus_atributos: { "Destreza": 2, "Carisma": 1 },
    tracos: [
      "Sortudo",
      "Bravura",
      "AgilidadeHalfling",
      "FurtividadeNatural"
    ],
    deslocamento: 7.5,
    idiomas: ["Comum", "Halfling"]
};

export const HALFLING_ROBUSTO: Raça = {
    nome: "Halfling Robusto",
    bonus_atributos: { "Destreza": 2, "Constituição": 1 },
    tracos: [
      "Sortudo",
      "Bravura",
      "AgilidadeHalfling",
      "ResilienciaDosRobustos"
    ],
    deslocamento: 7.5,
    idiomas: ["Comum", "Halfling"]
};

// --- HUMANO ---
export const HUMANO: Raça = {
    nome: "Humano",
    bonus_atributos: { "Força": 1, "Destreza": 1, "Constituição": 1, "Inteligência": 1, "Sabedoria": 1, "Carisma": 1 }, 
    tracos: [],
    deslocamento: 9,
    idiomas: ["Comum"] // Mais um idioma à escolha do jogador
};

// --- DRACONATO ---
export const DRACONATO: Raça = {
    nome: "Draconato",
    bonus_atributos: { "Força": 2, "Carisma": 1 },
    tracos: [
      "AncestralDraconico",
      "ArmaDeSopro",
      "ResistenciaADano"
    ],
    deslocamento: 9,
    idiomas: ["Comum", "Dracônico"]
};

// --- GNOMO ---
export const GNOMO_DA_ROCHA: Raça = {
    nome: "Gnomo da Rocha",
    bonus_atributos: { "Inteligência": 2, "Constituição": 1 },
    tracos: [
      "VisaoNoEscuro",
      "EspertezaGnomica",
      "ConhecimentoDeArtifice",
      "Engenhoqueiro"
    ],
    deslocamento: 7.5,
    idiomas: ["Comum", "Gnômico"]
};

export const GNOMO_DA_FLORESTA: Raça = {
    nome: "Gnomo da Floresta",
    bonus_atributos: { "Inteligência": 2, "Destreza": 1 },
    tracos: [
      "VisaoNoEscuro",
      "EspertezaGnomica",
      "IlusionistaNato",
      "FalarComBestasPequenas"
    ],
    deslocamento: 7.5,
    idiomas: ["Comum", "Gnômico"]
};

// --- MEIO-ELFO ---
export const MEIO_ELFO: Raça = {
    nome: "Meio-Elfo",
    bonus_atributos: { "Carisma": 2 }, // Mais +1 em dois outros atributos à escolha
    tracos: [
      "VisaoNoEscuro",
      "AncestralFeerico",
      "VersatilidadeEmPericia"
    ],
    deslocamento: 9,
    idiomas: ["Comum", "Élfico"] // Mais um idioma à escolha do jogador
};

// --- MEIO-ORC ---
export const MEIO_ORC: Raça = {
    nome: "Meio-Orc",
    bonus_atributos: { "Força": 2, "Constituição": 1 },
    tracos: [
      "VisaoNoEscuro",
      "Ameacador",
      "ResistenciaImplacavel",
      "AtaquesSelvagens"
    ],
    deslocamento: 9,
    idiomas: ["Comum", "Órquico"]
};

// --- TIEFLING ---
export const TIEFLING: Raça = {
    nome: "Tiefling",
    bonus_atributos: { "Carisma": 2, "Inteligência": 1 },
    tracos: [
      "VisaoNoEscuro",
      "ResistenciaInfernal",
      "LegadoInfernal"
    ],
    deslocamento: 9,
    idiomas: ["Comum", "Infernal"]
};