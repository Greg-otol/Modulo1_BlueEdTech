const prompt = require("prompt-sync")();

let namePlayer = prompt("Qual o seu nome? ");

loopExterno: while (true) {
  console.log(`
Jokenpô - Pedra, papel e tesoura.
>>>>> ATENÇÃO! <<<<<
Digite 0 para PEDRA
Digite 1 para PAPEL
Digite 2 para TESOURA
`);

  let rounds = "";

  function promptRouds() {
    while (true) {
      rounds = +prompt(`Olá ${namePlayer}, quantas rodadas quer jogar? `);
      if (!isNaN(rounds)) return rounds;
      console.log(`Resposta inválida, digite apenas números!`);
    }
  }

  promptRouds();

  let sumRounds = 0;
  let playerSum = 0;
  let computerSum = 0;
  let tiedSum = 0;

  for (let i = 0; i < rounds; i++) {
    sumRounds++;

    const plays = ["PEDRA", "PAPEL", "TESOURA"];

    let computer = Math.floor(Math.random() * plays.length);

    console.log(`
Escolha sua jogada:
[0] PEDRA
[1] PAPEL
[2] TESOURA
    `);

    let play = "";

    loopInterno1: while (true) {
      play = +prompt(`${namePlayer}, qual a sua jogada? `);
      if (play !== 0 && play !== 1 && play !== 2) {
        console.log(`${play} é inválido, digite '0','1' ou '2'!`);
      } else {
        break;
      }
    }

    console.log();

    console.log(`O computador jogou ${plays[computer]}`);
    console.log(`${namePlayer} jogou ${plays[play]}`);

    if (
      (computer == 0 && play == 0) ||
      (computer == 1 && play == 1) ||
      (computer == 2 && play == 2)
    ) {
      tiedSum++;
      console.log(`A ${sumRounds}ª rodada deu Empate`);
    } else if (
      (computer == 0 && play == 1) ||
      (computer == 1 && play == 2) ||
      (computer == 2 && play == 0)
    ) {
      playerSum++;
      console.log(`${namePlayer} venceu a ${sumRounds}ª rodada!`);
    } else {
      computerSum++;
      console.log(`O computador venceu a ${sumRounds}ª rodada!`);
    }
  }

  if (playerSum > computerSum) {
    console.log(`
De ${sumRounds} rodada(s):
O computador ganhou ${computerSum} rodada(s)
${namePlayer} ganhou ${playerSum} rodada(s)
E teve ${tiedSum} empate
${namePlayer} é o CAMPEÃO com ${playerSum} rodada(s)!
        `);
  } else if (computerSum > playerSum) {
    console.log(`
De ${sumRounds} rodada(s):
${namePlayer} ganhou ${playerSum} rodada(s)
O computador ganhou ${computerSum} rodada(s)
E teve ${tiedSum} empate
O computador é o CAMPEÃO com ${computerSum} rodada(s)!
        `);
  } else if (playerSum === computerSum) {
    console.log(`
De ${sumRounds} rodada(s):
${namePlayer} ganhou ${playerSum} rodada(s)
O computador ganhou ${computerSum} rodada(s)
E teve ${tiedSum} empate
Jogo EMPATADO!`);
  }

  console.log();

  let playAgain = "";

  loopInterno2: while (playAgain !== "S" && playAgain !== "N") {
    playAgain = prompt(
      `${namePlayer}, deseja jogar novamente? S/N: `
    ).toUpperCase();
    if (playAgain !== "S" && playAgain !== "N") {
      console.log(`${playAgain} é inválido, digite 'S' ou 'N'!`);
    }
  }

  if (playAgain === "S") {
    continue;
  } else {
    console.clear();
    console.log();
    console.log("Jogo encerrado.");
    break;
  }
}