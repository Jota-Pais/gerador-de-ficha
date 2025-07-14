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