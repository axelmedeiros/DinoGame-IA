import 'babel-polyfill';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../game/constants';
import { Runner } from '../game';
import GeneticModel from '../ai/models/genetic/GeneticModel';
import RandomModel from '../ai/models/random/RandomModel';

// Quantidade de indivíduos de cada geração
const SAMPLES_COUNT = 15;

let runner = null;

const rankList = [];
const geneticModel = new GeneticModel();

let firstTime = true;

function setup() {
  // Inicializa o game. Runner contém todas as informações sobre o jogo, como velocidade
  // distancia, obstáculos, por exemplo
  runner = new Runner('.game', {
    DINO_COUNT:SAMPLES_COUNT,
    onReset: handleReset,
    onCrash: handleCrash,
    onRunning: handleRunning
  });
  // Seta o dino como uma variável global
  window.runner = runner;

  // Inicializa o jogo.
  runner.init();
}

// Essa função atua quando uma geração inteira morre
function handleReset(Dinos) {

  // Caso seja a primeira geração, todos os indivíduos seguirão o modelo aleatório
  if (firstTime) {
    firstTime = false;

    Dinos.forEach((dino) => {
      dino.model = new RandomModel();
      dino.model.init();
    });
  }
  // Caso contrário a próxima geração é treinada.
  else {
    console.info('Treinando');
    const chromosomes = rankList.map((dino) => dino.model.getChromosome());
    rankList.splice(0);
    geneticModel.fit(chromosomes);
    Dinos.forEach((dino, i) => {
      dino.model.setChromosome(chromosomes[i]);
    });
  }
}

// Função que toma a decisão pelo dinossauro, se vai pular ou não.
// É executada ao iniciar uma geração.
function handleRunning(dino, state) {
  let action = 0;
  if (!dino.jumping) {
    action = dino.model.predictSingle(convertStateToVector(state));
  }
  return action;
}


// Caso o jogo não funcione mais
function handleCrash(dino) {

  if (!rankList.includes(dino)) {
    rankList.unshift(dino);
  }
}

function convertStateToVector(state) {
  if (state) {
    return [
      state.obstacleX / CANVAS_WIDTH,
      state.obstacleWidth / CANVAS_WIDTH,
      state.speed / 100
    ];
  }
  return [0, 0, 0];
}

document.addEventListener('DOMContentLoaded', setup);
