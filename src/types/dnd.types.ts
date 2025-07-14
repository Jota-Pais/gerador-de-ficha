
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
}