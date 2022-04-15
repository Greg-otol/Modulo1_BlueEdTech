const prompt = require("prompt-sync")();

function lineSpace() {
  let line = "―";
  console.log(line.repeat(106));
  console.log();
}

console.log(`
           Bluemer e o Projeto 1

Ao fim de mais um dia de trabalho exaustivo,
 Bluemer sai as pressas pra chegar em casa
    e desenvolver seu primeiro projeto.
`);

lineSpace();

const questions = [
  prompt(
    "Vamos ajudar o Bluemer a desenvolver seu primeiro projeto? S/N: "
  ).toUpperCase(),
  prompt(
    "Você pode ajudar o Bluemer a criar uma história? S/N: "
  ).toUpperCase(),
  prompt(
    "Vamos ajudar o Bluemer a pensar em cinco perguntas? S/N: "
  ).toUpperCase(),
  prompt(
    "Você consegue ajudar o Bluemer a somar as repostas positivas? S/N: "
  ).toUpperCase(),
  prompt("Vamos ajudar o Bluemer a criar cinco respostas? S/N: ").toUpperCase(),
];

lineSpace();

const yes = "S";
let sumYes = 0;

for (let i = 0; i < questions.length; i++) {
  if (questions[i] === yes) {
    sumYes++;
  }
}

if (sumYes === 0) {
  console.log(`${sumYes} Respostas sim: Você falha miseravelmente!`);
} else if (sumYes === 1 || sumYes == 2) {
  console.log(
    `${sumYes} Respostas sim: Você falha, mas ainda consegue fugir da situação!`
  );
} else if (sumYes === 3) {
  console.log(
    `${sumYes} Respostas sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco!`
  );
} else if (sumYes === 4) {
  console.log(
    `${sumYes} Respostas sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita!`
  );
} else if (sumYes === 5) {
  console.log(
    `${sumYes} Respostas sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações!`
  );
}
