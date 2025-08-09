import { Raça, Classe, Antecedente } from '../types/dnd.types';

// Raças
import anaoDaColinaData from './racas/anao_da_colina.json';
import anaoDaMontanhaData from './racas/anao_da_montanha.json';
import altoElfoData from './racas/alto_elfo.json';
import elfoDaFlorestaData from './racas/elfo_da_floresta.json';
import elfoNegroDrowData from './racas/elfo_negro_drow.json';
import halflingPesLevesData from './racas/halfling_pes_leves.json';
import halflingRobustoData from './racas/halfling_robusto.json';
import humanoData from './racas/humano.json';
import draconatoData from './racas/draconato.json';
import gnomoDaRochaData from './racas/gnomo_da_rocha.json';
import gnomoDaFlorestaData from './racas/gnomo_da_floresta.json';
import meioElfoData from './racas/meio_elfo.json';
import meioOrcData from './racas/meio_orc.json';
import tieflingData from './racas/tiefling.json';

// Classes
import barbaroData from './classes/barbaro.json';
import bardoData from './classes/bardo.json';
import bruxoData from './classes/bruxo.json';
import clerigoData from './classes/clerigo.json';
import druidaData from './classes/druida.json';
import feiticeiroData from './classes/feiticeiro.json';
import guerreiroData from './classes/guerreiro.json';
import ladinoData from './classes/ladino.json';
import magoData from './classes/mago.json';
import mongeData from './classes/monge.json';
import paladinoData from './classes/paladino.json';
import rangerData from './classes/ranger.json';

// Antecedentes
import acolitoData from './antecedentes/acolito.json';
import artesaoDeGuildaData from './antecedentes/artesao_de_guilda.json';
import artistaData from './antecedentes/artista.json';
import charlataoData from './antecedentes/charlatao.json';
import criminosoData from './antecedentes/criminoso.json';
import eremitaData from './antecedentes/eremita.json';
import forasteiroData from './antecedentes/forasteiro.json';
import heroiDoPovoData from './antecedentes/heroi_do_povo.json';
import marinheiroData from './antecedentes/marinheiro.json';
import nobreData from './antecedentes/nobre.json';
import orfaoData from './antecedentes/orfao.json';
import sabioData from './antecedentes/sabio.json';
import soldadoData from './antecedentes/soldado.json';

export const TODAS_AS_RACAS: Raça[] = [
  anaoDaColinaData as Raça,
  anaoDaMontanhaData as Raça,
  altoElfoData as Raça,
  elfoDaFlorestaData as Raça,
  elfoNegroDrowData as Raça,
  halflingPesLevesData as Raça,
  halflingRobustoData as Raça,
  humanoData as Raça,
  draconatoData as Raça,
  gnomoDaRochaData as Raça,
  gnomoDaFlorestaData as Raça,
  meioElfoData as Raça,
  meioOrcData as Raça,
  tieflingData as Raça,
];

export const TODAS_AS_CLASSES: Classe[] = [
  barbaroData as Classe,
  bardoData as Classe,
  bruxoData as Classe,
  clerigoData as Classe,
  druidaData as Classe,
  feiticeiroData as Classe,
  guerreiroData as Classe,
  ladinoData as Classe,
  magoData as Classe,
  mongeData as Classe,
  paladinoData as Classe,
  rangerData as Classe,
];

export const TODOS_OS_ANTECEDENTES: Antecedente[] = [
  acolitoData as Antecedente,
  artesaoDeGuildaData as Antecedente,
  artistaData as Antecedente,
  charlataoData as Antecedente,
  criminosoData as Antecedente,
  eremitaData as Antecedente,
  forasteiroData as Antecedente,
  heroiDoPovoData as Antecedente,
  marinheiroData as Antecedente,
  nobreData as Antecedente,
  orfaoData as Antecedente,
  sabioData as Antecedente,
  soldadoData as Antecedente,
];
