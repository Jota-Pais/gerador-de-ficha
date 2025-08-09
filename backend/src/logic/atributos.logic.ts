import { Classe, Atributos, Raça } from '../types/dnd.types';

export function calcularModificador(atributo: number): number {
  return Math.floor((atributo - 10) / 2);
}
export function calcularFicha(raca: Raça, classe: Classe, nivel: number, atributosBase: Atributos) {

  const atributosFinais = { ...atributosBase };
  for (const atributo of Object.keys(raca.bonus_atributos)) {
    const nomeAtributo = atributo as keyof Atributos;
    const bonus = raca.bonus_atributos[nomeAtributo];
    const valorBase = atributosFinais[nomeAtributo];
    if (typeof bonus === 'number' && typeof valorBase === 'number') {
      atributosFinais[nomeAtributo] = valorBase + bonus;
    }
  }
  // limita atributos finais
  for (const atributo of Object.keys(atributosFinais) as Array<keyof Atributos>) {
    const valorAtual = atributosFinais[atributo];
    let limite = 20; 
    if (classe.nome === "Bárbaro" && nivel === 20 && (atributo === 'Força' || atributo === 'Constituição')) {
      limite = 24; }
    if (valorAtual > limite) {
      atributosFinais[atributo] = limite;
    }
  }


  // ------ VIDA MAXIMA ----------
  const modConstituicao = calcularModificador(atributosFinais.Constituição);
  let vidaMaxima = 0;
  vidaMaxima += classe.dado_vida + modConstituicao; 
  if (nivel > 1) {
    const vidaPorNivel = (classe.dado_vida / 2) + 1;
    for (let i = 2; i <= nivel; i++) {
      vidaMaxima += vidaPorNivel + modConstituicao;
    }
  }
  return {
    atributosFinais,
    modConstituicao,
    vidaMaxima
  };
}