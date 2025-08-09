
export interface Atributos {
  Força: number;
  Destreza: number;
  Constituição: number;
  Inteligência: number;
  Sabedoria: number;
  Carisma: number;
}

export interface Raça {
  nome: string;
  bonus_atributos: Partial<Atributos>; 
  tracos: string[];
  deslocamento: number;
  idiomas: string[]; 

}

export interface Classe {
  nome: string;
  dado_vida: number;
  proficiencias:  string[];
  resistencias: string[];
  pericias: string[];
  numero_pericias_escolha: number;
}

export interface Pericias {
  acrobacia: number;
  adestrar_animais: number;
  arcanismo: number;
  atletismo: number;
  atuacao: number;
  enganacao: number;
  furtividade: number;
  historia: number;
  intimidacao: number;
  intuicao: number;
  investigacao: number;
  medicina: number;
  natureza: number;
  percepcao: number;
  persuasao: number;
  prestidigitacao: number;
  religiao: number;
  sobrevivencia: number;
}

export interface Resistencias {
  forca: number;
  destreza: number;
  constituicao: number;
  inteligencia: number;
  sabedoria: number;
  carisma: number;
}
export interface Antecedente {
  nome: string;
  pericias: string[];
}
